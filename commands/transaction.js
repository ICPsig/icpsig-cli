import axios from "axios";
import { BASE_URL } from "./base";

function transaction(txn) {
  axios.post(`${BASE_URL}/transaction`, { transation: txn });
}

module.exports = transaction;
