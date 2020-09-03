function ajaxSubmit(url, type, data) {
    var res;
    $.ajax({
        type: type,
        url: url,
        async: false,
        data: data,
        dataType: "json",
        success: function (datares) {
            res = datares;
        }
    });
    return res;
}

function ClearSubmit(e) { if (e.keyCode == 13) { $('#lbtnSigin').click(); return false; } }

function CheckNum(obj, e) {
    var keyCode = e.keyCode;
    var val = $.trim(obj.value);
    if (keyCode == 46 || keyCode == 45 || (keyCode >= 48 && keyCode <= 57)) {
        if (val.indexOf('.') != -1) {
            if (keyCode == 46)
                return false;
            else
                return true;
        }
        else
            return true;
    }
    else {
        return false;
    }
}

function CheckNumber(e) {
    var keyCode = e.keyCode;
    if (keyCode == 45 || (keyCode >= 48 && keyCode <= 57)) {
        return true;
    }
    else {
        return false;
    }
}

function show(obj, l) {
    layer.tips(unescape(obj), l, { tips: [1, '#3595CC'], time: 9999999, maxWidth: 400, closeBtn: true });
}

function IsNull(str) {
    if (str != undefined && str != null && str != "null" && str != "" && str != "undefined")
        return str;
    else
        return "";
}

function OpenLoginFrm() {
    //layer.open({
    //    type: 2,
    //    title: false,
    //   // shadeClose: true,
    //    shade: 0.3,
    //    closeBtn: false,
    //    area: ['640px', '500px'],
    //    content: "/Home/UserLoginNew" //iframe的url
    //});
    window.location = "/Login/Index?returnUrl=" + window.location.pathname + window.location.search; +"&resource=login"
}


function OpenUserRegFrm() {
    layer.open({
        type: 2,
        title: false,
        // shadeClose: true,
        shade: 0.3,
        closeBtn: false,
        area: ['500px', '300px'],
        content: "/Home/UserRegNew" //iframe的url
    });
}
//新 快速注册  跳转注册导航地址  zhl
function OpenUserRegNewFrm() {
    window.top.location.href = "/Register/RegisterConditions";
}
function LoginOut() {
    var res = false;
    layer.confirm(_languageObj.getConfitTypeValue(_languageObj.dialogTitle, 'AreYouSureAboutTheCancellation'), {
        title: _languageObj.getConfitTypeValue(_languageObj.dialogTitle, 'Information'),
        btn: [_languageObj.getConfitTypeValue(_languageObj.dialogTitle, 'Determine'), _languageObj.getConfitTypeValue(_languageObj.dialogTitle, 'Cancel')], //按钮
        closeBtn: false
    }, function () {
        window.location = "/Login/LogOut"
        //$.ajax({
        //    url: "/CloudExamine/InsertExamineUserTrackingLog",
        //    type: "POST",
        //    data: {
        //        direction: 1,
        //        portal: "注销"
        //    },
        //    dataType: "json",
        //    success: function () {
        //    },
        //    error: function () {
        //    }
        //});

        //var url = "/Lggin/LoginOut";
        //var res = ajaxSubmit(url, "post", "");
        //if (res.IsSuccess) {
        //    window.location.href = "/Home/Index";
        //}
    });
}

function valiCode() {
    var date = new Date();
    $("#valiCode").attr("src", "/Home/GetValidateCode?" + date);
}

function getvaliCode() {
    var date = new Date();
    $("#valiCode").attr("src", "/Home/GetValidateCode?" + date);
}

function Login() {
    var userAccount = $("#txtAccount").val();
    var userPwd = $("#txtPwd").val();
    var code = $("#txtCode").val();
    var url = "";
    if (/^[0-9]{11}$/.test($("#txtAccount").val())) {
        url = "/Home/LoginByTel";
    } else {
        url = "/Home/LoginNew";
    }
    var autoLogin = $("#cbAuto")[0].checked == true ? "1" : "0";
    var data = { userAccount: userAccount, userPwd: userPwd, code: code, autoLogin: autoLogin, path: path };
    var res = ajaxSubmit(url, "post", data);

    if (res.IsSuccess) {
        if (res.Message == "") {

            parent.location.href = parent.location.href;
        }
        else {
            parent.location.href = res.Message;
        }
        $("#lbtnClose").click();

        //layer.confirm("登录成功！", {
        //    btn: ['确定'], //按钮
        //    closeBtn: false
        //}, function () {

        //});
    }
    else {
        layer.alert(res.Message);
    }
}

