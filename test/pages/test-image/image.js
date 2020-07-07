const app = getApp()

Page({
  data: {
    imageUrl: ""
  },
  videoCtx: null,
  upload: function(e) {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function(res) {
        that.setData({
          imageUrl: res.tempFilePaths[0]
        })
      }
    })
  },
  onReady: function() {
    this.videoCtx = wx.createVideoContext('video', this)
  },
  play: function(e) {
    wx.playBackgroundAudio({
      dataUrl: 'http://music.163.com/song/media/outer/url?id=27646687.mp3',
      title: '',
      coverImgUrl: ''
    })
  },
  pause: function(e) {
    wx.pauseBackgroundAudio()
    wx.getBackgroundAudioPlayerState({
      success: (result) => {
        console.log(result)
      },
    })
  },
  danmu: function(e) {
    console.log(e)
    this.videoCtx.sendDanmu({
      text:"我是一个弹幕",
      color: "#fff"
    })
  }
});