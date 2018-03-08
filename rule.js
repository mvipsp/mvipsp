        function pcAdress(mobileAdress, platform) {
            if(platform == 'qq') {
                return qqAdress(mobileAdress);
            } else if(platform == 'youku') {
                return youkuAdress(mobileAdress);
            } else if(platform == 'iqiyi') {
                return iqiyiAdress(mobileAdress);
            } else if(platform == 'mgtv') {
                return mgtvAdress(mobileAdress);
            } else {
                return mobileAdress;
            }
        };

        //腾讯视频解析
        function qqAdress(mobileAdress) {
            var fullPath;
            var num = mobileAdress.indexOf('?');
            var firstStr;
            if (num > 0) {
                firstStr = mobileAdress.substr(0, num);
            } else {
                firstStr = mobileAdress;
            }
            var pos = firstStr.lastIndexOf('.html');
            if (pos + 5 == firstStr.length) {
                var vid;
                var firstStrArr = firstStr.split('/');
                var htmlStr = firstStrArr[firstStrArr.length - 1];
                if (num > 0) {
                    var name,value;
                    var param = mobileAdress.substr(num+1);
                    var params=param.split('&');
                    var parammap = new Object();
                    for(var i=0;i < params.length;i++){
                        num=params[i].indexOf('=');
                        if(num>0){
                            name=params[i].substring(0,num);
                            value=params[i].substr(num+1);
                            parammap[name]=value;
                        }
                    }
                    vid = parammap['vid'];
                }
                var tfStr = 'https://v.qq.com/x/cover/';
                if(vid != null) {
                    htmlStr = htmlStr.replace('.html','');
                    fullPath = tfStr + htmlStr + '/' + vid + '.html';
                } else {
                    htmlStr = htmlStr.replace('.html','');
                    fullPath = tfStr + htmlStr + '.html';
                }
            } else {
                fullPath = mobileAdress;
            }
            var oStr = 'm.v.qq.com';
            var nStr = 'v.qq.com';
            if (fullPath.indexOf(oStr) >= 0) {
                fullPath = fullPath.replace(oStr, nStr);
            }
            return fullPath;
        };

        //优酷视频解析
        function youkuAdress(mobileAdress) {
            var fullPath;
            var num = mobileAdress.indexOf('?');
            var firstStr;
            if (num > 0) {
                firstStr = mobileAdress.substr(0, num);
            } else {
                firstStr = mobileAdress;
            }
            if (firstStr.indexOf('id_') > 0) {
                fullPath = firstStr;
                var oStr = 'm.youku.com/video';
                var nStr = 'v.youku.com/v_show';
                if (fullPath.indexOf(oStr) >= 0) {
                    fullPath = fullPath.replace(oStr, nStr);
                }
            } else {
                fullPath = mobileAdress;
            }
            fullPath = fullPath.replace('https://','http://');
            return fullPath;
        };

        //爱奇艺视频解析
        function iqiyiAdress(mobileAdress) {
            var fullPath = mobileAdress;
            var oStr = 'm.iqiyi.com';
            var nStr = 'www.iqiyi.com';
            if (fullPath.indexOf(oStr) >= 0) {
                fullPath = fullPath.replace(oStr, nStr);
            }
            return fullPath;
        };

        //芒果TV视频解析
        function mgtvAdress(mobileAdress) {
            var fullPath = mobileAdress;
            var oStr = 'm.mgtv.com';
            var nStr = 'www.mgtv.com';
            if (fullPath.indexOf(oStr) >= 0) {
                fullPath = fullPath.replace(oStr, nStr);
            }
            oStr = '/#/';
            nStr = '/';
            if (fullPath.indexOf(oStr) >= 0) {
                fullPath = fullPath.replace(oStr, nStr);
            }
            var pos = fullPath.lastIndexOf('.html');
            if (pos + 5 != fullPath.length) {
                fullPath = fullPath + '.html';
            }
            return fullPath;
        };
