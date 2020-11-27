import React, { ReactNode, memo } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
  isOpen?: boolean;
}

const pages = [
  {
    name: "Home",
    icon: "",
    isOpen: false,
  },
  {
    name: "My Company",
    icon: "",
    isOpen: false,
  },
  {
    name: "Opportuninty",
    icon: "",
    isOpen: true,
  },
  {
    name: "Application",
    icon: "",
    isOpen: false,
  },
  {
    name: "Team Member",
    icon: "",
    isOpen: false,
  },
  {
    name: "Messages",
    icon: "",
    isOpen: false,
  },
  {
    name: "Report & Analitics",
    icon: "",
    isOpen: false,
  },
];

const Component = ({ children }: Props) => {
  return (
    <div className="sidebar">
      <div className="column">
        <div className="logo">
          <h1 className="text">nifty</h1>
        </div>
        <div className="wrap-nav">
          {pages.map((item) => (
            <div className={`wrap-btn ${item.isOpen && "active"}`}>
              <a className="btn">
                <img className="icon" src={item.icon} />
                <span className="name">{item.name}</span>
              </a>
              {item.isOpen && <div className="stick" />}
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

Component.defaultProps = {
  isOpen: false,
};

export default memo(Component);
