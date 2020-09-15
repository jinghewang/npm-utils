
let Kuohao3 = function (opts) {
    this.v1 = "i am v1";
    this.opts = opts;
}

/*function Kuohao2(opts) {
    this.v1 = "i am v1";
    this.opts = opts;
}*/

Kuohao3.prototype.f1 = function () {
    console.log("show in f1: " + this.v1)
}

Kuohao3.prototype.f2 = function () {
    console.info(this.opts);
    this.f1()
}

exports = module.exports = Kuohao3;
