// pages/serach/serachresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(options.key)
wx.request({
  url: 'https://app.bilibili.com/x/v2/search?duration=0&keyword='+options.key&+'pn=1&ps=20&order=default&appkey=75cd10da32ffff6d&build=20143000&mobi_app=win&platform=uwp_desktop&access_key=bdd84df126de83f5a3eda65cbee78e71&ts=1626581319&sign=369a7803721245bf2b5884f1bf5c6c10',
 header: {'content-type': 'application/json',},
 success:(res)=>{this.setData({rvideo:res.data})
  console.log(res.data)}
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