import {getInfo, login} from '@/apis/system';
import {resetRouter} from '@/router';

const state = {
  token: '' || sessionStorage.getItem('token'),
  name: '',
  roles: [],
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

const actions = {
  // 登录
  login({commit}, userInfo) {
    const {username, password} = userInfo;
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password}).then(({data}) => {
        commit('SET_TOKEN', data.token);
        sessionStorage.setItem('token', data.token);

        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },

  // 获取用户信息
  // get user info
  getInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {data} = response;

        if (!data) {
          reject('验证失败，请重新登录');
        }

        const {roles, name} = data;

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles 必须为非空数组!');
        }

        commit('SET_ROLES', roles);
        commit('SET_NAME', name);
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },

  // user logout
  logout({commit}) {
    return new Promise((resolve) => {
      // logout(state.token).then(() => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      resetRouter();

      resolve();
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // remove token
  resetToken({commit}) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
