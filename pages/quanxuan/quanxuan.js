Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 15,
        shopName: '小神童',
        guige: '75gx40支',
        desc: '建议零售0.5元/支',
        price: 10
      },
      {
        id: 16,
        shopName: '蒙牛',
        guige: '75gx40支',
        desc: '建议零售0.5元/支',
        price: 20
      },
      {
        id: 17,
        shopName: '伊利',
        guige: '75gx40支',
        desc: '建议零售0.5元/支',
        price: 30
      }
    ],
    countSum: 0,
    checked_all: false,
    shopNum: 0,
    trolleyArr: []  //购物车商品id
  },
  //单选
  checkboxChange: function (e) {
    console.log(e)
    var that = this
    var value = e.detail.value;
    var valLen = value.length
    var checkid = e.target.dataset.checkid
    var list = that.data.list
    var listLen = list.length
    var num = 0
    if (valLen != 0) {      //选中
      for (var i = 0; i < listLen; i++) {
        if (list[i].id == checkid) {
          console.log(list[i])
          //console.log(list[i].id + 'if' +checkid)
          if (!list[i].checkeditem) {
            list[i].checkeditem = true;
            num = num + 1;           //console.log('--' + num)
            that.data.trolleyArr.push(list[i].id);
          }
        } else {
          if (list[i].checkeditem) {//console.log(list[i].id + 'else' + checkid)
            num = num + 1;           //console.log('++' + num)
          }
        }
      }
      // console.log(that.data.trolleyArr)
      if (num == listLen) {
        that.setData({
          checked_all: true  //全选
        })
      }
    } else {
      var arr = []
      var trolleyLen = that.data.trolleyArr.length
      for (var i = 0; i < listLen; i++) {
        if (list[i].id == checkid) {
          if (list[i].checkeditem) {
            list[i].checkeditem = false

            for (var j = 0; j < trolleyLen; j++) {
              if (that.data.trolleyArr[j] == checkid) {
                continue;
              } else {
                arr.push(that.data.trolleyArr[j])
              }
            }
          }
        }
      }
      that.setData({
        trolleyArr: arr,
        checked_all: false
      })
    }
    that.setData({
      list: list
    })
    // console.log(that.data.trolleyArr)
  },
  // 全选
  checkedAll: function (e) {
    var that = this
    var value = e.detail.value;
    var valLen = value.length
    var list = that.data.list
    var listLen = list.length
    // console.log(valLen)
    if (valLen != 0) {
      for (var i = 0; i < listLen; i++) {
        list[i].checkeditem = true;
        that.data.trolleyArr.push(list[i].id)
      }
      that.setData({
        checked_all: true,//全选
        list: list
      })
    } else {
      for (var i = 0; i < listLen; i++) {
        list[i].checkeditem = false
      }
      that.setData({
        trolleyArr: [],
        checked_all: false,
        list: list
      })
    }
  }
})