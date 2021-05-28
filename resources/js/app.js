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

$(function(){
    var MobileUA = (function() {
        var ua = navigator.userAgent.toLowerCase();

        var mua = {
            IOS: /ipod|iphone|ipad/.test(ua), //iOS
            IPHONE: /iphone/.test(ua), //iPhone
            IPAD: /ipad/.test(ua), //iPad
            ANDROID: /android/.test(ua), //Android Device
            WINDOWS: /windows/.test(ua), //Windows Device
            TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device
            MOBILE: /mobile/.test(ua), //Mobile Device (iPad)
            ANDROID_TABLET: false, //Android Tablet
            WINDOWS_TABLET: false, //Windows Tablet
            TABLET: false, //Tablet (iPad, Android, Windows)
            SMART_PHONE: false //Smart Phone (iPhone, Android)
        };

        mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;
        mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);
        mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;
        mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;

        return mua;
    }());

    //SmartPhone
    if (MobileUA.SMART_PHONE) {
        // 移动端链接地址
        document.location.href ='http://m.gannanzz.com';
    }
});