function closeFrm() {
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(index);
}


function addEvent(obj, eventType, func) {
    if (obj.attachEvent) { obj.attachEvent("on" + eventType, func); }
    else { obj.addEventListener(eventType, func, false) }
}
function delEvent(obj, eventType, func) {
    if (obj.detachEvent) { obj.detachEvent("on" + eventType, func) }
    else { obj.removeEventListener(eventType, func, false) }
}
function clickOther(el) {
    thisObj = el.target ? el.target : event.srcElement;
    //alert(thisObj.tagName== "BODY")
    do {
        if (thisObj.id == "lightmenu") return;
        if (thisObj.tagName == "BODY") {
            hidemenu();
            return;
        };
        thisObj = thisObj.parentNode;
    } while (thisObj.parentNode);
}
function showmenu(evt) {

    var light = document.getElementById("lightmenu");
    var _event = evt ? evt : event;
    light.style.left = _event.clientX - 35 + document.body.scrollLeft + "px";
    light.style.top = _event.clientY + 15 + document.body.scrollTop + "px";
    light.style.display = 'block';
    addEvent(document.body, "mousedown", clickOther)
}
function hidemenu() {
    var light = document.getElementById("lightmenu");
    delEvent(document.body, "mousedown", showmenu);
    light.style.display = 'none';
}


function clickcustomOther(el) {
    thisObj = el.target ? el.target : event.srcElement;
    //alert(thisObj.tagName== "BODY")
    do {
        if (thisObj.id == "custommenu") return;
        if (thisObj.tagName == "BODY") {
            hidecustommenu();
            return;
        };
        thisObj = thisObj.parentNode;
    } while (thisObj.parentNode);
}
function showcustommenu(evt) {
    var light = document.getElementById("custommenu");
    var _event = evt ? evt : event;
    light.style.left = _event.clientX - 35 + document.body.scrollLeft + "px";
    light.style.top = _event.clientY + 15 + document.body.scrollTop + "px";
    light.style.display = 'block';
    addEvent(document.body, "mousedown", clickcustomOther)
}
function hidecustommenu() {
    var light = document.getElementById("custommenu");
    delEvent(document.body, "mousedown", showcustommenu);
    light.style.display = 'none';
}

function cbClick(obj) {
    if ($(obj).val() == "1") {
        if ($(obj)[0].checked) {
            $(obj).parent().next().children()[0].checked = false;
        }
        else {
            $(obj).parent().next().children()[0].checked = true;
        }
    }
    else {
        if ($(obj)[0].checked) {
            $(obj).parent().prev().children()[0].checked = false;
        }
        else {
            $(obj).parent().prev().children()[0].checked = true;
        }

    }
}


//校验数据
function verifyFloatData(obj, isLostFocus, isVerifyLength) {
    var value = $(obj).val().trim();
    var nums = (value.split('.')).length - 1;
    var re = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;
    if (re.test(value)) {
    } else if (nums == 1 && value.length > 0 && value.charAt(value.length - 1) == "." && !isLostFocus) {
    } else if (isLostFocus && !re.test(value)) {
        $(obj).val("");
    } else {
        if (value.length > 0) {
            $(obj).val(value.substring(0, value.length - 1));
        }
    }
    if (isVerifyLength) {
        $(obj).parent().find("i").remove();
        if ($(obj).val().indexOf(".") > -1) {
            if ($(obj).val().split(".")[0].length > 10) {
                $(obj).parent().append("<i style='color:red;font-size:14px;'>您填写数据过大,请检查数据<i>");
                if (isLostFocus) {
                    $(obj).val("");
                }
            }
            if ($(obj).val().split(".")[1].length > 2)//新写的
            {
                $(obj).parent().append("<i style='color:red;font-size:14px;'>小数点后最多写两位,请检查数据<i>");
                if (isLostFocus) {
                    $(obj).val("");
                }
            }
        } else {
            if ($(obj).val().length > 10) {
                $(obj).parent().append("<i style='color:red;font-size:14px;'>您填写数据过大,请检查数据<i>");
                if (isLostFocus) {
                    $(obj).val("");
                }
            }
        }
    }
}

