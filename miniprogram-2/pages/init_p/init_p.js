// pages/init_p/init_p.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        
    },

    btnclick_mass: function () {
        let page_num = 2
        console.info(page_num)
        wx.navigateTo({
            url: '../decribe_page/decribe_page',
        })
    },

    btnclick_lib: function(){
        let page_num = 1
        console.info(page_num)
        wx.navigateTo({
            url: '../list_f/list_f',
        })
    },

    btnclick_msm: function(){
        let page_num = 3
        console.info(page_num)
        wx.navigateTo({
            url: '../list_f/list_f',
        })
    },

    btnclick_glr: function(){
        let page_num = 4
        console.info(page_num)
        wx.navigateTo({
            url: '../list_f/list_f',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

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