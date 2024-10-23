import transactionModel from "../model/transactionModel.js";

export const createTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(200).json({message: "transaction created successfully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getAllTransactions = async (req, res) => {
    try {
        const allTransactions = await transactionModel.find();
        if (!allTransactions || allTransactions.length === 0) {
            return res.status(400).json({message: "Transactions data not found"});
        }
        res.status(200).json(allTransactions)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTranasaction = async (req, res) => {
    try {
        const id = req.params.id;
        const transactionExist = await transactionModel.findById(id);
        if (!transactionExist) {
            return res.status(400).json({message: "Transaction data not found"});
        }
        res.status(200).json(transactionExist);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const transactionExist = await transactionModel.findById(id);
        if (!transactionExist) {
            return res.status(400).json({message: "Transaction data not found"});
        }
        await transactionModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Transaction updated successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const transactionExist = await transactionModel.findById(id);
        if (!transactionExist) {
            return res.status(400).json({message: "Transaction data not found"});
        }
        await transactionModel.findByIdAndDelete(id);
        res.status(200).json({message: "Transaction deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const summaryOfTransactions = async (req, res) => {
    try {
        const totalIncome = await transactionModel.aggregate([{$match: {type: "income"}},
            {$group: {_id: "$type", total: {$sum: "$amount"}}}
        ]);
        const totalExpenses = await transactionModel.aggregate([{$match: {type: "expense"}},
            {$group: {_id: "$type", total: {$sum: "$amount"}}}
        ]);
        const balanceAmount = totalIncome[0].total - totalExpenses[0].total
        res.status(200).json({income: totalIncome, expenses: totalExpenses, balance: balanceAmount});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
