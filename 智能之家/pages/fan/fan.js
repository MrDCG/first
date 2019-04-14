// // pages/wzmlqphp/wzmlqphp.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     titles: "Day 10",
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })


var pageObj = {
  data: {
    isChecked1: "",
    isChecked2: "",
    isChecked3: "",
    isChecked4: "",
    isChecked5: "",
  }
};

for (var i = 1; i < 5; ++i) {
  (function (i) {

    pageObj['changeSwitch' + i] = function (e) {
      var changedData = {};
      changedData['isChecked' + i] = e.detail.value;

      this.setData(changedData);

    }

  })(i)
}

for (var i = 5; i < 6; ++i) {
  (function (i) {

    pageObj['changeSwitch' + i] = function (e) {
      var changedData = {};
      changedData['isChecked' + i] = e.detail.value;
    
      if (e.detail.value == true) {
        this.setData({ changedData, isChecked1: true, isChecked2: true, isChecked3: true, isChecked4: true, isChecked5: true });
      }
      else {
        this.setData({ changedData, isChecked1: false, isChecked2: false, isChecked3: false, isChecked4: false, isChecked5: false });
      }

    }

  })(i)
}

Page(pageObj);