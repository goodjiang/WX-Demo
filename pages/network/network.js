const HttpConstants = require("../../utils/HttpConstants.js");

Page({
    callbackrequest: function(){
        HttpConstants.mrequest01(
            "GET", 
            HttpConstants.movie_url, 
            { apikey: HttpConstants.apikey }, 
            function (response) {
                console.log(response.data.subjects);
            }
        );
    },
    premiserequest: function(){
        HttpConstants.mrequest02(
            "GET",
            HttpConstants.movie_url,
            { apikey: HttpConstants.apikey }
        ).then(function (response) {
            console.log(response.data.subjects);
        }).catch(function (error) {
            console.log(error);
        });
    }
})