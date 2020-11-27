import React, { ReactNode, memo } from "react";

import "./styles.scss";
import Logo from "../../assets/svgs/logo.svg";
import Application from "../../assets/svgs/sidebar/application.svg";
import Company from "../../assets/svgs/sidebar/company.svg";
import Home from "../../assets/svgs/sidebar/home.svg";
import Messages from "../../assets/svgs/sidebar/messages.svg";
import Opportunity from "../../assets/svgs/sidebar/opportunity.svg";
import TeamMember from "../../assets/svgs/sidebar/team-member.svg";

interface Props {
  children: ReactNode;
  isOpen?: boolean;
}

const pages = [
  {
    name: "Home",
    icon: Home,
    isOpen: false,
  },
  {
    name: "My Company",
    icon: Company,
    isOpen: false,
  },
  {
    name: "Opportunity",
    icon: Opportunity,
    isOpen: true,
  },
  {
    name: "Application",
    icon: Application,
    isOpen: false,
  },
  {
    name: "Team Member",
    icon: TeamMember,
    isOpen: false,
  },
  {
    name: "Messages",
    icon: Messages,
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
          <img src={Logo} />
        </div>
        <div className="wrap-nav">
          {pages.map((item) => (
            <div className={`wrap-btn ${item.isOpen && "active"}`}>
              <a className="btn">
                <div className="wrap-icon">
                  <img src={item.icon} />
                </div>
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
