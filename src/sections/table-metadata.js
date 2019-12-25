import * as React from "react";

export const TableMetaData = ({
  totalRows,
  rowShowCount,
  showMore,
  showAllRows,
  lastFetch,
  showActions
}) => {
  let showMoreCount = 100;
  if (rowShowCount <= totalRows) {
    if (totalRows - rowShowCount <= 100) {
      showMoreCount = totalRows - rowShowCount;
    }
  }
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
            {showMoreCount !== 0 && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => showMore(showMoreCount)}
              >
                <i className="fas fa-plus"></i> Show {showMoreCount} more
              </button>
            )}
            {showMoreCount !== 0 && (
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
