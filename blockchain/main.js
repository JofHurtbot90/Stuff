let Block = require('./models/block')
let Transaction = require('./models/transaction')
let Blockchain = require('./models/blockchain')

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

let transaction = new Transaction('Josh', 'Michael', 100)
let block = blockchain.getNewBlock([transaction])
blockchain.addBlock(block)

let anotherTransaction = new Transaction('John', 'Joe', 10)
let block1 = blockchain.getNextBlock([anotherTransaction, transaction])
blockchain.addBlock(block1)

console.log(blockchain)



class Transaction {
    constructor(from, to, amount){
        this.from = from
        this.to = to
        this.amount = amount
    }
}

export default Transaction

class Block {
    constructor() {
        this.index = 0
        this.previousHash = ''
        this.hash = ''
        this.nonce = 0
        this.transactions = []
    }

    addTransaction(transaction){
        this.transactions.push(transaction)
    }

    get key() {
        return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce
    }
}

export default Block

let Block = require('./block')
let sha256 = require('js-sha256')

class Blockchain {
    constructor(genesisBlock) {
        
        this.blocks = []
        this.addBlock(genesisBlock)

    }

    addBlock(block) {
        
        if(this.blocks.length == 0) {
            block.previousHash = '000000000000000'
            block.hash = this.generateHash(block)
        }

        this.blocks.push(block)
    }

    getNextBlock(transactions) {

        let block = new Block()

        transactions.forEach((transaction) => {
            block.addTransaction(transaction)
        })

        let previousBlock = this.getPreviousBlock()
        block.index = this.blocks.length
        block.previousHash = previousBlock.hash
        block.hash = this.generateHash(block)
        return block
    }

    generateHash(block) {
        
        let hash = sha256(block.key)

        while(!hash.startsWith('0000')) {
            block.nonce += 1
            hash = sha256(block.key)
            console.log(hash)
        }

        return hash
    }

    getPreviousBlock() {
        return.this.blocks[this.blocks.length - 1]
    }
}

export default Blockchain

