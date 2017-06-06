var postData = require('../../data/posts-data.js')

Page({
  data:{
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   this.setData({
       post_key:postData.postList
   });
  },


  onPostTap:function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id="+postId
    })
  },



  onSwiperTap:function(event) {
    //target and currentTarget differents
    //target is now ,currentTarget is up now
    var postId = event.target.dataset.postid;
     wx.navigateTo({
      url: "post-detail/post-detail?id="+postId
    })
  },
  
  

})