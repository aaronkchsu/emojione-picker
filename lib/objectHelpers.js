function filterObject(obj, predicate) {
   return Object.keys(obj).filter(key => predicate(key)).reduce((res, key) => (res[key] = obj[key], res), {});
}

module.exports = filterObject;