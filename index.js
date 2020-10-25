var _ = require('lodash');
var {dateFormat, nowFormat} = require('./date');

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
    },
    // 生成guid,主要用于生成随机文件名
    guid: (opts = {}) => {
        //toUpperCase
        //toLowerCase
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        let text = (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        let upper = opts['upper'] || false;
        if (upper) {
            text = text.toUpperCase();
        }
        //text = self.replaceAll(text,'-','');
        return text;
    },
    replaceAll: function (text, searchValue, replacer) {//searchValue  string replacer
        return text.replace(new RegExp(searchValue, "gm"), replacer);
    },
    timestamp: () => { //毫秒的时间戳
        let timestamp = (new Date()).valueOf();
        return timestamp;
    },
    timestampOfSecond: () => { //秒的时间戳
        return parseInt(self.timestamp() / 1000);
    },
    dateFormat: dateFormat,
    nowFormat: nowFormat,
    nowFormat2: nowFormat2,
};

module.exports = self;
