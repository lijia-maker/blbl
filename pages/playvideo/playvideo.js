// pages/playvideo/playvideo.js

function getRandomColor () {
  const rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
const tools = require('../../utils/util');

var common = require('../../utils/common.js');
Page({
  
  /**
   * 页面的初始数据
   */
   data: {
      active: 0,//页面tab
      hiddenName:false,
      d:0
      
  },

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

  clickMe:function(e){
    this.setData({
        hiddenName:!this.data.hiddenName
    })
    
},
  //切换页面
  clickMe:function(e){
    this.setData({
        hiddenName:!this.data.hiddenName,
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  // onChange(event) {
  //   wx.showToast({
  //     title: `切换到标签 ${event.detail.name}`,
  //     icon: 'none',
      
  //   });
  // },

onLoad: function (options) {
  const that=this
tools.request ('http://localhost:9000/x/web-interface/view?aid='+options.id).then(res => {
  //请求视频 cid 
 let videolist=res.data.data//let 语句比function先执行   投机解决异步问题
 console.log(res.data)
              if(res.data.data.hasOwnProperty("redirect_url")){
                console.log("you")
                wx.navigateTo({
                  url: '../playvideo/playvideo1?u='+res.data.data.redirect_url
                })
              }
 that.setData({
  videodata:res.data.data})
  console.log(videolist)
  //请求视频解析地址
  wx.request({
             url: 'http://localhost:9000/x/player/playurl?cid='+videolist.cid+'&avid='+videolist.aid+'&bvid='+videolist.bvid+'&otype=json&platform=html5&type=mp4&html5=1',
            header: {'content-type': 'application/json',},
            success:(res)=>{
              that.setData({d:res.data.data.durl }),console.log(res.data)
            }
            })
  //请求相关视频          
  wx.request({
              url: 'http://localhost:9000/x/web-interface/view/detail?aid='+options.id+'&bvid=',
             header: {'content-type': 'application/json',},
             success:(res)=>{that.setData({rvideo:res.data.data })}
             })
  //请求评论
  wx.request({
              url: 'http://localhost:9000/x/v2/reply?jsonp=jsonp&type=1&oid='+options.id +'&sort=0',
             header: {'content-type': 'application/json',},
             success:(res)=>{that.setData({ vc:res.data.data.replies})}
             })
  //请求danmu
  wx.request({
              url:  'https://comment.bilibili.com/'+videolist.cid +'.xml',
             success:(res)=>{
               var xml =res.data
               var baseNodeName='d'
               var resObj=common.xml2Obj(xml,baseNodeName);
              
         var danmuList1= new Array()
         resObj.d.forEach(item=>{
           
            danmuList1.push({text: item,
             color: getRandomColor(),
             time:Math.floor(Math.random()*videolist.duration) })

        })
        this.setData({
          danmuList:danmuList1
        })

              

             }
             })
  
   
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
