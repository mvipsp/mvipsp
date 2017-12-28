function ymBofang(mp4url,jiid) { alert(123); }
function addHook(functionB, functionA, parent) {
    if (typeof parent == 'undefined')
        parent = window;
    for (var i in parent) {
        if (parent[i] === functionA) {
            parent[i] = function() {
                functionB.apply(this, arguments);
                return false;
            }
            break;
        }
    }
}
addHook(ymBofang, bofang);
alert("wodecuo");
