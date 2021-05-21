function errRes(data = null) {
  return {
    code: 500,
    data: null
  }
}

function succRes(data = null) {
  return {
    code: 200,
    data
  }
}

module.exports = {
  errRes,
  succRes
}
