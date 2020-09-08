var _ = require('lodash');

const self = {
    opts: {
        debug: false
    },
    arrayInArray: (arr1, arr2) => { //check arr1 include arr2
        self.log(arr1, arr2);
        return _.intersection(arr1, arr2).length == arr2.length;
    },
    log: (args) => {
        if (self.opts.debug){
            console.info(args)
        }
    }
};

module.exports = self;
