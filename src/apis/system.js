import request from '@/utils/request';

/**
 * 登录方法
 * @param data {Object}
 * @param data.username {string}
 * @param data.password {string}
 * @return {AxiosPromise}
 */
export function login(data) {
  return request({
    method: 'post',
    url: '/login',
    data,
  });
}

/**
 * 获取用户信息
 * @return {AxiosPromise}
 */
export function getInfo() {
  return request({
    url: '/getInfo',
  });
}
