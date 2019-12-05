const {Blockchain,Transaction}=require('./blockchain');
const EC =require('elliptic').ec;
const ec =new EC('secp256k1');

const myKey =ec.keyFromPrivate('39ae06536dd220f7b2c9e65d18d99740eaa7d0fb973601e02a282e5e6b302e27');
const myWalletAddress =myKey.getPublic('hex');



let caas =new Blockchain();

const tx1 =new Transaction(myWalletAddress,'sumi',2000,'innova','20kw');
tx1.signTransaction(myKey);
caas.addTransaction(tx1);

//caas.addTransaction(new Transaction('EV charging stations','sumi',100,'Innova','20kw'));
//caas.addTransaction(new Transaction('EV charging stations','sai',50,'Aadi','40kw'));
//caas.createTransaction(new Transaction('address3','address1',50,'30kw',400));



console.log('\n starting the miner...');
caas.minePendingTransactions(myWalletAddress);

console.log('\n Total amount in the wallet is', caas.getBalanceOfAddress('sumi'));

console.log('\n starting the miner again...');
caas.minePendingTransactions('CAAS');
console.log('\n Total amount in the wallet is', caas.getBalanceOfAddress('sumi'));

// console.log('Is chain Vaild?',caas.isChainValid());


console.log(JSON.stringify(caas,null,4));

