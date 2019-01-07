let share = {
    init: {},
    config: function (data,status=true) {                //param menu  config
        if (status == true) {
            try {
                WeixinJSBridge.call('showOptionMenu');//显示
            } catch (e) {
                document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                    WeixinJSBridge.call('showOptionMenu');//显示
                });
            }
        } else {
            try {
                WeixinJSBridge.call('hideOptionMenu');//隐藏
            } catch (e) {
                document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                    WeixinJSBridge.call('hideOptionMenu');//隐藏
                });
            }
        }
        //传入的配置参数格式
        var shareConfig = {
            title: data.title,
            desc: data.content,
            link: data.url,
            imgUrl: data.img,
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
        };
        this.init.config = data;
        return this;
    },
    api: function (success, cancel, error, $url) {
        // 测试debug
        var paramStr = location.hash.replace(/#\/.{0,9999}\?/, '').replace(/&/g, ',');
        var paramArr = paramStr.split(',');
        for (let i = 0; i < paramArr.length; i++) {
            if (paramArr[i].match('dg=')) {
                var debug = paramArr[i].replace('dg=', '');
            }
        }
        debug = debug == undefined ? false : debug;
        this.init.debug = debug;
        // debug
        $url = $url == undefined ? location.href.split('#')[0] : $url;
        $.ajaxSetup({async: false});
        var $api = {}, that = this;
        $.post('https://interface.api.haodai.com/home/shareWx/getshare', {
            url: $url,
            type: 'json'
        }, function (res) {
            var param = res.details;
            $api = {
                debug: that.init.debug,
                appId: param.appId, // 必填，公众号的唯一标识
                timestamp: param.timestamp, // 必填，生成签名的时间戳
                nonceStr: param.nonceStr, // 必填，生成签名的随机串
                signature: param.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline','onMenuShareQQ','onMenuShareWeibo']
            };
        });
        this.init.api = $api;
        // start
        wx.config(this.init.api);
        var that = this;
        //微信扫一扫
        wx.ready(function () {
          wx.scanQRCode({
            desc: 'scanQRCode desc',
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
              // 回调
            },
            error: function(res){
              if(res.errMsg.indexOf('function_not_exist') > 0){
                alert('版本过低请升级')
              }
            }
          });

          //分享到朋友圈
          wx.onMenuShareTimeline({
                title: that.init.config.title, // 分享标题
                link: that.init.config.link, // 分享链接
                imgUrl: that.init.config.imgUrl, // 分享图标
                success: function () {
                    success && success();
                },
                cancel: function () {
                    cancel && cancel();
                }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: that.init.config.title, // 分享标题
                desc: that.init.config.desc, // 分享描述
                link: that.init.config.link, // 分享链接
                imgUrl: that.init.config.imgUrl, // 分享图标
                type: that.init.config.type, //分享类型,music、video或link，不填默认为link
                dataUrl: that.init.config.dataUrl,// 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    success && success();
                },
                cancel: function () {
                    cancel && cancel();
                }
            });
            //分享到QQ
            wx.onMenuShareQQ({
                title: that.init.config.title, // 分享标题
                desc: that.init.config.desc, // 分享描述
                link: that.init.config.link, // 分享链接
                imgUrl: that.init.config.imgUrl, // 分享图标
                success: function () {
                    success && success();
                },
                cancel: function () {
                    cancel && cancel();
                }
            });
            //分享到腾讯微博
            wx.onMenuShareWeibo({
                title: that.init.config.title, // 分享标题
                link: that.init.config.link, // 分享链接
                imgUrl: that.init.config.imgUrl, // 分享图标
                desc: that.init.config.desc, // 分享描述
                success: function () {
                    success && success();
                },
                cancel: function () {
                    cancel && cancel();
                }
            });
            //分享到qq空间
            wx.onMenuShareQZone({
                title: that.init.config.title, // 分享标题
                link: that.init.config.link, // 分享链接
                imgUrl: that.init.config.imgUrl, // 分享图标
                desc: that.init.config.desc, // 分享描述
                success: function () {
                    success && success();
                },
                cancel: function () {
                    cancel && cancel();
                }
            });
            wx.error(function (res) {
                error && error(res);
            });
        });
        return this;
    },
    appShare: function (data, url='http://interface.api.haodai.com/home/shareSina/getshare') {
        var formdata = {
            url: data.url, //分享的url
            title: data.title, //分享的标题
            content: data.content, //分享的内容
            img: data.img, //分享的图片
        };
        $.post(url, formdata, function (response) {
            if (response.rs_code == 1000) {
                var param = response.details[0];
                window.location.href = "http://www.xindaiquanshare.com?" + param;
            } else {
                layer.alert(response.rs_msg);
            }
        });
        return this;
    }
};
export default share

