import { combineReducers } from "redux";

import home from "./home";
import opportunity from "./opportunity";
import user from "./user";
import categoryType from "./categoryType";
import education from "./education";
import major from "./major";
import requirementCategory from "./requirementCategory";

export default combineReducers({
  home,
  opportunity,
  user,
  education,
  categoryType,
  major,
  requirementCategory,
});
