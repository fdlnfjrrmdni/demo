import React, { ReactNode, memo } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
  title: string;
}

const Component = ({ children, title }: Props) => {
  return (
    <div className="header">
      <div className="row">
        <div className="date">
          <span>Friday 13 Nov 2020</span>
        </div>
      </div>
      <span className="title">{title}</span>
      {children}
    </div>
  );
};

export default memo(Component);
