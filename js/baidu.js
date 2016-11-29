$(function(){
    var heights=$(window).height();
    var flage=true;
    var num=0;
    touch.on("body","swipeup",".fullpage",function(){
console.log(flage)
        if(!flage){
            return;
        }
        num++;
        console.log(num)
        if(num==$(".fullpage>div").length){
            num=$(".fullpage>div").length-1;
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
        }
        flage=false;
        $(".fullpage").css({"marginTop":-num*heights});
        $(".lunbo div").removeClass("active").eq(num).addClass("active");

    })
    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flage=true;
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
    $(".fullpage").mousewheel(function(){
        
    })
})