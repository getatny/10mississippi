let prefix = "10mssp.";

const Set = (key, value) => {
    wx.setStorageSync(prefix + key, value)
}

const Get = (key) => {
    return wx.getStorageSync(prefix + key)
}

module.exports = {
    Set,
    Get
}
