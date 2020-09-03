/* 头部nav-hover效果 */
(function(){
  $('.offer-affirm-head .head-nav li.active').addClass('cur');
  $('.offer-affirm-head .nav-li').mouseenter(function(event) {
    $(this).addClass('cur').siblings('li').removeClass('cur');
  });
  $('.offer-affirm-head .head-nav').mouseleave(function(event) {
    $('.offer-affirm-head .head-nav li.active').addClass('cur')
        .siblings('li').removeClass('cur');
  });
})();

/* 弹窗 */
$('.fn-alert-content').each(function(index, el) { //样式适配
  var $This = $(this);
  var widthNum = parseInt($This.css('width'));
  var heightNum = parseInt($This.css('height'));
  $This.css({
    'margin-left': - widthNum/2,
    'margin-top': - heightNum/2
  });
});
var $FnAlertFilter = $('.fn-alert-filter'); //缓存遮罩层
function openFnAlert(contentId) { //打开弹窗
  $FnAlertFilter.fadeIn('fast', function() {
    $('#'+contentId).show();
  });
}
function closeFnAlert(contentId) { //关闭弹窗
  $('#'+contentId).hide();
  $FnAlertFilter.fadeOut('fast');
}

/*登录页获取验证码*/
function getCodeClick(thisObj, times) {
  var $siblingsSpan = $(thisObj).hide().siblings('.time-steps');
  var $timeStepTarget = $siblingsSpan.find('strong');
  $timeStepTarget.html(times);
  $(thisObj).hide();
  $siblingsSpan.show();
  if(timesStep) { clearInterval(timesStep); }
  var timesStep = setInterval(function() {
    times--;
    if(times == 0) {
      $siblingsSpan.hide();
      $(thisObj).show();
      clearInterval(timesStep);
    }
    $timeStepTarget.html(times);
  }, 1000);
}

/*登录页2 背景图处理*/
function loginBgFix() {
  if( $(window).width() / $(window).height() > 1920 / 960 ) {
    $('#loginBgFix').addClass('fixwidth');
  } else {
    $('#loginBgFix').removeClass('fixwidth');
  }
}
loginBgFix();
$(window).resize(function(event) {
  loginBgFix();
});

/*文化展示轮播图*/
(function(){
  var $carsUlLis = $('#carsUl li');
  var roudLiHtml = '';
  for( var i=0; i< $carsUlLis.length; i++) { roudLiHtml += '<li></li>'; }
  var $roudUl = $('#roudUl');
  $roudUl.html(roudLiHtml);
  var $roudLis = $roudUl.find('li');
  var lock = true;
  var stepIndex = 0;
  function posPlay() {
    $roudLis.eq(stepIndex).addClass('cur')
      .siblings('li').removeClass('cur');
    $carsUlLis.eq(stepIndex).fadeIn('flow')
      .siblings('li').fadeOut('flow', function() {lock = true; });
  }
  posPlay();
  var autoTime = null;
  function autoPlay() {
    if( autoTime ) { clearInterval(autoTime); }
    autoTime = setInterval(function(){
      stepIndex ++;
      if(stepIndex >= $carsUlLis.length) {
        stepIndex = 0;
      }
      posPlay();
    }, 4000);
  }
  autoPlay();
  $roudLis.hover(function() {
    if( autoTime ) { clearInterval(autoTime); }
  }, function() {
    autoPlay();
  });
  $roudLis.click(function(event) {
    if( !lock ) { return; }
    lock = false;
    stepIndex = $(this).index();
    posPlay();
  });
})();

/*视频列表*/
(function(){
  $vcarUl = $('#vcarUl');
  $vcarUlLis = $vcarUl.find('li');
  var stepIndex = 0;
  var allScreen = parseInt( ($vcarUlLis.length + 2) / 3);
  var lock = true;
  function posScreen() {
    $vcarUl.animate({
      left: -stepIndex * 826
      },
      700, function() {
      lock = true;
    });
  }
  $('#prveScreen').click(function(event) {
    if( !lock ) { return; }
    lock = false;
    stepIndex --;
    if( stepIndex<0 ) { stepIndex = allScreen-1 }
    posScreen();
  });
  $('#nextScreen').click(function(event) {
    if( !lock ) { return; }
    lock = false;
    stepIndex ++;
    if( stepIndex>=allScreen ) { stepIndex = 0 }
    posScreen();
  });

})();

