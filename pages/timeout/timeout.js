Page({
    data:{
        second: 59,
        doText: '获取验证码',
    },
    onLoad: function(){

    },
    clickmeTap: function(){
        this.countdown(this);
    },
    countdown: function(that) { //手机绑定倒计时
        var second = that.data.second
        if (second == 0) {
            that.setData({
                doText: "获取验证码",
                second: 59
            });
            return;
        }
        var time = setTimeout(function () {
            that.setData({
                second: second - 1,
                doText: that.data.second + "秒",
                isClick: true
            });
            that.countdown(that);
        }, 1000)
    }
})