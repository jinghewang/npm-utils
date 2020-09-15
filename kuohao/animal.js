class Animal {
    //构造方法
    constructor(name){
        //属性name
        this.name = name;
    }

    //自定义方法getName
    getName(){
        return this.name;
    }

    getFullName(){
        return this.getName() + '-full';
    }

    //自定义一个静态方法
    static friends(a1,a2){
        return `${a1.name} and ${a2.name} are friends`;
    }
}

module.exports = exports = Animal;
