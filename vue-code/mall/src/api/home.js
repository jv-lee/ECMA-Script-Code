import axios from 'axios'
import { SUCCESS_CODE, TIMEOUT } from './config'

// 获取幻灯片数据
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCCESS_CODE) {
      return res.data.slider
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
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}
