var app = getApp();

Page({
    data: {
        stars: 5,
        normalSrc: '/images/normal.png',
        selectedSrc: '/images/selected.png',
        score: 0,  //评分
    },
    //点击左边,整颗星
    selectRight: function (e) {
        var score = e.currentTarget.dataset.score;
        if (this.data.score == 1 && e.currentTarget.dataset.score == 1) {
            score = 0; //只有一颗星的时候,再次点击,变为0颗
        };
        console.log("得" + score + "分")
        this.setData({
            score: score
        });
    }
}) 


/*

data: {
        stars: [0, 1, 2, 3, 4],
        normalSrc: '../../images/normal.png',
        selectedSrc: '../../images/selected.png',
        halfSrc: '../../images/half.png',
        key: 0,  //评分
    },
    //点击右边,半颗星
    selectLeft: function (e) {
        var key = e.currentTarget.dataset.key
        if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
            //只有一颗星的时候,再次点击,变为0颗
            key = 0;
        }
        console.log("得" + key + "分")
        this.setData({
            key: key
        })
    },
    //点击左边,整颗星
    selectRight: function (e) {
        var key = e.currentTarget.dataset.key
        console.log("得" + key + "分")
        this.setData({
            key: key
        })
    }


*/