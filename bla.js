let title = 'ok2';

var foo= function (req, res, next) {
    console.log('inside foo',this.title);
    return ("foo");
}

var  bar= function(req, res, next) {
    this.foo();
}
module.exports = {bar,foo,title};
