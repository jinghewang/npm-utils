module.exports = function() {
    this.name = 'name';
    this.age = 'age';
    this.money = 'money';
    this.say = function() {
        console.log('我的名字叫：'+this.name+'，我今年'+this.age+'岁，月薪为：'+this.money+'元；')
    };
    this.good = function () {
        this.say();
    }
};
