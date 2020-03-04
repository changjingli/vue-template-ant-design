/** @file 职位信息 */

import request from '@/utils/request';

const base = '/api/position/';

/**
 * 职位列表
 * @return {AxiosPromise}
 */
export function list() {
  return request({
    url: base + 'list',
  });
}

/**
 * 编辑职位
 * @return {AxiosPromise}
 */
export function edit(data) {
  return request({
    method: 'post',
    url: base + 'edit',
    data,
  });
}

/**
 * 新增职位
 * @return {AxiosPromise}
 */
export function add(data) {
  return request({
    method: 'post',
    url: base + 'add',
    data,
  });
}

/**
 * 删除职位
 * @param positionId {number} - 职位主键
 * @return {AxiosPromise}
 */
export function Delete(positionId) {
  return request({
    method: 'delete',
    url: base + positionId,
  });
}

/**
 * 根据职位编号获取详细信息
 * @param positionId {number} - 职位主键
 * @return {AxiosPromise}
 */
export function detail(positionId) {
  return request({
    url: base + positionId,
  });
}
