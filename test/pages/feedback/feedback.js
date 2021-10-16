// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ChooseImgs:[],
    textValue:[]
  },
  UploadImg:[],
  handleChooseImg(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        console.log(result);
        this.setData({
          ChooseImgs:[...this.data.ChooseImgs,...result.tempFilePaths]
        })
      },
      fail: () => {},
      complete: () => {}
    }); 
  },
  handleRemoveImg(e){
    const {index}=e.currentTarget.dataset;
    let {ChooseImgs} = this.data;
    ChooseImgs.splice(index,1);
    this.setData({
      ChooseImgs
    })
  },
  handleInput(e){
    this.setData({
      textValue:e.detail.value
    })
  },
  handleFormSubmit(){
    const {textValue,ChooseImgs}=this.data;
    if(!textValue.trim()){
      wx.wx.showToast({
        title: '输入不合法',
        icon: 'none',
        mask: true,
      }); 
      return;
    }
  }
  // ChooseImgs.forEach((v, i) => {
  //   wx.uploadFile({
  //     url: 'https://images.ac.cn/Home/Index/UploadAction/',
  //     filepath: v,
  //     name: "file",
  //     formData: {},
  //     success: (result) => {
  //       console.log(result);
  //     }
  //   });
  // })
})