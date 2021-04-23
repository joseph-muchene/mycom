import { combineReducers } from "redux";
import Auth from "./Auth";
import Category from "./category";
import Product from "./product";
export default combineReducers({ Auth, Category, Product });
