function arrayFrom(val) {
    return Array.isArray(val) ? val : [val];
}

function readDepsSection(rawDeps) {
    return arrayFrom(rawDeps).map(function(dep) {
        if(typeof dep == 'string') {
            return {block: dep};
        }
        if(typeof dep == 'object' && dep.block) {
            return dep;
        }
        console.warn('unknown type', dep);
    })
}

module.exports = function readDeps(depsjs) {
    if(Array.isArray(depsjs)) {
        deps = deps[0];
    }

    return [].concat(
        readDepsSection(deps.mustDeps),
        readDepsSection(deps.shouldDeps)
    );
};
