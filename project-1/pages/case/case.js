const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    currentRichText: ""
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '嘻嘻哈哈',
    })
    var key = "richText" + options.name

    WxParse.wxParse('article', 'html', wx.getStorageSync(key), this,5);

  },
})