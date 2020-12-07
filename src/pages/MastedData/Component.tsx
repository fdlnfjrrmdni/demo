import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import Add from "../../assets/svgs/add.svg";
import {
  getMajor,
  addMajor,
  deleteMajor,
  updateMajor,
} from "../../redux/actions";
import { SideBar, Header, SearchBar } from "../../components";
import { documentTitle } from "../../utils";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Master Data");
  const dispatch = useDispatch();
  const majorState = useSelector((state: Reducers) => state.major);

  const [major, setMajor] = useState({ id: 0, name: "" });
  const [modal, setModal] = useState({ isOpen: false, title: "" });
  const [modalDelete, setModalDelete] = useState({
    isOpen: false,
    id: 0,
    title: "Are you sure?",
    message:
      "Do you really want to delete these records? This process cannot be undone.",
  });

  useEffect(() => {
    dispatch(getMajor());
  }, [dispatch]);

  const handleSubmit = (id?: number) => {
    const data = {
      name: major.name,
    };
    id ? dispatch(updateMajor(major.id, data)) : dispatch(addMajor(data));
    handleClear();
  };

  const handleEdit = (id: number, name: string) => {
    setMajor({ id: id, name: name });
    setModal({ isOpen: true, title: "Edit Major" });
  };

  const handleDelete = (id: number) => {
    setModalDelete({ ...modalDelete, isOpen: true, id: id });
    // dispatch(deleteMajor(id));
  };

  const handleDeleteYes = (id: number) => {
    dispatch(deleteMajor(id));
    setModalDelete({ ...modalDelete, isOpen: false });
  };

  const handleClear = () => {
    setMajor({ id: 0, name: "" });
    setModal({ isOpen: false, title: "" });
  };

  return (
    <>
      {modal.isOpen && (
        <div className="modal">
          <h2 className="new-master">{modal.title}</h2>
          <form className="form" onSubmit={() => handleSubmit(major.id)}>
            <span className="label">Name</span>
            <input
              className="input"
              placeholder="Type Here"
              value={major.name}
              onChange={(e) => setMajor({ ...major, name: e.target.value })}
              type="text"
            />
            <br />
            <br />
            <input className="btn-submit" type="submit" value="Submit" />
            <a className="btn-cancel" onClick={() => handleClear()}>
              Cancel
            </a>
          </form>
        </div>
      )}
      {modalDelete.isOpen && (
        <div className="modal delete">
          <h2 className="new-master">{modalDelete.title}</h2>
          <div className="wrap-delete-btn">
            <a
              className="btn-cancel no"
              onClick={() => setModalDelete({ ...modalDelete, isOpen: false })}
            >
              Cancel
            </a>
            <a
              className="btn-cancel yes"
              onClick={() => handleDeleteYes(modalDelete.id)}
            >
              Yes
            </a>
          </div>
        </div>
      )}
      <SideBar>
        <Header title="Master Data">
          <div className="page-master-data">
            <div className="wrap-search">
              <SearchBar second />
              <button
                className="button"
                onClick={() => setModal({ isOpen: true, title: "New Major" })}
              >
                <img src={Add} className="logo" />
              </button>
            </div>
            <div className="table-crud">
              {/* <Table
              data={majorState.data}
              isLoading={majorState.isLoading}
              column={["id", "name"]}
              th={["ID", "NAME"]}
            /> */}
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {!majorState.isLoading ? (
                    majorState.data.map((item) => (
                      <tr className="tr">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <a
                            className="edit"
                            onClick={() => handleEdit(item.id, item.name)}
                          >
                            Edit
                          </a>
                          <a
                            className="delete"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h3>Loading...</h3>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Header>
      </SideBar>
    </>
  );
};

export default Component;
