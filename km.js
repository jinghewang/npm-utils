var kuohao = require('./kuohao');

module.exports = exports = km;


function km(url, opts) {
    this.url = url;
    this.opts = opts;


    let io = kuohao('2222');
    return io.socket();

}
