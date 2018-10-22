var test = 1;

Page({
	data: {
		show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
		index: 0, //选择的下拉列表下标
		noSelect: '/images/normal-b.png',
		hasSelect: '/images/selected-b.png',
		content: "",
		repContent: [{
				message: '广告内容',
				sureid: false,
				id: '0001'
			},
			{
				message: '不友善内容',
				sureid: false,
				id: '0002'
			},
			{
				message: '垃圾内容',
				sureid: false,
				id: '0003'
			},
			{
				message: '违法违规内容',
				sureid: false,
				id: '0004'
			},
			{
				message: '其他',
				sureid: false,
				id: '0005'
			}
		],
		addLine: ["1"],
	},
	selectTap(e) {
		let addLineIndex = e.currentTarget.dataset.addLine;
		console.log("-------->", addLineIndex);
		// if ((addLineIndex + 1) == this.data.addLine[addLineIndex]){
			let contentArr = [];
			for (let item of this.data.repContent) {
				if (item.sureid == true) {
					contentArr.push(item.message);
				}
			}
			this.setData({
				show: !this.data.show,
				content: contentArr.toString(),
			});
		// }
	},
	optionTap(e) {
		let index = e.currentTarget.dataset.index;
		let repContentItem = this.data.repContent[index];
		repContentItem.sureid = !repContentItem.sureid;
		this.setData({
			index: index,
			repContent: this.data.repContent,
		});
	},
	onLoad: function (options) {
		
	},
	addLineTap(){
		test++;
		this.data.addLine.push(test);
		this.setData({
			addLine: this.data.addLine,
		});
	}
})