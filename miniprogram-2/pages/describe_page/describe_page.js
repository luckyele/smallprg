// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:'',
        facility_name:'',
        content:'',
        src:'',  
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function (options) {
        console.info(options);
        let that = this;
        let host = 'http://127.0.0.1:8080/';
        wx.request({           
          url: 'http://127.0.0.1:8080/' + options.name + '.json',
          data:{},
          method:'GET',
          success:function(res){
              console.info(res);
              that.setData({
                src : host + res.data.src,
                facility_name:res.data.facility_name,
                content:res.data.content
            }) 
          },
          fail:function(){
              console.info("failure");
          }
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