// backend/routes/account.js

const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

// Get user balance
router.get("/balance", authMiddleware, async (req, res) => {

    const account = await Account.findOne({
        userId: req.userId
    });

    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        });
    }

    res.json({
        balance: account.balance
    });
});

// Transfer money
router.post("/transfer", authMiddleware, async (req, res) => {

    const { amount, to } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
        return res.status(400).json({
            message: "Invalid amount"
        });
    }

    // Prevent self transfer
    if (req.userId === to) {
        return res.status(400).json({
            message: "Cannot transfer money to yourself"
        });
    }

    // Find sender account
    const account = await Account.findOne({
        userId: req.userId
    });

    if (!account) {
        return res.status(404).json({
            message: "Sender account not found"
        });
    }

    // Check balance
    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    // Find receiver account
    const toAccount = await Account.findOne({
        userId: to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Deduct money from sender
    await Account.updateOne(
        { userId: req.userId },
        {
            $inc: {
                balance: -amount
            }
        }
    );

    // Add money to receiver
    await Account.updateOne(
        { userId: to },
        {
            $inc: {
                balance: amount
            }
        }
    );

    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;