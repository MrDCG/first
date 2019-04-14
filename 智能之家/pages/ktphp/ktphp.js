
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    today:{},
    future:{},
    pollution:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  loadInfo:function(){
    var page=this;
    wx.getLocation({
      type: 'gcj02',
      success:function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude, longitude);
        page.loadCity(latitude, longitude)
      }
    })
  },
  loadCity: function (latitude, longitude){
    var page = this;
  wx.request({
    url: 'https://api.map.baidu.com/geocoder/v2/?ak=ZUuGyZrB9LzwCwbvTsq5SQTYWxixt7OV&location=' + latitude + ',' + longitude +'&output=json',
    header:{
      'Content-Type':'application/json'
    },
    success:function(res){
     
      var city = res.data.result.addressComponent.city;
      city=city.replace("市","")
      page.setData({city:city});
      page.loadWeather(city);
    }
    
  });
  },
  loadWeather: function (city) {
    var page = this;
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather/?ak=ZUuGyZrB9LzwCwbvTsq5SQTYWxixt7OV&location=' + city + '&output=json',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.info(res);
        var a = new RegExp("[0-1][0-9]月[0-3][0-9]日","g");
        var future=res.data.results[0].weather_data;
        var today = res.data.results[0];

        var pollution;
        future[0].date = future[0].date.replace("周一 ", "");
        future[0].date = future[0].date.replace("周二 ", "");
        future[0].date = future[0].date.replace("周三 ", "");
        future[0].date = future[0].date.replace("周四 ", "");
        future[0].date = future[0].date.replace("周五 ", "");
        future[0].date = future[0].date.replace("周六 ", "");
        future[0].date = future[0].date.replace("周日 ", "");

        future[0].date = future[0].date.replace(a,"");
        future[0].date = future[0].date.replace(" (实时：", "");
       
        future[0].date = future[0].date.replace("℃)", "");

        if (today.pm25<=35){
          pollution=" 空气质量优";
        }
       else if (today.pm25 > 35 && today.pm25<=75) {
          pollution = " 空气质量良";
        }
       else if (today.pm25 > 75 && today.pm25<=115) {
          pollution = " 轻度污染";
        }
       else if (today.pm25 > 115 && today.pm25<=150) {
          pollution = " 中度污染";
        }
       else if (today.pm25 > 150 && today.pm25<=250) {
          pollution = " 重度污染";
        }
       else if (today.pm25 > 250) {
          pollution = " 严重污染";
        }

        
        page.setData({today:today,future:future,pollution:pollution});
       
      }

    });
  }
})





