import * as React from "react";

export const SortType = {
  AlphabeticallyAscending: "AlphabeticallyAscending",
  AlphabeticallyDescending: "AlphabeticallyDescending",
  CountAscending: "CountAscending",
  CountDescending: "CountDescending"
};

export const CountTable = ({
  data,
  setSortType,
  currentSortType,
  onFilterTicker,
  onFilterName,
  onFilterCount
}) => {
  const isAlphaAsc = currentSortType === SortType.AlphabeticallyAscending;
  const isAlphaDesc = currentSortType === SortType.AlphabeticallyDescending;
  const isCountAsc = currentSortType === SortType.CountAscending;
  const isCountDesc = currentSortType === SortType.CountDescending;
  return (
    <table className="td-trader-count-table">
      <thead>
        <tr>
          <th
            className="sortable"
            onClick={() =>
              setSortType(
                isAlphaAsc
                  ? SortType.AlphabeticallyDescending
                  : SortType.AlphabeticallyAscending
              )
            }
          >
            Ticker {isAlphaAsc && <i className="fas fa-chevron-down"></i>}
            {isAlphaDesc && <i className="fas fa-chevron-up"></i>}
          </th>
          <th
            className="sortable"
            onClick={() =>
              setSortType(
                isCountAsc ? SortType.CountDescending : SortType.CountAscending
              )
            }
          >
            Count {isCountAsc && <i className="fas fa-chevron-down"></i>}
            {isCountDesc && <i className="fas fa-chevron-up"></i>}
          </th>
          <th>Name</th>
        </tr>
        <tr>
          <th width="100px">
            <input
              placeholder="Filter ticker"
              onChange={e => onFilterTicker(e.target.value)}
            />
          </th>
          <th width="100px">
            <input
              placeholder="Filter count"
              type="number"
              onChange={e => onFilterCount(e.target.value)}
            />
          </th>
          <th width="300px">
            <input
              placeholder="Filter name"
              onChange={e => onFilterName(e.target.value)}
            />
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map(d => {
          return (
            <tr key={d.ticker}>
              <td width="90px">{d.ticker}</td>
              <td width="80px">{d.tdCount}</td>
              <td width="330px">{d.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
