// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {},
    otherVideoList: [],
    commentList: []
  },
  getVideoInfo(options) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=' + options.id,
      success: (res) => {
        if (res.data.code !== 0) return 
        this.setData({
          videoInfo: res.data.data.videoInfo
        })
      }
     })
  },
  getOtherVideoList(options) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList?id=' + options.id,
      success: (res) => {
        if (res.data.code !== 0) return
        this.setData({
          otherVideoList: res.data.data.otherList
        })
      }
    })
  },
  getCommentList(options) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/commentList?id=' + options.id,
      success: (res) => {
        console.log(res)
        if (res.data.code !== 0) return
        this.setData({
          commentList: res.data.data.commentData.commentList
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoInfo(options)
    this.getOtherVideoList(options)
    this.getCommentList(options)
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