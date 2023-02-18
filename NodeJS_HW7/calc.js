function kelPersegi (sisi) {
    return 4 * sisi;
}
function luasPersegi (sisi){
    return sisi * sisi;
}
function kelPP (panjang, lebar){
    return 2*(panjang * lebar);
}
function luasPP(panjang, lebar){
    return panjang * lebar;
}

module.exports = {kelPP,kelPersegi,luasPP,luasPersegi};