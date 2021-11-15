import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataClients from './Clients';

const reducer = combineReducers({ dataClients });
const store = configureStore({ reducer });

export default store;
