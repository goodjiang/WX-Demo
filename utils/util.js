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
	str2ab(str) {
		var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
		var bufView = new Uint16Array(buf);
		for (var i = 0, strLen = str.length; i < strLen; i++) {
			bufView[i] = str.charCodeAt(i);
		}
		return buf;
	},
	ab2str(buf) {
		return String.fromCharCode.apply(null, new Uint16Array(buf));
	},
	test() {
		return 1 + 1
	}
}