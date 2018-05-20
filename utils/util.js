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

module.exports = {
  formatTime: formatTime
}
