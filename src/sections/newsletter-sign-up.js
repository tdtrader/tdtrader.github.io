import * as React from "react";

export const NewsletterSignUp = () => {
  return (
    <form
      className="validate input-group mb-3 td-trader-footer__subscribe-form"
      action="https://tdtrader.us20.list-manage.com/subscribe/post?u=5b7695e66d89a9bedf569a9a9&amp;id=8074d54825"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <input
        htmlFor="mce-EMAIL"
        type="email"
        className="required form-control"
        placeholder="email address"
        aria-label="Email address"
        id="mce-EMAIL"
        name="email"
      />
      {/* 
                real people should not fill this next input in and expect good things
                do not remove this or risk form bot signups 
              */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_5b7695e66d89a9bedf569a9a9_8074d54825"
          tabIndex="-1"
          defaultValue=""
        />
      </div>

      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  );
};
