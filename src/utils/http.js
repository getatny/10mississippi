import {
    domain
} from '../config'

const ShowToast = (msg, type = 'error', time = 2000) => {
    wx.showToast({
        title: msg,
        icon: 'none',
        duration: time
    })
}

// GET请求
function GET(url, params = {}, handler = {}) {
    return request('GET', url, params, handler)
}

// POST请求
function POST(url, params = {}, handler = {}) {
    return request('POST', url, params, handler)
}

function request(method, url, params = {}, handler = {}) {
    handler.url = domain + url;
    handler.data = params;
    handler.method = method;
    if (method === 'POST') {
        handler.header = {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

    return new Promise((resolve, reject) => {
        handler.success = res => {
            if (res.statusCode === 200) {
                resolve(res.data)
            } else {
                ShowToast('网络错误');
                reject(res)
            }
        }
        handler.fail = err => {
            wx.showModal({
                title: '网络错误',
                content: JSON.stringify(err),
                showCancel: false
            })
            reject(err)
        }
        wx.request(handler)
    })
}

export {
    GET,
    POST
}
