Page({
    data: {
        arraySchool: ["liuyi", "chener"],
        mindex: 0,
    },
    PickerSchoolChange: function (event) {  // 学校
        console.log(event.detail.value);
        this.setData({
            mindex: event.detail.value
        });
    },
});