module.exports = {
    translateX: function(num){
        let distance = this.getmscreenWidth(num);
        let animation = wx.createAnimation({
            duration: 500,
            timingFunction: "ease",
            transformOrigin: "0 50% 0",
            delay: 0
		}).translateX(distance).step().export();
        return animation;
    },
    height: function (num) {
        let animation = wx.createAnimation({
            duration: 500,
            timingFunction: "ease",
            transformOrigin: "50% 50% 0",
            delay: 0
        }).height(num).step().export();
        return animation;
    },
	scaleWH: function(w, h){
		let animation = wx.createAnimation({
			duration: 500,
			timingFunction: "ease",
			transformOrigin: "50% 50% 0",
			delay: 0
		}).width(w).height(h).step().export();
		return animation;
	},
	translate: function (x, y, duration=800){
		let animation = wx.createAnimation({
			duration: duration,
			timingFunction: "ease",
			transformOrigin: "0 100% 0",
			delay: 0
		}).translateX(x).translateY(y).step().export();
		return animation;
	},
    getmscreenWidth: function (num) {  // rpx 转 px
        let mscreenWidth = 0;
        wx.getSystemInfo({
            success: function (res) {
                mscreenWidth = res.screenWidth
            },
        });
        return mscreenWidth / 750 * num;
    },
}