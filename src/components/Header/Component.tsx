import React, { ReactNode, memo } from "react";

import "./styles.scss";
import { SearchBar } from "..";
import BurgerMenu from "../../assets/svgs/burger-menu.svg";
import NotificationBell from "../../assets/svgs/notification-bell.svg";
import Profile from "../../assets/svgs/profile.svg";
import Setting from "../../assets/svgs/setting.svg";

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
        <div className="wrap-menu">
          <div className="search">
            <SearchBar second />
          </div>
          <div className="profile-menu">
            <img className="icon" src={NotificationBell} />
            <img className="icon" src={Setting} />
            <img className="icon" src={Profile} />
            <a className="logout">Log Out</a>
          </div>
          <img className="menu" src={BurgerMenu} />
        </div>
      </div>
      <span className="title">{title}</span>
      {children}
    </div>
  );
};

export default memo(Component);
