$(function(){
    var heights=$(window).height();
    var flage=true;
    var num=0;
    $(".fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $(".fullpage").mousemove(function(e){
        e.preventDefault();
    })
    touch.on("body","swipeup",".fullpage",function(){

        if(!flage){
            return;
        }
        num++;
        if(num==$(".fullpage>div").length){
            num=$(".fullpage>div").length-1;
            return
        }
        flage=false;
        $(".fullpage").css({"marginTop":-num*heights});
        $(".lunbo div").removeClass("active").eq(num).addClass("active");

    })
    touch.on("body","swipedown",".fullpage",function(){
        if(!flage){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        flage=false;
        $(".fullpage").css({"marginTop":-num*heights});
        $(".lunbo div").removeClass("active").eq(num).addClass("active");

    })
    // 监听事件
    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flage=true;
        $(".xun").each(function(index,obj){
            if(num==0){
                $(".left").css({
                    transform:"translate(0px,0)",
                    opacity:"1"
                })
                $(".right").css({
                    transform:"translate(0px,0)",
                    opacity:"1"
                })
                return
            }
            if(num!==0){
                console.log(index)
            if(index==num){
                $(".left").eq(index).css({
                    transform:"translate(0px,0)",
                    opacity:"1"
                })
                $(".right").eq(index).css({
                    transform:"translate(0px,0)",
                    opacity:"1"
                })
            }else{
                $(".left").eq(index).css({
                    transform:"translate(-50px,0)",
                    opacity:"0"
                })
                $(".right").eq(index).css({
                    transform:"translate(50px,0)",
                    opacity:"0"
                })
            }
            }
        })
    })

    // 选项卡

    $(".lunbo div").click(function(){
        num=$(this).index();
        $(".lunbo div").removeClass("active").eq(num).addClass("active");
        $(".fullpage").css({"marginTop":-num*heights})
    })

    $(".xia").click(function(){
        num=$(this).index()+1;
        
        $(".lunbo div").removeClass("active").eq(num).addClass("active");
        $(".fullpage").css({"marginTop":-num*heights})
    })
    
    // 滚轮事件
    $(".fullpage").mousewheel(function () {

        if(!flage){
            return;
        }
        num++;

        if(num==$(".fullpage>div").length){
            num=$(".fullpage>div").length-1;
            return;
        }
        flage=false;
        $(".lunbo div").removeClass("active").eq(num).addClass("active");
        $(".fullpage").css({"marginTop":-num*heights})

    },function(){
        if(!flage){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flage=true;
        $(".lunbo div").removeClass("active").eq(num).addClass("active");
        $(".fullpage").css({"marginTop":-num*heights})
    })
    // 菜单
    var flage2=true;
    $(".muen").click(function () {
        if(flage2){
            $(".muen .muen-top").css({"transform":"translate(0,6px) rotate(45deg)"})
            $(".muen .muen-bott").css("transform","translate(0,-6px) rotate(-45deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    display:"block",
                    opacity:"0",
                    transform:"rotateX(90deg)",
                    animation:" muen .5s  linear forwards "+index*0.2+"s",

                })
            })
            flage2=false;
        }else{
            $(".muen .muen-top").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen .muen-bott").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    opacity:"1",
                    transform:"rotateX(0deg)",
                    animation:" muen1 .5s  linear forwards "+(1.2-index*0.2)+"s",
                    display:"none"
                })
            })
            flage2=true;
        }

    })

    $(window).resize(function(){
        heights=$(window).height();
        var widths=$(window).width();
        $(".fullpage").css({"marginTop":-num*heights});
        if(widths>1000){
            $(".muen .muen-top").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen .muen-bott").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    animation:" none",
                })
            })
            flage2=true;
        }
    })

    
    // 出现

})