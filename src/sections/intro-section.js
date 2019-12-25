import * as React from "react";

const TELEGRAM_URL = "http://t.me/TDupdater_bot";

export const IntroSection = () => {
  return (
    <React.Fragment>
      <h1>Sequential Countdown Tracker</h1>
      <p>
        TDtrader is a Telegram bot that keeps you up to date on the current TD
        count. You simply get a notification on every candle close.
      </p>
      <a href={TELEGRAM_URL} className="btn btn-primary">
        Pair with Telegram
        <span>
          <i className="fab fa-telegram-plane"></i>
        </span>
      </a>
    </React.Fragment>
  );
};
