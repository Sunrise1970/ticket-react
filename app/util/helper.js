import axios from 'axios'

// axios用法很简单，请参考这里：https://github.com/mzabriskie/axios

/**
 * 传入用户名，获取用户的github上仓库信息
 * @param  {[type]} keyword [description]
 * @return {[type]}          [description]
 */
function getRepos(keyword){
  // 这里使用了 ES6 的字符串模板
  return axios.get(`/basic/trip/o2o/city/getCityList`);
}


export default function getGithubInfo(keyword){
  // 将请求回来的数据做了一个 merge 操作
  return axios.all([getRepos(keyword)])
  .then((arr) => ({ repos: arr[0].data}));
}
