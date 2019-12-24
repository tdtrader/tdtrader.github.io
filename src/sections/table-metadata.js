import * as React from "react";

export const TableMetaData = ({
  totalRows,
  rowShowCount,
  show100More,
  showAllRows,
  lastFetch,
  isFiltered,
  showActions
}) => {
  return (
    <React.Fragment>
      <div className="td-trader-count-table-metadata">
        <div>
          <strong>Total rows:</strong> {totalRows}
        </div>
        <div>
          <strong>Showing:</strong> {rowShowCount}
        </div>
        <div>
          <strong>Last fetch:</strong>{" "}
          {new Date(lastFetch).toLocaleString("en-US", { timeZone: "UTC" })}
        </div>
      </div>

      {showActions && (
        <div className="td-trader-count-table-metadata">
          <div>
            {!isFiltered && rowShowCount + 100 <= totalRows && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={show100More}
              >
                <i className="fas fa-plus"></i> Show 100 more
              </button>
            )}
            {!isFiltered && rowShowCount !== totalRows && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={showAllRows}
              >
                <i className="fas fa-plus"></i> Show all
              </button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
