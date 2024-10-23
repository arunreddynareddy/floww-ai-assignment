import express from "express";
import { createTransaction, deleteTransaction, getAllTransactions, getTranasaction, summaryOfTransactions, updateTransaction } from "../controller/transactions.js";

const route = express.Router();

route.post("/transactions", createTransaction);
route.get("/transactions", getAllTransactions);
route.get("/transactions/:id", getTranasaction);
route.put("/transactions/:id", updateTransaction);
route.delete("/transactions/:id", deleteTransaction);
route.get("/summary", summaryOfTransactions);

export default route
