import * as React from "react";
import logo from "../logo.svg";

const TELEGRAM_URL = "http://t.me/TDupdater_bot";

export class MainContent extends React.Component {
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
        </div>
      </div>
    );
  }
}
