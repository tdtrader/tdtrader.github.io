import * as React from "react";
import logo from "../logo.svg";
import { CountTable, SortType } from "./count-table";
import { LoadingIndicator } from "./loading-indicator";
import { ErrorMessage } from "./error-message";
import { TableMetaData } from "./table-metadata";

const TELEGRAM_URL = "http://t.me/TDupdater_bot";
const TICKER_URL = "https://tdtrader-cc108.firebaseio.com/stocks/.json";

export class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      totalRows: 0,
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
    let response = await fetch(TICKER_URL);
    let unformattedData = await response.json();
    const data = [];
    Object.keys(unformattedData).forEach(key => {
      data.push({
        ticker: key,
        name: unformattedData[key].name,
        tdCount: unformattedData[key]["TD_count"]
      });
    });
    this.setState({
      data,
      error: null,
      totalRows: data.length,
      lastFetch: Date.now()
    });
  }

  render() {
    const sortedData = this.sortData();
    const filteredData = this.filterData(sortedData);
    const slicedData = filteredData.slice(0, this.state.rowShowCount);

    return (
      <div className="td-trader-main-content">
        <div className="container">
          <div className="row justify-content-md-center d-lg-none">
            <div className="col">
              <img
                src={logo}
                className="td-trader-main-content__logo td-trader-main-content__logo--small"
                alt="logo"
              />
            </div>
          </div>
          <div className="row justify-content-lg-center">
            <div className="col col-md-12 col-lg-4">
              <h1>Sequential Countdown Tracker</h1>
              <p>
                TDtrader is a Telegram bot that keeps you up to date on the
                current TD count. You simply get a notification on every candle
                close.
              </p>
              <a href={TELEGRAM_URL} className="btn btn-primary">
                Pair with Telegram
                <span>
                  <i className="fab fa-telegram-plane"></i>
                </span>
              </a>
            </div>
            <div className="col col-lg-5 d-none d-lg-block">
              <img
                src={logo}
                className="td-trader-main-content__logo"
                alt="logo"
              />
            </div>
          </div>
          <div className="row justify-content-lg-center">
            <div className="col col-md-12 col-lg-9">
              {this.state.data ? (
                <React.Fragment>
                  <TableMetaData
                    totalRows={this.state.totalRows}
                    rowShowCount={slicedData.length}
                    show100More={this.show100More}
                    showAllRows={this.showAllRows}
                    showTop100={this.showTop100}
                    lastFetch={this.state.lastFetch}
                    isFiltered={filteredData.length < sortedData.length}
                    showActions={false}
                  />
                  <CountTable
                    data={slicedData}
                    currentSortType={this.state.sortType}
                    setSortType={this.setSortType}
                    onFilterTicker={this.onFilterTicker}
                    onFilterName={this.onFilterName}
                    onFilterCount={this.onFilterCount}
                  />
                  <TableMetaData
                    totalRows={this.state.totalRows}
                    rowShowCount={slicedData.length}
                    show100More={this.show100More}
                    showAllRows={this.showAllRows}
                    showTop100={this.showTop100}
                    lastFetch={this.state.lastFetch}
                    isFiltered={filteredData.length < sortedData.length}
                    showActions={true}
                  />
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

  show100More = () => {
    this.setState({
      rowShowCount: this.state.rowShowCount + 100
    });
  };

  showAllRows = () => {
    this.setState({
      rowShowCount: this.state.totalRows
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
