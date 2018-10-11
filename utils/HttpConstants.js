const BaseURL =  "https://api.douban.com/v2/movie/";

module.exports = {
    apikey: "0b2bdeda43b5688921839c8ecb20399b",
    movie_url: BaseURL + "in_theaters",

    mrequest01(method, url, data, mcallback) {  // 网络请求 第一种方法
        wx.request({
            method: method,
            url: url,
            data: data,
            dataType: 'json',
            header: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            success: function (response) {
                mcallback(response);
            },
            fail: function(res){
                console.log(response);
            }
        });
    },

    mrequest02(method, url, data) { // Promise 第二种方法
        return new Promise(function (resolve, reject) {
            wx.request({
                method: method,
                url: url,
                data: data,
                header: {
                    // 'Content-Type': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                success: function (response) {
                    resolve(response);
                },
                fail: function (error){
                    reject(error);
                }
            })
        });
    }
}