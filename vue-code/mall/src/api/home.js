import axios from 'axios'
import jsonp from 'assets/json/jsonp'
import { SUCCESS_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, JSONP_OPTIONS } from './config'

// 打乱数组的顺序
const shuffle = (arr) => {
  const arrLength = arr.length
  let i = arrLength
  let rndNum

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      // 解构赋值 交换数据位置
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]]
    }
  }

  return arr
}

/**
 * 获取幻灯片数据 首页banner
 */
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCCESS_CODE) {
      let sliders = res.data.slider
      // 打乱数据顺序
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]]
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5))
      if (sliders.length === 0) {
        sliders = slider
      }
      return sliders
    }

    throw Error('没有成功获取到数据！')
  }).catch(e => {
    if (e) {
      console.log(e)
    }

    // 返回错误数据
    return [
      {
        linkurl: 'https://www.imooc.com',
        picUrl: require('assets/img/404.png')
      }
    ]
  }).then(data => {
    return new Promise(resolve => {
      resolve(data)
    })
  })
}

/**
 * 首页热门推荐商品数据列表
 */
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  }

  return jsonp(url, params, JSONP_OPTIONS).then(res => {
    if (res.code === '200') {
      return res
    }

    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(data => {
    return new Promise(resolve => {
      resolve(data)
    })
  })
}
