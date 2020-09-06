function Kuohao(msg) {
    this.v1 = "i am v1";
}
Kuohao.prototype.f1 = function () {
    console.log("show in f1: " + this.v1)
}
Kuohao.prototype.f2 = function () {
    this.f1()
}
Kuohao.prototype.socket = function () {
    this.socket = new Kuohao();
    return this.socket;
}
exports = module.exports = Kuohao;
