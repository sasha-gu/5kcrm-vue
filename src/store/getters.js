const getters = {
  userInfo: state => state.user.userInfo,
  lang: state => state.app.lang,
  logo: state => {
    // console.log(state)
    if (state.app.logo) {
      return state.app.logo
    }
    return require('@/assets/img/add_task.png')
  },
  name: state => {
    if (state.app.name) {
      return state.app.name
    }
    return '智简CRM系统'
  },
  activeIndex: state => state.app.sidebar.activeIndex,
  navActiveIndex: state => state.app.navbar.activeIndex,
  // 权限
  allAuth: state => state.user.allAuth,
  crm: state => state.user.crm,
  bi: state => state.user.bi,
  manage: state => state.user.manage,
  oa: state => state.user.oa,
  project: state => state.user.project,
  // 路由
  addRouters: state => state.permission.addRouters,
  oaRouters: state => state.permission.oaRouters,
  crmRouters: state => state.permission.crmRouters,
  biRouters: state => state.permission.biRouters,
  manageRouters: state => state.permission.manageRouters,
  // 客户管理信息
  messageNum: state => state.customer.messageNum,
  messageOANum: state => state.oa.messageOANum,
  // 配置信息
  CRMConfig: state => state.app.CRMConfig
}
/**
 * 使用说明
 * import { mapGetters } from 'vuex'
 * computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
 */

export default getters
