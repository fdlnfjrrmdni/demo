import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

const api = {
  getUser: () => host.get("user"),
  getMajor: () => host.get("major"),
  getOpportunity: () => host.get("opportunity"),
  getContractType: () => host.get("contract_type"),
  getEducation: () => host.get("education"),
  getRequirementCategory: () => host.get("requirement_category"),
  addMajor: (body: any) => host.post("major", { ...body }),
  updateMajor: (id: number, body: any) => host.put(`major/${id}`, { ...body }),
  deleteMajor: (id: number) => host.delete(`major/${id}`),
};

export default api;
