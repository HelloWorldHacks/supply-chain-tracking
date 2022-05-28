const SHA256 = require('crypto-js/sha256');
const DIFFICULTY = 3;
class CryptBlock {
    constructor(timestamp, data, nodeHash, prevHash, index, nonce, hash) {
        this.index = index || -1;
        this.timestamp = timestamp;
        this.nodeHash = nodeHash;
        this.prevHash = prevHash || "";
        this.data = data;
        this.nonce = nonce || 0;
        this.hash = hash || this.computeHash();
    }
    proofOfWork() {
        while (this.hash.substring(0, DIFFICULTY) !== Array(DIFFICULTY + 1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash();
        }
    }
    computeHash() {
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.nodeHash + this.prevHash + this.nonce).toString();
    }
}
module.exports = CryptBlock;
//# sourceMappingURL=CryptBlock.js.map