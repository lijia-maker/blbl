function js_date_time(unixtime) {
  var dateTime = new Date(parseInt(unixtime) * 1000)
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescript转换写法
  var milliseconds = now_new - dateTime;
  var timeSpanStr = year + '-' + month + '-' + day ;
  return timeSpanStr;
}
module.exports = {
  js_date_time: js_date_time
}


 //封装request方法
 const request = (url) => {
  var promise = new Promise((resolve, reject) => {
      //提示一下
      wx.showLoading({
        title: '加载中'
      })
      //网络请求
      wx.request({
          url: url,
  
          header: {
            'content-type': 'application/json', // 默认值
          },
          success: function (res) {
              wx.hideLoading()
              //服务器返回数据
              if (res.statusCode == 200) {
                  resolve(res);
              } else {
                  //返回错误提示信息
                  reject(res.data);
              }
          },
          fail: function (e) {
              wx.hideLoading()
              wx.showToast({
                title: '无法连接服务器',
                icon: 'loading',
                duration: 1000
              })
              reject('网络出错');
          }
  })
  });
      return promise;
  }
  
  module.exports = {
      request:request
  }
