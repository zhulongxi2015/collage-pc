(function(m, ei, q, i, a, j, s) {
    m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
    };
    j = ei.createElement(q),
    s = ei.getElementsByTagName(q)[0];
    j.async = true;
    j.charset = 'UTF-8';
    j.setAttribute("data-json",JSON.stringify({
    id:1017,
    token:'a2e2d601ae6580e1439fe941da8170e9',
    image:'https://oss-huadong1.oss-cn-hangzhou.aliyuncs.com/wechatapp/customer_service/admin/2021/06/11/799870416_2021_06_11_10_49_22njkhe.jpg'
    }));
    j.id=  "xiaokefu_js";
    j.src = 'https://pcjs.xiaokefu.com.cn/static/pc_Access/dist/pcAccess.js?version='+parseInt(new Date().getTime()/3600000);
    s.parentNode.insertBefore(j, s);
})(window, document, 'script', '_xiaokefu');

function showOnlineConsult(){
    $(".index_pf_main").removeAttr("style")
    $(".index_pf").css("display","none");
    $(".yingaishi_hide").click(function(){
        $(".index_pf_main").css("display","none")
        $(".index_pf").removeAttr("style");
    });
    closeConsultPop();
}

function closeConsultPop(){
    $("#consultPop").css("display", "none");
}
(function(){
    var consultPop= ' <div id="consultPop" class="el-row"\n'
                    + '         style="position: fixed; left: 35%; top: 30%; height: 209px; width: 39.5152%;'
                    + ' background-color:\n'
                    + '         rgb(31, 147, 255);">\n'
                    + '        <div class="mc-ui-absolute-pane el-col el-col-24 el-col-xs-24" style="height: 100.957%; width: 100%;"><span\n'
                    + '                class="mc-ui-geometry-char"\n'
                    + '                style="height: 112px; width: 370px; font-size: 23px; color: rgb(255, 255, 255); position: absolute; left: 2.8436%; top: 7.69231%;">我是赣州爱学业教育科技中心邱老师，我有着多年招生经验与就业经验，熟悉赣州各中专院校情况，能为初中毕业生择校做出好的建议！</span>\n'
                    + '            <i onclick="closeConsultPop()" class="el-icon-close"\n'
                    + '               style=" cursor:pointer; position: absolute; left: 95.6522%; top: 0.478469%;'
                    + ' width:'
                    + ' 5.24691%;'
                    + ' height: 15px; color: rgb(255, 255, 255); font-size: 20px;"></i>\n'
                    + '            <button onclick="showOnlineConsult()" type="button" class="el-button'
                    + ' el-button--success el-button--medium'
                    + ' is-round"\n'
                    + '                    style="position: absolute; left: 4.83461%; top: 67.9426%; font-size: 15px; background-color: rgb(0, 150, 136); width: 21.8593%; height: 40px;">\n'
                    + '                <!----><i class="el-icon-phone" ></i><span>咨询</span></button>\n'
                    + '            <button onclick="closeConsultPop()" type="button" class="el-button el-button--info el-button--medium'
                    + ' is-round"\n'
                    + '                    id="uuid1c3afc89-eba8-44b0-8326-b88bdab4e0da"\n'
                    + '                    style="position: absolute; left: 63.2716%; top: 67.4641%; font-size: 15px; background-color: rgb(239, 232, 232); width: 21.4646%; height: 38px; color: rgb(142, 135, 135);">\n'
                    + '                <!----><i class="el-icon-close"></i><span>稍后</span></button>\n'
                    + '        </div>\n'
                    + '    </div>';
    setTimeout(function(){
        $("body").append(consultPop);
    },3000);
})();
