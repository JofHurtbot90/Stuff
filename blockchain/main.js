import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});

const net = require('net');
const web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net, {});
