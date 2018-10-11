// countyData: ["和平区", "河东区", "河西区", "南开区"],
// countyData: ["长安区", "桥西区", "新华区", "井陉矿区"],

Page({
    data: {
        cityData: ["北京市", "天津市", "石家庄市"],
        countyData: ["东城区", "西城区", "朝阳区", "丰台区"],
        value: [0, 0]
    },
    onLoad: function(){
        
    },
    bindChange: function (e) {
        const val = e.detail.value;
        console.log(val);

        if(val[0] == 0){
            this.setData({
                countyData: ["东城区", "西城区", "朝阳区", "丰台区"],
            });
        }
        if (val[0] == 1) {
            this.setData({
                countyData: ["和平区", "河东区", "河西区", "南开区"],
            });
        }
        if (val[0] == 2) {
            this.setData({
                countyData: ["长安区", "桥西区", "新华区", "井陉矿区"],
            });
        }
    },
});