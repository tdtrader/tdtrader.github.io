import * as React from "react";

export const ErrorMessage = ({ error }) => {
  return (
    <div className="td-trader-fetch-error">
      Error loading data: {this.state.error}
    </div>
  );
};
