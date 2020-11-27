import React from "react";

import "./styles.scss";
import { SideBar, Header, SearchBar } from "../../components";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Opportunity");

  return (
    <SideBar>
      <Header title="Opportunity">
        <div className="page-opportunity">
          <SearchBar />
          <button className="button">Show</button>
        </div>
      </Header>
    </SideBar>
  );
};

export default Component;
