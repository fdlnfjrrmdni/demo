import React, { memo } from "react";

import "./styles.scss";

interface Props {
  data: any[];
  isLoading: boolean;
  column: string[];
  th: string[];
  indexing: boolean;
}

const Component = ({ data, isLoading, th, column, indexing }: Props) => {
  function field() {
    return column.map((item) => item);
  }

  return (
    <table>
      <thead>
        <tr>
          {indexing && <th>No</th>}
          {th.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          data.map((item, index) => (
            <tr>
              {indexing && <td>{index + 1}</td>}
              <td>
                {item}
                {field}
              </td>
            </tr>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </tbody>
    </table>
  );
};

Component.defaultProps = {
  isLoading: false,
  indexing: false,
};

export default memo(Component);
