import * as React from "react";
import logo from "../logo.svg";

const TELEGRAM_URL = "http://t.me/TDupdater_bot";
const TICKER_URL = "https://tdtrader-cc108.firebaseio.com/.json";

export class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
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
    this.setState({ data, error: null });
  }

  render() {
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
                <table className="td-trader-count-table">
                  <tr>
                    <th>Ticker</th>
                    <th>TD Count</th>
                    <th>Name</th>
                  </tr>
                  {this.state.data.map(d => {
                    return (
                      <tr>
                        <td>{d.ticker}</td>
                        <td>{d.tdCount}</td>
                        <td>{d.name}</td>
                      </tr>
                    );
                  })}
                </table>
              ) : this.state.error ? (
                <div className="td-trader-fetch-error">
                  Error loading data: {this.state.error}
                </div>
              ) : (
                <div className="td-trader-loading-data">Loading data...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
