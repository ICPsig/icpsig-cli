#! /usr/bin/env node
const { program } = require('commander')
const transaction = require('./commands/transaction')
const approve = require('./commands/approve')

program
    .command('list')
    .description('List all the tasks')
    .action(list)

program
    .command('transaction <params>')
    .description('Add a new transaction')
    .action(add)

program
    .command('approve <txn>')
    .description('approve transaction')
    .option('-t, --txn <txn>', 'Transaction to be approved')
    .action(approve)

program.parse()