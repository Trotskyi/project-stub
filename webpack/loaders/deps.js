const vm = require('vm');
const readDeps = require('../tools/read-deps');

module.exports = function(source) {
    var deps = vm.runInThisContext(source);
    return JSON.stringify(readDeps(deps));
};
