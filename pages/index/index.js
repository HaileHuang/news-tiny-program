var util = require('../../utils/util.js')
const navs = [
  { 'name': '国内', 'type': 'gn' },
  { 'name': '国际', 'type': 'gj' },
  { 'name': '财经', 'type': 'cj' },
  { 'name': '娱乐', 'type': 'yl' },
  { 'name': '军事', 'type': 'js' },
  { 'name': '体育', 'type': 'ty' },
  { 'name': '其他', 'type': 'other' },
]

Page({
  data: {
    navs: navs,
    newsList: [],
    nowNavType: navs[0].type,
  },
  onLoad() {
    this.getAndSetNavNewsList(navs[0].type)
  },
  onPullDownRefresh() {
    this.getAndSetNavNewsList(this.data.nowNavType, () => {
      wx.stopPullDownRefresh()
    })
  },
  getAndSetNavNewsList(type, callback) {
    wx.request({
      url: "https://test-miniprogram.com/api/news/list",
      data: {
        type: type
      },
      success: res => {
        this.setData({
          newsList: formatNewsListData(res.data.result),
          nowNavType: type,
        })
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  onNavItem(event) {
    this.getAndSetNavNewsList(event.currentTarget.dataset.type)
  },
  onShowDetail(event) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + event.currentTarget.dataset.id,
    })
  }
})

const formatNewsListData = list => {
  list.forEach((item) => {
    item.date = util.formatTime(item.date)
    item.firstImage = item.firstImage || util.defaultImage
  })
  return list
}