import * as React from "react";
import { CountTable, SortType } from "./count-table";
import { LoadingIndicator } from "./loading-indicator";
import { ErrorMessage } from "./error-message";
import { TableMetaData } from "./table-metadata";
import { IntroSection } from "./intro-section";

const TICKER_URL = "https://tdtrader-cc108.firebaseio.com/stocks/.json";

export class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      rowShowCount: 100,
      lastFetch: null,
      sortType: SortType.CountAscending,
      tickerFilter: null,
      countFilter: null,
      nameFilter: null
    };
  }
  componentDidMount() {
    this.getData().catch(error => {
      console.error("Issue fetching data");
      this.setState({
        error: JSON.stringify(error),
        data: null
      });
    });
  }

  async getData() {
    let response = await fetch(TICKER_URL, { cache: "no-store" });
    let unformattedData = await response.json();
    const data = [];
    Object.keys(unformattedData).forEach(key => {
      data.push({
        ticker: key,
        name: unformattedData[key].name,
        tdCount: unformattedData[key].tdCount
      });
    });
    this.setState({
      data,
      error: null,
      lastFetch: Date.now()
    });
  }

  getMetaDataComponent = (showActions, totalRows, rowShowCount) => {
    return (
      <TableMetaData
        totalRows={totalRows}
        rowShowCount={rowShowCount}
        showMore={this.showMore}
        showAllRows={this.showAllRows}
        showTop100={this.showTop100}
        lastFetch={this.state.lastFetch}
        showActions={showActions}
      />
    );
  };

  render() {
    const sortedData = this.sortData();
    const filteredData = this.filterData(sortedData);
    const slicedData = filteredData.slice(0, this.state.rowShowCount);

    return (
      <div className="td-trader-main-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col col-sm-12 col-md-12 col-lg-4">
              <IntroSection />
            </div>
            <div className="col col-sm-12 col-md-12 col-lg-7">
              {this.state.data ? (
                <React.Fragment>
                  {this.getMetaDataComponent(
                    false,
                    filteredData.length,
                    slicedData.length
                  )}
                  <CountTable
                    data={slicedData}
                    currentSortType={this.state.sortType}
                    setSortType={this.setSortType}
                    onFilterTicker={this.onFilterTicker}
                    onFilterName={this.onFilterName}
                    onFilterCount={this.onFilterCount}
                  />
                  {this.getMetaDataComponent(
                    true,
                    filteredData.length,
                    slicedData.length
                  )}
                </React.Fragment>
              ) : this.state.error ? (
                <ErrorMessage error={this.state.error} />
              ) : (
                <LoadingIndicator />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  onFilterTicker = value => {
    this.setState({
      tickerFilter: value || null
    });
  };

  onFilterName = value => {
    this.setState({
      nameFilter: value || null
    });
  };

  onFilterCount = value => {
    this.setState({
      countFilter: value || null
    });
  };

  setSortType = sortType => {
    this.setState({
      sortType
    });
  };

  showMore = count => {
    this.setState({
      rowShowCount: this.state.rowShowCount + count
    });
  };

  showAllRows = () => {
    this.setState({
      rowShowCount: this.state.data.length
    });
  };

  showTop100 = () => {
    this.setState({
      rowShowCount: 100
    });
  };

  sortData = () => {
    const data = this.state.data;
    if (!data) return [];

    let sortedData;

    switch (this.state.sortType) {
      case SortType.AlphabeticallyAscending:
        sortedData = data.sort((a, b) => {
          return a.ticker < b.ticker ? -1 : b.ticker > a.ticker ? 1 : 0;
        });
        break;
      case SortType.AlphabeticallyDescending:
        sortedData = data.sort((a, b) => {
          return b.ticker < a.ticker ? -1 : a.ticker > b.ticker ? 1 : 0;
        });
        break;
      case SortType.CountAscending:
        sortedData = data.sort((a, b) => {
          return b.tdCount < a.tdCount ? -1 : a.tdCount > b.tdCount ? 1 : 0;
        });
        break;
      case SortType.CountDescending:
        sortedData = data.sort((a, b) => {
          return a.tdCount < b.tdCount ? -1 : b.tdCount > a.tdCount ? 1 : 0;
        });
        break;
      default:
        sortedData = data;
    }

    return sortedData;
  };

  filterData = data => {
    const { countFilter, tickerFilter, nameFilter } = this.state;

    const filteredData = data.filter(d => {
      const tickerFilterResult =
        !tickerFilter ||
        d.ticker.toLowerCase().includes(tickerFilter.toLowerCase());
      const nameFilterResult =
        !nameFilter || d.name.toLowerCase().includes(nameFilter.toLowerCase());
      const countFilterResult =
        !countFilter || d.tdCount === parseInt(countFilter, 10);
      return countFilterResult && tickerFilterResult && nameFilterResult;
    });

    return filteredData;
  };
}
