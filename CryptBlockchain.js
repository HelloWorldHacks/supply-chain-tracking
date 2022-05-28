class CryptBlockchain {
    constructor(id, blockchain) {
        this.blockchain = [this.startGenesisBlock(id)];
        this.size = 1;
        if (blockchain) {
            this.size = 0;
            this.blockchain = [];
            blockchain.map((block, index) => {
                this.blockchain.push(new CryptBlock(block.timestamp, block.data, block.nodeHash, block.prevHash, index, block.nonce, block.hash));
                this.size++;
            });
        }
    }
    startGenesisBlock(id) {
        return new CryptBlock(Date.now().toString(), "Block 0: init", "100", "0");
    }
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock) {
        newBlock.index = this.size++;
        newBlock.prevHash = this.obtainLatestBlock().hash;
        // newBlock.hash = newBlock.computeHash()
        newBlock.proofOfWork();
        this.blockchain.push(newBlock);
    }
    checkChainValidity() {
        for (let i = 1; i < this.size; i++) {
            const curr = this.blockchain[i];
            const pred = this.blockchain[i - 1];
            if (curr.hash !== curr.computeHash())
                return false;
            if (curr.prevHash !== pred.hash)
                return false;
        }
        return true;
    }
    length() { return this.size; }
}
module.exports = CryptBlockchain;
//# sourceMappingURL=CryptBlockchain.js.map