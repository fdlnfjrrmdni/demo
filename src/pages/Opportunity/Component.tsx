import React from "react";

import "./styles.scss";
import { SideBar, Header } from "../../components";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Opportunity");

  return (
    <SideBar>
      <Header title="Opportunity">
        <div className="page-opportunity">
          <div className="field">
            <img />
            <input value="" placeholder="Search" />
          </div>
          <div className="button" />
        </div>
      </Header>
    </SideBar>
  );
};

export default Component;