//验证手机格式
function verifyMobile(phone) {
    var regPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/;
    return regPhone.test(phone);
}

function verityPhone(phone) {
    var regPhone = /^0\d{2,3}-?\d{7,8}$/;
    return regPhone.test(phone);
}
//验证邮箱格式
function verifyEmail(val) {
    return /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(val);
}

///验证正整数
function verifyNumber(val) {
    var reg = /^[0-9]*$/;
    return reg.test(val);
}

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.replaceAll = function (findStr, repStr) {
    regExp = new RegExp(findStr, "g");
    return this.replace(regExp, repStr);
}

Number.prototype.FromatTwoValid = function () {
    if (this.toString().length > 2) {
        var str = "";
        for (var i = 0; i < this.toString().length - 2; i++) {
            str += "0";
        }
        if (parseInt(this.toString().substring(2, 1)) >= 5) {
            return parseInt((parseInt(this.toString().substring(0, 2)) + 1) + str);
        } else {
            return parseInt((parseInt(this.toString().substring(0, 2))) + str);
        }
    } else {
        return this;
    }
}

function getIeVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
    if (isIE) {
        var regIE = new RegExp("MSIE (\\d+\\.\\d+);");
        regIE.test(userAgent);
        return parseInt(RegExp["$1"]);
    }
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

String.prototype.FormatDate = function () {
    var date = new Date(parseInt(this.toString().replace("/Date(", "").replace(")/", ""), 10));
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate;
}


String.prototype.FormatDateTime = function () {
    var date = new Date(parseInt(this.toString().replace("/Date(", "").replace(")/", ""), 10));
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}


function getByteLength(str) {
    if (str == undefined || str == null) {
        return 0;
    }
    return str.toString().replace(/[\u0391-\uFFE5]/g, "aa").length;
}


function appAlert(msg, time, callback) {
    var index = layer.open({
        type: 1
      , title: _languageObj.getConfitTypeValue(_languageObj.dialogTitle, 'Information') //不显示标题栏
      , closeBtn: false
        //, area: '200px;'
      , time: time || 2000
      , shade: 0.8
      , id: 'LAY_layuipro' //设定一个id，防止重复弹出
      , resize: false
      , btn: [_languageObj.getConfitTypeValue(_languageObj.dialogTitle, 'Determine')]
      , btnAlign: 'c'
      , moveType: 1 //拖拽模式，0或者1
      , content: '<div style="padding: 20px; line-height: 22px; background-color: #d5d5d5; font-weight: 300;text-align:center;">' + msg + '</div>'
      , success: function (layero) {
          layer.close(index);
      },
        end: function () {
            callback && callback();
        }
    });
    $(".layui-layer-shade").click(function () {
        layer.close(index);
    });
}


function appAjax(url, data, callback, async, notLoading) {
    var timer = 0;
    if (notLoading == undefined || notLoading == false) {
        timer = 1000;
        $("body").append('<div class="loading"><div class="img"></div></div>');
    }
    setTimeout(function () {
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            type: 'post',
            dataType: "json",
            async: async != undefined ? async : true,
            contentType: 'application/json; charset=utf-8',
            beforeSend: function () {
                //if (notLoading == undefined || notLoading == false) {
                //    $("body").append('<div class="loading"><div class="img"></div></div>');
                //}
            },
            success: function (result) {
                callback && callback(result);
            },
            error: function () {
                //alert("链接错误，请稍后重试");
            },
            complete: function () {
                if (notLoading == undefined || notLoading == false) {
                    $("body .loading").remove();
                }
            }
        })
    }, timer);
}


