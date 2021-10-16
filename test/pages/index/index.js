//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner.png',
      '../../images/duck.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  //事件处理函数
  onLoad: function () {
    
  },
  search: function () {
    wx.navigateTo({
      url: "../search/search"
    })
  },
  
  Gotofeedback: function(){
    wx.navigateTo({
      url: "../feedback/feedback"
    })
  },
})
