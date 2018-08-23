$(function () {
    let vh = $(window).height() - 50;
    $('.content').css('minHeight', vh + 'px');
    $('.right').css('minHeight', vh + 'px');
    $(document).off('click', '.selectbtn').on('click', '.selectbtn', function () {
        var element = $(this).parent().find('.layui-btn');
        for (var i = 0; i < element.length; i++) {
            element.eq(i).removeClass('layui-btn-normal').addClass('layui-btn-primary');
        }
        $(this).addClass('layui-btn-normal').removeClass('layui-btn-primary');
    });
    $(document).off('click','.edit').on('click','.edit',function(){
        $(this).siblings('.layinp').children('input').removeClass('layui-disabled');
        $(this).siblings('.layinp').children('input').removeAttr('disabled');
    });
    $(document).off('click','.del').on('click','.del',function(){
        $(this).parent().remove();
    })
    $(document).off('click','.alert').on('click','.alert',function(){
        layer.prompt({title: '不推荐理由', formType: 2}, function(text, index){
            layer.close(index);
            layer.msg('演示完毕！您的口令：'+ pass +'<br>您最后写下了：'+text);
          });        
    })
})