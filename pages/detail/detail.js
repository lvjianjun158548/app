// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:15,
    user:{id:1,name:'lvjianjun',age:25},
    users:[{id:1,name:'lvjianjun',age:25},
           {id:2,name:'lvjianjun001',age:23},
           {id:3,name:'lvjianjun002',age:22},
          ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    setTimeout(()=>{
      this.setData({age:25});
    },3000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  }
})