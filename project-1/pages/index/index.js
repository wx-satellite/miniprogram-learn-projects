//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World'
  },
  
  onLoad: function () {
  },
  toDetail: function(e) {
    var id = e.currentTarget.dataset.index
    wx.setStorageSync("richText" + id, "<p>测试</p>")
    wx.navigateTo({
      url: '/pages/case/case?name=' + id ,
    })
  }
})
