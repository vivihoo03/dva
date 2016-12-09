function Tcapp(){

}

Tcapp.prototype.settitle=function(title){
    return new Promise(resolve,reject){
    window._tc_bridge_bar.set_navbar({
        param: {
            left: [{
                    tagname: "tag_click_back"
                   }],
            center: [{
                   "tagname": "tag_title",
                    "value": title 
                     }]   
                },
        callback:resolve
                });
    }

}

Tcapp.prototype.cjindexback=function(title){
  this.settitle(title).then(function(data){
    titleCB(data);
  }) 
}

Tcapp.prototype.gopage=function(titile){
    this.settitle(title).then(function(data){
        alert(data.tagname+'设置成功！');
    })
}

//返回同程首页
function closeMe(){
    window.location.href="http://shouji.17u.cn/internal/common/close";
}

//标题回调
function titleCB(data){
    console.log(data.tagname);
    let tagname=data.tagname;
    //首页点击返回
    if(tagname==='tag_click_back'&& /\/cjindex/.test(window.location.href){
        //todo判断用户是否抽奖，如果抽奖返回同程首页，否则正常返回上一页
        if(true){
            closeMe();
        }else{
            //什么都不做
        }
    }
}

export default function () {
    return Tcapp;
}