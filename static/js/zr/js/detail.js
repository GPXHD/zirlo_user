function choice() {
    $(document).ready(function(){
        $("#product_btns a").click(function(){
            if(!$(this).hasClass("active")){
                $("#product_btns a").removeClass("active");
                $(this).addClass("active");
                $("#product_result>div").addClass("disno");
                $("#product_result>div").eq($(this).index()).removeClass("disno");
            }
        });
    });
}

function toggle(id){
    let tb=document.getElementById(id);
    if (tb.style.display=='none') tb.style.display='block';
    else tb.style.display='none';
}