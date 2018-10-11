Page({
    data: {
        showMessage: false,
        messageContent: '',
    },
    showtoast: function(){
        this.showMessage("Hello");
    },
    showMessage: function (text) {
        var that = this
        that.setData({
            showMessage: true,
            messageContent: text
        });
        setTimeout(function () {
            that.setData({
                showMessage: false,
                messageContent: ''
            })
        }, 2000);
    }
})