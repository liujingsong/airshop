var WxParse = require('../../wxParse/wxParse.js');

const app = getApp()

Page({
  data:{},
  onLoad:function(options){
    var that=this;
    var aHrefData ='<div style="color:red;text-align:center;padding:20px;"><a href="https://cn.jd.com/">浏览天猫商城</a></div>'
    WxParse.wxParse('aHrefData', 'html', aHrefData,that);
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  wxParseTagATap: function (e) {
    var href = e.currentTarget.dataset.src;
    console.log(href);
    wx.redirectTo({
      url: '../shop/shop'
      })
    //我们可以在这里进行一些路由处理
    // if (href.indexOf(index) > 0) {
      // wx.redirectTo({
      //   url: '../index/index'
      // })
    // }
  }

})