var _ = require('lodash');

const self = {

    title: 'title',
    test: function (msg) { //only test
        console.info(this.title);
        console.info(msg);
    },
    split: (str, splitter, limit) => { //split
        let val = [];
        //console.info('!',!str);
        if (!str)
            return val;

        let result = str.split(splitter, limit);
        return result;
    },
    check_if: (v) => { //check if
        if (v)
            return 1;
        else
            return 0;
    },
    getArray: (d, splitter = ',') => { //从变量(字符串或数组)获取数组
        let defaultVal = [];
        if (!d) {
            return defaultVal;
        }

        if (_.isArray(d)) {
            return d;
        } else if (_.isString(d)) {
            return self.split(d, splitter);
        } else {
            return defaultVal;
        }
    }
};

module.exports = self;