function appAjaxSubmit(formID, url, data, callback, notLoading) {
    var timer = 0;
    if (notLoading == undefined || notLoading == false) {
        timer = 1000;
        $("body").append('<div class="loading"><div class="img"></div></div>');
    }
    setTimeout(function () {
        $("#" + formID).ajaxSubmit({
            url: url,
            data: data,
            type: 'post',
            dataType: "text",
            beforeSubmit: function () {
                //if (notLoading == undefined || notLoading == false) {
                //    $("body").append('<div class="loading"><div class="img"></div></div>');
                //}
            },
            success: function (result) {
                var json = JSON.parse(result);
                callback && callback(json);
                if (notLoading == undefined || notLoading == false) {
                    $("body .loading").remove();
                }
            },
            error: function () {
                //alert("链接错误，请稍后重试");
                if (notLoading == undefined || notLoading == false) {
                    $("body .loading").remove();
                }
            }
        })
    }, timer);
}

function openWindow(url) {
    var link = document.createElement('a');
    link.target = "_blank";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

$.closeWindow = function () {
    try {
        window.opener = null;
    } catch (e) { }
    try {
        window.open('', '_self');
    } catch (e) { }
    try {
        window.location.href = "about:blank";
    } catch (e) { }
    window.close();
}


function isInIframe() {
    if (window.frames.length != parent.frames.length) {
        return true;
    } else {
        return false;
    }
}

function hideControlInIframe(selStr) {
    if (isInIframe()) {
        $(selStr).hide();
    }
}


//jQuery版本添加select下拉框的值
function fillSelect(data, selObj, value, text) {//填充下拉框
    $.each(data, function () {
        selObj.append("<option value='" + this[value] + "'>" + this[text] + "</option>");
    });
}

//设置缓存
function set_cache(key, value) {
    if (key == '') return false;
    localStorage.setItem(key, value);
}

//读取缓存
function get_cache(key) {
    return localStorage.getItem(key);
}

//删除缓存
function remove_cache(key) {
    localStorage.removeItem(key);
}

var _languageObj = {
    data: null,
    title: "ConfigTypeTitle",
    pHolder: "ConfigTypePlaceHolder",
    dialogTitle: "ConfigTypeDialog",
    dialogPHolder: "ConfigTypeDialogPlaceHolder",
    msg: "ConfigTypeMessage",
    attributeKey: "languageattribute",
    init: function () {
        if (this.data == null) {
            var valStr = $('input[id="_languageConfigJsonString"]').val();
            if (valStr) {
                this.data = JSON.parse(valStr);
                this.setStaticText();
            }
        }
    },
    setStaticText: function () {
        var thisObj = this;
        $.each(thisObj.data, function (type, array) {
            switch (type) {
                case thisObj.title:
                case thisObj.dialogTitle:
                    $.each(array, function (kIndex, config) {
                        $('[' + thisObj.attributeKey + '="' + config.key + '"]').text(eval("'" + config.value + "'"));
                    });
                    break;
                case thisObj.pHolder:
                case thisObj.dialogPHolder:
                    $.each(array, function (kIndex, config) {
                        $('[' + thisObj.attributeKey + '="' + config.key + '"]').attr('placeholder', (eval("'" + config.value + "'")));
                    });
                    break;
            }
        });
    },
    getConfitTypeValue: function (type, key) {
        var thisObj = this;
        if (thisObj.data == null) {
            thisObj.init();
        }
        var val = "";
        if (thisObj.data[type]) {
            $.each(thisObj.data[type], function (index, item) {
                if (item.key == key) {
                    val = eval("'" + item.value + "'");
                    return false;
                }
            });
        }
        return val;
    },
    setPageTitle: function (type, val) {
        if (type == "EN") {
            var title = $(document).attr("title");
            var reg = new RegExp("[A-Za-z]+");
            if (!reg.test(title)) {
                $(document).attr("title", val || $("[languageattribute='HomePage']").first().parent().find("[languageattribute]").last().text());
            }
        }
    },
    refreshControl: function (controlID, type) {
        var thisObj = this;
        var array = $("#" + controlID).find('[' + thisObj.attributeKey + ']');
        $.each(array, function () {
            $(this).text(thisObj.getConfitTypeValue(type, $(this).attr(thisObj.attributeKey)));
        });
    }
};

$(function () {
    _languageObj.init();
});