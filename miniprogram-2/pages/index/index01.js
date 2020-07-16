// pages/index/index01.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info:"",
        libs_id: [
            {name:"安徽省图书馆",id:""},
            {name:"合肥市图书馆",id:""},
            {name:"淮北市图书馆",id:""},
            {name:"亳州市图书馆",id:""},
            {name:"宿州市图书馆",id:""},
            {name:"蚌埠市图书馆",id:""},
            {name:"阜阳市图书馆",id:""},
            {name:"淮南市图书馆",id:""},
            {name:"六安市图书馆",id:""},
            {name:"滁州市图书馆",id:""},
            {name:"马鞍山市图书馆",id:""},
            {name:"芜湖市图书馆",id:""},
            {name:"铜陵市图书馆",id:""},
            {name:"池州市图书馆",id:""},
            {name:"宣城市图书馆",id:""},
            {name:"安庆市图书馆",id:""},
            {name:"黄山市图书馆",id:""},
        ],
        mass_centers_id: [
            {name:"安徽省文化馆",id:""},
            {name:"合肥市文化馆",id:""},
            {name:"淮北市文化馆",id:""},
            {name:"亳州市文化馆",id:""},
            {name:"宿州市文化馆",id:""},
            {name:"蚌埠市文化馆",id:""},
            {name:"阜阳市文化馆",id:""},
            {name:"淮南市文化馆",id:""},
            {name:"六安市文化馆",id:""},
            {name:"滁州市文化馆",id:""},
            {name:"马鞍山市文化馆",id:""},
            {name:"芜湖市文化馆",id:""},
            {name:"铜陵市文化馆",id:""},
            {name:"池州市文化馆",id:""},
            {name:"宣城市文化馆",id:""},
            {name:"安庆市文化馆",id:""},
            {name:"黄山市文化馆",id:""},
        ],
        mzms_id:[
            {name:"安徽省博物馆",id:""},
            {name:"合肥市博物馆",id:""},
            {name:"淮北市博物馆",id:""},
            {name:"亳州市博物馆",id:""},
            {name:"宿州市博物馆",id:""},
            {name:"蚌埠市博物馆",id:""},
            {name:"阜阳市博物馆",id:""},
            {name:"淮南市博物馆",id:""},
            {name:"六安市博物馆",id:""},
            {name:"滁州市博物馆",id:""},
            {name:"马鞍山市博物馆",id:""},
            {name:"芜湖市博物馆",id:""},
            {name:"铜陵市博物馆",id:""},
            {name:"池州市博物馆",id:""},
            {name:"宣城市博物馆",id:""},
            {name:"安庆市博物馆",id:""},
            {name:"中国徽州文化博物馆",id:""},
        ],
    },
    goto_detail: function(e){
        wx.navigateTo({
          url: '../describe_page/describe_page',
        })

    },

   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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