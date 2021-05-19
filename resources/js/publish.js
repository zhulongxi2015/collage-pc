/*发布页面示例：取数据库数据 渲染到页面 */

/*往dom追加html*/
HTMLElement.prototype.appendHTML = function(html) {
    var divTemp = document.createElement("div"), nodes = null
        // 文档片段，一次性append，提高性能
        , fragment = document.createDocumentFragment();
    divTemp.innerHTML = html;
    nodes = divTemp.childNodes;
    for (var i=0, length=nodes.length; i<length; i+=1) {
        fragment.appendChild(nodes[i].cloneNode(true));
    }
    this.appendChild(fragment);
    // 据说下面这样子世界会更清净
    nodes = null;
    fragment = null;
}
function renderData(data) {
    var html = data.pageHtml;
    var javascript = data.pageJs;
    var css = data.css;
    var canvasStyle = JSON.parse(data.canvasStyle);

    if(UI==='layui'){//追加body layui-form样式
        var classVal = document.body.getAttribute("class");
        if(classVal!=null){
            classVal = classVal.concat(" layui-form");
        }else {
            classVal = "layui-form";
        }
        document.body.setAttribute("class",classVal);
    }else if(dependency.uiFrame === 'vue' ){
        //参考iframeUi.realHtml 保持一致
        html = html.replace(/(<div.*?>)([\s\S]*)<\/div>/,"$1<template>$2</template></div>")
    }
    document.body.appendHTML(html);
    eval(javascript);
    {//追加样式
        if(css){
            document.getElementById("magicalCoderCss").innerHTML=css;
        }
    }
    {//追加magicalDragScene样式
        if(canvasStyle){
            //设置样式
            var style = [];
            for(var key in canvasStyle){
                style.push(key+":"+canvasStyle[key]);
            }
            document.body.setAttribute("style",style.join(";"));
        }
    }
}
{
    var url = APPLICATION_ENV.getEnv().serverPath+"drag_rest/page_data?pageId="+getParameter("pageId");
    //url = APPLICATION_ENV.getEnv().serverPath+"drag_rest/page_data?pageId=648";
    if(dependency.uiFrame=='jquery'){
        var $ = $ || layui.jquery;
        $.getJSON(url,{date:new Date().getTime()},function (data) {
            if(data.flag){
                renderData(data.data)
            }
        })
    }else if(dependency.uiFrame=='vue'){
        axios({method:"get",url:url,params:{a:"a",}}).then(function(response) {
            var _res = response.data;
            renderData(_res.data)
        });
    }
}
