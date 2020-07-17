// pages/index/index01.js
Page({

    /**
     * 页面的初始数据
     */
    // id 编码规则
    // 层级：省级馆4，市级馆3，县级馆2，乡镇级1，村级0
    // 类型: 公共图书馆4，文化馆3，博物馆2，美术馆1
    // 地区：省直10,合肥F0,淮北E0,亳州D0,宿州C0,蚌埠B0,阜阳A0,淮南90,
    //      滁州80,六安70,马鞍山60,芜湖50,宣城40,铜陵30,池州20,安庆10,黄山00
    // 县级代码:按行政区域顺序,用1-F表示
    // 等级: 一级馆3,二级馆2,三级馆1,无等级馆0
    // 顺序号: 0-F     
    //                 
    // 例: 安徽省图书馆,为二级馆,其编码为:04410020
    //      0 :预留
    //      4 :省级馆
    //      4 :公共图书馆
    //      10:省馆
    //      0 :县级代码
    //      2 :等级
    //      0 :序号
    data: {
        facitilty_id:"",
        libs_id: [
            {name:"安徽省图书馆",id:"04410020"},
            {name:"合肥市图书馆",id:""},
            {name:"合肥市少儿图书馆",id:""},
            {name:"淮北市图书馆",id:""},
            {name:"亳州市图书馆",id:""},
            {name:"宿州市图书馆",id:""},
            {name:"蚌埠市图书馆",id:""},
            {name:"蚌埠市少儿图书馆",id:""},
            {name:"阜阳市图书馆",id:""},
            {name:"淮南市图书馆",id:""},
            {name:"淮南市少儿图书馆",id:""},
            {name:"六安市图书馆",id:""},
            {name:"滁州市图书馆",id:""},
            {name:"马鞍山市图书馆",id:""},
            {name:"马鞍山市少儿图书馆",id:""},
            {name:"芜湖市图书馆",id:""},
            {name:"铜陵市图书馆",id:""},
            {name:"铜陵市铜都图书馆",id:""},
            {name:"池州市图书馆",id:""},
            {name:"宣城市图书馆",id:""},
            {name:"安庆市图书馆",id:""},
            {name:"安庆市少儿图书馆",id:""},
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
            {name:"六安市文化馆",id:"03370000"},
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
        glrs_id:[
            {name:"安徽省美术馆", id:""},
            {name:"合肥市美术馆", id:""},
        ],
    },
    goto_detial_lib: function(e){
        this.setData({
            facitilty_id:this.data.libs_id[e.target.dataset.index].id
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?id='+this.data.facitilty_id
        }) 
        
    },
    
    goto_detial_mass: function(e){
        this.setData({
            facitilty_id:this.data.mass_centers_id[e.target.dataset.index].id
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?id='+this.data.facitilty_id,
        })
    },
   
    goto_detial_mzm: function(e){
        this.setData({
            facitilty_id:this.data.mzms_id[e.target.dataset.index].id
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?id='+this.data.facitilty_id,
        })
    },

    goto_detial_glr: function(e){
        this.setData({
            facitilty_id:this.data.glrs_id[e.target.dataset.index].id
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?id='+this.data.facitilty_id,
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