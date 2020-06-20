
import { request } from './config'


const api = {
  getHome() {
    return request('/api/index')
  },
  addAudit(data) {
    return request('/api/audit/add', 'post', data)
  },
  getAuditList() {
    return request('/api/audit/list')
  },
  delAuditNav(data) {
    return request('/api/audit/del', 'post', data)
  },
  addNav(data) {
    return request('/api/nav/add', 'post', data)
  },
  editNav(data) {
    return request('/api/nav/edit', 'post', data)
  },
  delNav(id, name) {
    return request('/api/nav/del', 'post', {
      id,
      name
    })
  },
  findNav(id) {
    return request('/api/nav/find', 'post', {
      id
    })
  },
  login(account, pwd) {
    return request('/api/login', 'post', {
      account,
      pwd
    })
  },

  getCategoryList() {
    return request('/api/category/list')
  },
  addCategory(data) {
    return request('/api/category/add', 'post',  data)
  },
  delCategory(id) {
    return request('/api/category/del', 'post', { id })
  },
  editCategory(data) {
    return request('/api/category/edit', 'post', data)
  },
}

export default api