import axios from "axios";
import { BASE_URL } from "./base";

function approve(txn) {
  axios.post(`${BASE_URL}/approveTransaction`, { transation: txn });
}

module.exports = approve;
