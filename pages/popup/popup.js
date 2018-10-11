const util = require("../../utils/util.js");

Page({
    data: {
        popupAnimation: "",
        isPopup: true,
    },
    onLoad: function(){
        
    },
    openTap: function(){
        this.setData({
            isPopup: false,
            popupAnimation: util.height("600rpx")
        });
    },
    closeTap: function(){
        this.setData({
            isPopup: true,
            popupAnimation: util.height("0rpx")
        });
    },
})