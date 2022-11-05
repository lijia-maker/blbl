// pages/my/myhistory.js
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
    wx.request({url: 'http://localhost:9000/x/web-interface/wx/history/cursor?access_key=bdd84df126de83f5a3eda65cbee78e71&appkey=75cd10da32ffff6d',success:res=>{

      res.data.data.list.forEach(item=>{
        var time=item.view_at*1000
        var d=new Date(time)
        var year=d.getFullYear();
        var  month=d.getMonth()+1;
        var day=d.getDate();
        var hour =d.getHours();
        var minute=d.getMinutes();
        var pubdate=month+"-"+day+"-"+hour+":"+minute
        item.view_at=pubdate;
      }),

     this.setData({
    history:res.data.data.list}) }
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