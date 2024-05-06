import { combineReducers } from "redux";
import catalogSlice from "./catalog/catalog";

const reducer = combineReducers({
    catalog: catalogSlice.reducer
})

export default reducer;