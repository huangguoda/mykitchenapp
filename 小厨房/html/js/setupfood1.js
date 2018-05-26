$(function(){
	//设置登录页面的大小，适配所有手机端
    $('#foodname').keyup(function(){
        let userfood = $('#foodname').val();
        if(userfood != ''){
            $('.top_right').css({color:'rgb(255,168,168)'});
        }else{
            $('.top_right').css({color:'rgb(0,0,0)'});
        }
    });
});
// 修改手机端的click
(function(){
    var defaults={
        start:function(self,event){},
        move:function(self,event){},
        end:function(self,event){}
    }
    $.fn.touchClick=function(opts){
        if(typeof opts=="function"){
            opts=$.extend({}, defaults,{end:opts});
        }else{
            opts=$.extend({}, defaults,opts);
        }
        this.each(function(){
            var obj=$(this);
            obj.on("touchstart",function(event){
                obj.data("move",false);
                opts.start.call(this,event);
            }).on("touchmove",function(event){
                obj.data("move",true);
                opts.move.call(this,event);
            }).on("touchend",function(event){
                if(obj.data("move")){
                    return;
                }else{
                    opts.end.call(this,event);
                }
                obj.data("move",false);
            });
        });
    };
})(jQuery);