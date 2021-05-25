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