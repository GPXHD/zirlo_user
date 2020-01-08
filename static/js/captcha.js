$(function(){
    // ajax 刷新
    $('.captcha').click(function(){
        $.getJSON("/captcha/refresh", function(data){
            $('.captcha').attr('src', data['image_url']);
            $('#id_captcha_0').val(data['key'])
        });
    });

    // 按钮刷新
     $('#js-captcha-refresh').click(function(){
         $.getJSON("/captcha/refresh", function(data){
             $('.captcha').attr('src', data['image_url']);
             $('#id_captcha_0').val(data['key'])
         });
     });

    // ajax动态验证
    $('#id_captcha_1').blur(function(){
        // #id_captcha_1为输入框的id，当该输入框失去焦点是触发函数
        let json_data={
            'response':$('#id_captcha_1').val(),  // 获取输入框和隐藏字段id_captcha_0的数值
            'hashkey':$('#id_captcha_0').val()
        };
        $.getJSON('/ajax_val', json_data, function(data){ //ajax发送
            // ('#captcha_status').remove();
            if(data['status']){ //status返回1为验证码正确， status返回0为验证码错误， 在输入框的后面写入提示信息
                // $('#id_captcha_1').after('<span id="captcha_status" >*验证码正确</span>')
                alert('验证码正确!')
            }
            else{
                // $('#id_captcha_1').after('<span id="captcha_status" >*验证码错误</span>')
                alert('验证码错误!')
            }
        });
    });
});
