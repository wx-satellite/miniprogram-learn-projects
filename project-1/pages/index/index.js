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
    wx.setStorageSync("richText" + id, `<p>
    今天的天气真好呀<br/>
</p>
<p>
    <img src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=4118565385,3488973749&fm=85&app=92&f=PNG?w=121&h=75&s=CF11A244A42B2F170586138A0300F09C"/>
</p>
<p>
    你觉得呢
</p>
<p>
    <br/>
</p>`)
    wx.navigateTo({
      url: '/pages/case/case?name=' + id ,
    })
  }
})
