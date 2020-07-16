// pages/list_f/list_f.js



Page({
    /**
     * 页面的初始数据
     */
    data: {
        type:['图书馆','文化馆','博物馆','美术馆'],
        typeId:0,
        cities:[
            {name:'合肥市',},
            {name:'淮北市',},
            {name:'亳州市',},
            {name:'宿州市',},
            {name:'蚌埠市',},
            {name:'阜阳市',},
            {name:'淮南市',},
            {name:'滁州市',},
            {name:'六安市',},
            {name:'马鞍山市',},
            {name:'芜湖市',},
            {name:'宣城市',},
            {name:'铜陵市',},
            {name:'池州市',},
            {name:'安庆市',},
            {name:'黄山市',}
        ],
    
    },

    gotoinfo:function (){
        wx.navigateTo({
            url: '../describe_page/describe_page?name='+this.data.cities+'&type='+this.data.type[this.data.typeId-1]
        })
        console.info(this.data.type[this.data.typeId-1])
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {  
       this.setData({
           typeId:options.type,
       }); 
       console.info(options.type, this.data.typeId);
       
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