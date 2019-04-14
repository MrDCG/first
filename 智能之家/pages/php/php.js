
// pages/php/php.js
var util = require('../../utils/util.js');



Page({

  /**
   * 页面的初始数据
   */
  
  data: {

    imgUrls: [
      {
        url: '/image/L3.jpg'
      }, 

     {
        url: '/image/L1.jpg'
      }, 

     {
        url: '/image/L8.jpg'
      },

     {
        url: '/image/L7.jpg'
      },
      {
        url: '/image/L2.jpg'
      }
    ],

    indicatorDots: true,  //小点

    autoplay: true,  //是否自动轮播

    interval: 3000,  //间隔时间

    duration: 3000,  //滑动时间
    height:0,
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
      // 调用函数时，传入new Date()参数，返回值是日期和时间
      var time = util.formatTime(new Date());
      // 再通过setData更改Page()里面的data，动态更新页面的数据
      this.setData({
        time: time
      });
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

  }
})