Page({
  data: {
    value: '',
  },
  onChange(e) {
    this.setData({
      value: e.detail,
      
    });
   
  },
  onSearch(e) {
    this.setData({
      value: e.detail,
    });
    wx.navigateTo({
      url: '../serach/serachresult?key='+e.detail,
    })
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://s.search.bilibili.com/main/hotword?from_source=xcx_search',
     header: {'content-type': 'application/json',},
     success:(res)=>{this.setData({hotword:res.data})}
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
    
  }
})