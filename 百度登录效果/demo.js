function showLog(){
    layer.open({
        type:1,
        title:"登陆百度账号",
        area:["430px","300px"],
        content:$(".log")
    });
}
function login(){
    var userName = $.trim($(".log-item:eq(0)").val());
    var pressWord = $.trim($(".log-item:eq(1)").val());
    if(userName == "" || pressWord == ""){
        layer.alert("用户名和密码不能为空",{
            title:"提示",
            icon:2,
        });
    }
}
function showSkinBox(){
    $(".skinbox").slideDown();
}
function hideSkinBox(){
    $(".skinbox").slideUp();
}
$(function(){
    if($.cookie("bgPic")=="" || $.cookie("bgPic")==null){
        $("body").css("background-image","url(1.jpg)");
    }else{
        $("body").css("background-image","url("+ $.cookie("bgPic") + ")");
    }
    $(".skin-item img").click(function(){
        var src = $(this).attr("src");
        $("body").css("background-image","url(" + src + ")");
        $.cookie("bgPic",src,{expires:7});
    })
})