/*页面选项卡*/
(function(){
  var $joinNavUl = $('#joinNavUl');
  var $joinNavUlLi = $joinNavUl.find('li');
  $joinNavUl.on('click', 'a', function(event) {
    event.preventDefault();
    var tempIndex = $(this).parent('li').index();
    $joinNavUlLi.eq(tempIndex).addClass('cur')
      .siblings('li').removeClass('cur');
    var $allJoinNavCont = $('.join-nav-cont');
    $allJoinNavCont.eq(tempIndex).addClass('show')
      .siblings('.join-nav-cont').removeClass('show');
  });
})();

/*曲面轮播图*/
(function(){
  var $carouselTrs = $('#carouselTrsId');
  var $carouselTrsLi = $('#carouselTrsId li');
  var srcHtml = $carouselTrs.html();
  var liLeng = $carouselTrsLi.length;
  var liWidth = $carouselTrsLi.outerWidth();
  $carouselTrs.html(srcHtml + srcHtml + srcHtml);
  $carouselTrs.width(liLeng * liWidth * 3);
  var windowWidth = $(window).width();
  var curIindex = 0;
  var lock = true;
  setUlLeft();
  $(window).resize(function(event) { setUlLeft(); });
  function setUlLeft(){
    windowWidth = $(window).width();
    if ( windowWidth <= 1200 ) { windowWidth = 1200; }
    var tempLeft = - (curIindex + liLeng) * liWidth + windowWidth / 2 - liWidth / 2;
    $carouselTrs.css('left', tempLeft);
  }
  function goNext() {
    if(!lock) { return; }
    lock = false;
    curIindex ++;
    if(curIindex >= liLeng ) {
      curIindex = 0;
      var tempLeft = - ( curIindex-1 + liLeng ) * liWidth + windowWidth / 2 - liWidth / 2;
      $carouselTrs.css('left', tempLeft);
      goCur();
    } else { goCur(); }
  }
  function goPrve() {
    if(!lock) { return; }
    lock = false;
    curIindex --;
    if(curIindex <= -1 ) {
      curIindex = liLeng -1;
      var tempLeft = - ( curIindex+1 + liLeng ) * liWidth + windowWidth / 2 - liWidth / 2;
      $carouselTrs.css('left', tempLeft);
      goCur();
    } else { goCur(); }
  }
  function goCur() {
    $carouselTrs.animate({
      left: - (curIindex + liLeng) * liWidth + windowWidth / 2 - liWidth / 2
    },
      600, function() { lock = true; });
  }
  $('#carNext').click(function(event) { goNext(); });
  $('#carPrev').click(function(event) { goPrve(); });

  var autoPlay = null;
  setAutoPlay();
  function setAutoPlay() {
    if( autoPlay) { clearInterval(autoPlay); }
    autoPlay = setInterval(function(){ goNext(); }, 4000);
  }
  $('.carouse-ctrl').hover(function() {
    if( autoPlay) { clearInterval(autoPlay); }
  }, function() { setAutoPlay(); });
})();

/*办公环境*/
(function(){
  $('#bghjUlId img').each(function(index, el) {
    el.src = $(el).attr('data-src');
  });
  autoLineHeight();
  $(window).resize(function(event) { autoLineHeight(); });
  function autoLineHeight() {
    $('#offerShowId').css('line-height', $(window).height() + 'px');
  }
  var filterShowImg = document.getElementById('filterShowImg');
  $('#bghjUlId').on('click', 'li', function(event) {
    event.preventDefault();
    filterShowImg.src = $(this).children('img').attr('data-src');
    openFnAlert('offerShowId');
  });
  $('#offerShowId').click(function(event) {
    closeFnAlert('offerShowId');
  });
})();