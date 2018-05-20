var util = require('../../utils/util.js')

Page({
  date: {
    data: {}
  },
  onLoad(options) {
    this.getDetail(options.id)
  },
  getDetail(id) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: id
      },
      success: res => {
        let result = res.data.result
        this.setData({
          data: formatDetailData(result)
        })
      }
    })
  }
})

const formatDetailData = res => {
  res.date = util.formatTime(res.date)
  res.firstImage = res.firstImage || util.defaultImage
  res.readCount = `阅读 ${res.readCount}`
  return res
}