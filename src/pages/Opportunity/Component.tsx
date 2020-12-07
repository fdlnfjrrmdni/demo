import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { getMajor } from "../../redux/actions";
import { SideBar, Header, SearchBar } from "../../components";
import { documentTitle } from "../../utils";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Opportunity");
  const dispatch = useDispatch();
  const opportunityState = useSelector((state: Reducers) => state.opportunity);

  useEffect(() => {
    dispatch(getMajor());
  }, [dispatch]);

  return (
    <SideBar>
      <Header title="Opportunity">
        <div className="page-opportunity">
          <div className="wrap-search">
            <SearchBar />
            <button className="button">
              <span>Show</span>
            </button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {!opportunityState.isLoading &&
                  opportunityState.data.map((item: any) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Header>
    </SideBar>
  );
};

export default Component;
