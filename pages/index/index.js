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
  onNavItem(event) {
    this.getAndSetNavNewsList(event.target.dataset.type)
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
        callback && callback()
      }
    })
  }
})

const formatNewsListData = list => {
  list.forEach((item) => {
    item.date = util.formatTime(item.date)
  })
  return list
} 