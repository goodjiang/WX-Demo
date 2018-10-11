Page({
	data: {
		images: ["/images/teacher1.jpg", "/images/teacher2.jpg", "/images/teacher3.jpg", "/images/teacher4.jpg"],
		swiperCurrent: 0,
	},
	swiperChange: function (e) {
		let swiperCurrent = e.detail.current;
		this.setData({
			swiperCurrent: swiperCurrent
		});
	},
})