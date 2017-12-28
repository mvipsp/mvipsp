Object.prototype.monitor=monitor;
function monitor(funName, monitorFun) {
  var parentObj = this;
  var funTemp = parentObj[funName];
  var ljFun = function() {
    var ret = monitorFun(arguments);
    if (ret == true) {
      var evText = "";
      var csText = "";
      for (var a = 0; a < arguments.length; a++) {
        evText += "var a" + a + "=" + "arguments[" + a + "];"
        csText += "a" + a + (a == 0 ? "" : ",");
      }
      eval(evText);
      return eval("funTemp(" + csText + ")");
    }
    return ret;
  };
  parentObj[funName] = ljFun;
}

monitor("bofang", function(cs) {
  window.webkit.messageHandlers.M360KanPlayer.postMessage(cs[1]);
  return false;
});

monitor("play", function(cs) {
 window.webkit.messageHandlers.MoviePlayer.postMessage(cs[1]);
 return false;
});
