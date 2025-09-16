const { transfers } = require('../model/transferModel');
const { users } = require('../model/userModel');

function transfer({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number') return { error: 'Missing transfer data.' };
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) return { error: 'Sender or recipient not found.' };
  if (from === to) return { error: 'Cannot transfer to yourself.' };
  if (!recipient.favorecido && amount >= 5000) return { error: 'Transfers >= R$ 5.000,00 only allowed to favorecido.' };
  const transferObj = { from, to, amount, date: new Date() };
  transfers.push(transferObj);
  return { transfer: transferObj };
}

function getTransfers() {
  return transfers;
}

module.exports = { transfer, getTransfers };
