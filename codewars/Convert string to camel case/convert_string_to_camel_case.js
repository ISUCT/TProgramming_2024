function toCamelCase(str){
    str = str.replaceAll('-', '_');
    arr = str.split('_');
    let res = '';
    for (i = 1; i < arr.length; i++) {
        a = arr[i].toString();
        a = a[0].toUpperCase() + a.slice(1);
        arr[i] = a;
    }
    for (i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res
}