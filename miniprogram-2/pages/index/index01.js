// pages/index/index01.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tab:0,
        item:0,
        facitilty_name:"",
        libs: [
            {name:"安徽省图书馆"},
            {name:"合肥市图书馆",},
            {name:"合肥市少儿图书馆",},
            {name:"淮北市图书馆",},
            {name:"亳州市图书馆",},
            {name:"宿州市图书馆",},
            {name:"蚌埠市图书馆",},
            {name:"蚌埠市少儿图书馆",},
            {name:"阜阳市图书馆",},
            {name:"淮南市图书馆",},
            {name:"淮南市少儿图书馆",},
            {name:"六安市图书馆",},
            {name:"滁州市图书馆",},
            {name:"马鞍山市图书馆",},
            {name:"芜湖市图书馆",},
            {name:"铜陵市图书馆",},
            {name:"铜陵市铜都图书馆",},
            {name:"池州市图书馆",},
            {name:"宣城市图书馆",},
            {name:"安庆市图书馆",},
            {name:"安庆市少儿图书馆",},
            {name:"黄山市图书馆",},
        ],
        mass_centers: [
            {name:"安徽省文化馆",},
            {name:"合肥市文化馆",},
            {name:"淮北市文化馆",},
            {name:"亳州市文化馆",},
            {name:"宿州市文化馆",},
            {name:"蚌埠市文化馆",},
            {name:"阜阳市文化馆",},
            {name:"淮南市文化馆",},
            {name:"六安市文化馆",},
            {name:"滁州市文化馆",},
            {name:"马鞍山市文化馆",},
            {name:"芜湖市文化馆",},
            {name:"铜陵市文化馆",},
            {name:"铜陵市铜都文化馆",},
            {name:"池州市文化馆",},
            {name:"宣城市文化馆",},
            {name:"安庆市文化馆",},
            {name:"黄山市文化馆",},
        ],
        mzms:[
            {name:"安徽省博物院",},
            {name:"安徽名人馆",},
            {name:"淮北市博物馆",},
            {name:"亳州市博物馆",},
            {name:"宿州市博物馆",},
            {name:"蚌埠市博物馆",},
            {name:"阜阳市博物馆",},
            {name:"淮南市博物馆",},
            {name:"皖西博物馆",},
            {name:"滁州市博物馆",},
            {name:"马鞍山市博物馆",},
            {name:"芜湖市博物馆",},
            {name:"铜陵市博物馆",},
            {name:"池州市博物馆",},
            {name:"宣城市博物馆",},
            {name:"安庆市博物馆",},
            {name:"中国徽州文化博物馆",},
        ],
        glrs:[
            {name:"合肥赖少其艺术馆", },
            {name:"蚌埠市美术馆", },
            {name:"滁州市美术馆", },
            {name:"马鞍山市美术馆", },
            {name:"铜陵市美术馆", },
            {name:"安庆市美术馆", },
            {name:"黄山市美术馆", },
            {name:"砀山县美术馆", },
            {name:"萧县美术馆", },
            {name:"凤阳县美术馆", },
            {name:"明光市美术馆", },
            {name:"太湖县美术馆", },
            {name:"桐城市美术馆", },
            {name:"怀宁县美术馆", },
            {name:"歙县美术馆", },
            {name:"休宁县美术馆", },
            {name:"黟县美术馆", },
        ],
    },

    change_item:function(e){
        this.setData({
            item:e.currentTarget.dataset.item,
            tab:e.currentTarget.dataset.item            
        }) 
    },
    
    change_swipter:function(e){       
        console.info(e);
        this.setData({
            tab:e.detail.current
        })
    },

    goto_detial_lib: function(e){
        this.setData({
            facitilty_name:this.data.libs[e.target.dataset.index].name
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?name='+this.data.facitilty_name
        }) 
    },
    
    goto_detial_mass: function(e){
        this.setData({
            facitilty_name:this.data.mass_centers[e.target.dataset.index].name
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?name='+this.data.facitilty_name,
        })
    },
   
    goto_detial_mzm: function(e){
        this.setData({
           facitilty_name:this.data.mzms[e.target.dataset.index].name
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?name='+this.data.facitilty_name,
        })
        console.info(this.data.facitilty_name)
    },

    goto_detial_glr: function(e){
        this.setData({
           facitilty_name:this.data.glrs[e.target.dataset.index].name
        })
        wx.navigateTo({
          url: '../describe_page/describe_page?name='+this.data.facitilty_name,
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