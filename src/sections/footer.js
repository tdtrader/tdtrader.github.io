import * as React from 'react';
import { NewsletterSignUp } from './newsletter-sign-up';
import { Disclaimer } from './disclaimer';

export const Footer = () => {
  return (
    <div className="td-trader-footer">
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col col-12 col-sm-12 col-md-8 col-lg-4">
            <h2>Get updates</h2>
            <p>
              We are working on more features such as additional currency pairs, timeframes and exchanges.
              Sign up below for updates.
            </p>

            <NewsletterSignUp />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-5 td-trader-footer__disclaimer">
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  );
}