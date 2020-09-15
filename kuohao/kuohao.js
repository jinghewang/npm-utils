function Kuohao() {
    this.v1 = "i am v1";
}

Kuohao.prototype.f1 = function () {
    console.log("show in f1: " + this.v1)
}

Kuohao.prototype.f2 = function () {
    this.f1()
}

exports = module.exports = new Kuohao();
