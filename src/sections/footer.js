import * as React from 'react';

export const Footer = () => {
  return (
    <div className="td-trader-footer">
      <div className="container">
        <div className="row">
          <div className="col col-md-4">
            <h2>Get updates</h2>
            <p>
              We are working on more features such as additional currency pairs, timeframes and exchanges.
              Sign up below for updates.
                </p>

            <div className="input-group mb-3 td-trader-footer__subscribe-form">
              <input type="email" className="form-control" placeholder="email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Subscribe</button>
              </div>
            </div>

          </div>
          <div className="col col-md-6 td-trader-footer__disclaimer">
            <h2>Disclaimer</h2>
            <p>
              Before using this Telegram bot, please make sure that you note the following important information:
                </p>
            <h3>
              Do your Own Research
                </h3>
            <p>
              Content produced by the bot is intended to be used and must be used for informational purposes only.
              It is very important to do your own analysis before making any investment based on your own personal circumstances.
              You should take independent financial advice from a professional in connection with, or independently research and verify,any information produced by the bot and wish to rely upon, whether for the purpose of making an investment decision or otherwise.
                </p>
            <h3>No Investment Advice</h3>
            <p>
              TDtrader.net is not a broker/dealer, we are not an investment advisor, we have no access to non-public information about publicly traded companies, and this is not a place for the giving or receiving of financial advice, advice concerning investment decisions or tax or legal advice.
              We are not regulated by the Financial Services Authority. Our bot offering is solely for informational &amp; educational purposes so that users can easily run their own valuations.
                </p>
            <h3>No reliance</h3>
            <p>
              Accordingly, we will not be liable, whether in contract, tort (including negligence) or otherwise, in respect of any damage, expense or other loss you may suffer arising out of such information or any reliance you may place upon such information.
                </p>
            <h3>Investment Warnings</h3>
            <p>
              We would like to draw your attention to the following important investment warnings:
            </p>
            <ul>
              <li>The value of shares and investments and the income derived from them can go down as well as up;</li>
              <li>Investors may not get back the amount they invested - losing one's shirt is a real risk;</li>
              <li>Past performance is not a guide to future performance.</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}