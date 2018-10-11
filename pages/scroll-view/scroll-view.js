var currentflag = 0
Page({
    data: {
        scrollleft: 0,
        toview: "demo1",
    },
    scroll: function(event){
        console.log(event.detail.scrollLeft);
    },
    nextTap01: function () {
        currentflag = currentflag + 375;
        this.setData({
            scrollleft: currentflag
        });
    },
    nextTap02: function () {
        this.setData({
            toview: "demo2"
        });
    }
})