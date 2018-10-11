Page({
	data: {
		images: [
			"/images/teacher1.jpg", 
			"/images/teacher2.jpg", 
			"/images/teacher3.jpg", 
			"/images/teacher4.jpg",
			"/images/teacher5.jpg",
			"/images/teacher6.jpg",
		],

		curIndex: 0, //当前显示的view下标
		winWidth: 0, //设备宽度；
		winHeight: 0, //设备高度；

		itemWidth: 0, // 单个轮播图swiper-item的宽度
		itemHeight: 0, // 单个轮播图swiper-item的高度
		allWidth: 0, // 轮播展示 swiper的总宽度

		startClinetX: '', //触摸开始位置；
		startTimestamp: '', //触摸开始时间；

		translateDistance: 0, //动画移动的 距离
		animationToLarge: {}, //从小变大的动画
		animationToSmall: {},
	},
	onLoad: function () {
		var that = this;
		wx.getSystemInfo({
			success: function (res) {
				let w = res.windowWidth;
				let h = res.windowHeight;
				let allWidth = that.data.images.length * (w * 0.5);
				that.setData({
					winWidth: w,
					winHeight: h,
					itemWidth: w * 0.5,
					allWidth: allWidth
				});
			},
		});
	},

	swiperTouchstart: function (e) {
		let startClinetX = e.changedTouches[0].clientX;
		this.setData({
			startClinetX: startClinetX, //触摸开始位置；
			startTimestamp: e.timeStamp, //触摸开始时间；
		})
	},

	swiperTouchmove: function (e) { },

	swiperTouchend: function (e) {
		let times = e.timeStamp - this.data.startTimestamp, //时间间隔；
			distance = e.changedTouches[0].clientX - this.data.startClinetX; //距离间隔；
		if (times < 500 && Math.abs(distance) > 10) {
			let curIndex = this.data.curIndex;
			let x0 = this.data.itemWidth,
				x1 = this.data.translateDistance,
				x = 0;
			if (distance > 0) {
				curIndex = curIndex - 1;
				if (curIndex < 0) {
					curIndex = 0;
					x0 = 0;
				}
				x = x1 + x0;
			} else {
				curIndex = curIndex + 1
				if (curIndex >= this.data.images.length) {
					curIndex = this.data.images.length - 1;
					x0 = 0;
				}
				x = x1 - x0;
			}
			this.animationToLarge(curIndex, x);
			this.animationToSmall(curIndex, x);
			this.setData({
				curIndex: curIndex,
				translateDistance: x
			});
		}
	},

	animationToLarge: function (curIndex, x) {
		let animation = wx.createAnimation({
			transformOrigin: "50% 50%",
			duration: 500,
			timingFunction: "ease-out",
			delay: 0
		}).translateX(x).scale(1).step();
		this.setData({
			animationToLarge: animation
		});
	},
	animationToSmall: function (curIndex, x) {
		let animation = wx.createAnimation({
			transformOrigin: "50% 50%",
			duration: 500,
			timingFunction: "ease-out",
			delay: 0
		}).translateX(x).scale(0.7).step();
		this.setData({
			animationToSmall: animation
		});
	},
});