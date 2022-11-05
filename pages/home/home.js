var util= require("../../utils/util.js");

// pages/home/home.js
Page({
      
  /**
   * 页面的初始数据
   */
  data: {
    up_show:false
  },
  onPageScroll:function(e){
    console.log("滚动"+e.scrollTop)
    if (e.scrollTop>50){
      this.setData({
        up_show:true
      })
    }
    if (e.scrollTop<50){
      this.setData({
        up_show:false
      })
     }
  },
  
  goTopAction:function(e){
    if(wx.pageScrollTo){
      wx.pageScrollTo({
        scrollTop:0,
        up_show:true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:9000/x/web-interface/wx/hot',
      success:res=>{
        res.data.data.forEach(item=>{
          var time=item.pubdate*1000
          var d=new Date(time)
          var year=d.getFullYear();
          var  month=d.getMonth()+1;
          var day=d.getDate();
          var pubdate=month+"-"+day
          item.pubdate1=pubdate;
        }),
        this.setData({bannerlist:res.data.data,})},
      header:{'content-type':'application/json',},
    }) 
        
    
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
  
})