const toQueryParams = (obj) => {
    var ret = '';

    const keys = Object.keys(obj);
    var count = 0;
    while (count < keys.length) {
        if (count > 0) {
            ret += "&";
        }
        var k = keys[count];
        ret += k.toString() + "=" + obj[k].toString();
        count++;
    }

    count = 0;
    var parsed = '';
    while (count < ret.length) {
        parsed += ret[count] == ' ' ? '%20' : ret[count];
        count++;
    }

    return parsed;
}

export { toQueryParams };