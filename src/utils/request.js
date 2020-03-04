import axios from 'axios';
import {Modal, message} from 'ant-design-vue';
import store from '../store/index';

const service = axios.create({
  // process..env.NODE_ENV === 'development' 来判断是否开发环境
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5 * 1000, // 5s
});

service.interceptors.request.use(config => {
  config.headers.Authorization = store.getters.token;

  return config;
}, error => {
  console.log(error);
  return Promise.reject();
});

service.interceptors.response.use(response => {
  if (response.config.responseType === 'blob') {
    return response.data;
  }

  if (response.data.code === 200) {
    return response.data;
  } else {
    message.error(response.data.msg || '未知错误');

    return Promise.reject(response.data);
  }
}, error => {

  if (error.response.status === 401) {
    return Modal.confirm({
      title: '登陆已过期',
      onOk() {
        store.commit('updateUserInfo', {});
        location.reload();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  console.log(error);

  message.error(error);

  return Promise.reject();
});

export default service;
