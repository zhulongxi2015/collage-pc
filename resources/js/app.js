let api={
    schema: "http",
    host: "175.27.135.69",
    port: "8080"
}
let apiUrl = api.schema+"://"+api.host+":"+api.port;
let loading ='<div class="el-loading-mask" style="background-color: rgba(0, 0, 0, 0.8);"><div'
           + ' class="el-loading-spinner"><i class="el-icon-loading"></i><p'
             + ' class="el-loading-text">拼命加载中</p></div></div>';

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

var browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: (!!u.match(/AppleWebKit.*Mobile/) || !!u.match(/Windows Phone/) || !!u.match(/Android/) || !!u.match(/MQQBrowser/)) && !u.match(/iPad/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1 || u.indexOf('UCBrowser') > -1, //iPhone终端
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
//判断是否移动端
if(browser.versions.mobile || browser.versions.iPhone || browser.versions.android || browser.versions.weixin || browser.versions.qq) {
    document.location.href ='http://m.gannanzz.com';
}
