import React, { useState, memo } from "react";

import "./styles.scss";

interface Props {
  values?: string;
  second?: boolean;
}

const Component = ({ values, second }: Props) => {
  const [value, setValue] = useState(values);

  const changeValue = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => setValue(e.target.value);

  return (
    <div className="search-bar">
      <div className={`field ${second && "second"}`}>
        <img
          className="icon"
          src="https://img.icons8.com/ios-glyphs/30/000000/search.png"
        />
        <input
          className="input"
          value={value}
          onChange={changeValue}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

Component.defaultProps = {
  values: "",
  second: false,
};

export default memo(Component);
