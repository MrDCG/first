Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    // if ((this.data.phone.length == 0 || this.data.password.length == 0) || this.data.password!="123456") {
    //   wx.showToast({
    //     title: '登陆失败',
    //     icon: 'loading',
    //     duration: 2000
    //   })
    // } else {
      // 这里修改成跳转的页面 
     
      wx.switchTab({
        url: "../../pages/php/php",
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })

    // }
  }
})