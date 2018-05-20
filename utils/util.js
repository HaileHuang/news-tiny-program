const formatTime = dateStr => {
  const date = new Date(dateStr)
  let hour = date.getHours()
  let minute = date.getMinutes()
  return formatNum(hour) + ':' + formatNum(minute)
}

const formatNum = num => {
  if (num < 10) {
    return '0' + num
  } else {
    return num
  }
}

const defaultImage = 'http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg'

module.exports = {
  formatTime: formatTime,
  defaultImage: defaultImage,
}
