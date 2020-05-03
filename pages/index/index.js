Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    navList: [],
    sliderImgList: [],
    videoList: []
  },
  getNavList(){
    wx.request({url:"http://mock-api.com/mnEe4VnJ.mock/navList",
    success: (res) => {
      console.log(res)
      if (res.data.code !== 0)  return 
      this.setData({
        navList: res.data.data.navList
      })
    }
  })
  },
  active(e) {
    console.log(e)
    this.setData(
      {
        activeIndex: e.target.dataset.index
      })
  },
  getSliderImgList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success: (res) => {
        console.log(res)
        if (res.data.code !== 0) return 
        this.setData({
          sliderImgList: res.data.data.swiperList
        })
      }
    })
  },
  getVideoList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success: (res) => {
        console.log(res)
        if (res.data.code !== 0) return 
        this.setData(
          { videoList: res.data.data.videoList}
        )
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
    this.getSliderImgList()
    this.getVideoList()
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