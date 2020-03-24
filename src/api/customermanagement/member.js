import request from '@/utils/request'

// crm 新建会员
export function crmMemberSave(data) {
  return request({
    url: 'CrmMember/addOrUpdate',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// crm 会员列表
export function crmMemberIndex(data) {
  return request({
    url: 'CrmMember/queryPageList',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 删除
export function crmMemberDelete(data) {
  return request({
    url: 'CrmMember/deleteByIds',
    method: 'post',
    data: data
  })
}

// crm 公海列表
export function crmCustomerPool(data) {
  return request({
    url: 'CrmCustomer/queryPoolPageList',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// crm 详情
export function crmMemberRead(data) {
  return request({
    url: 'CrmMember/queryById',
    method: 'post',
    data: data
  })
}

// 操作
/**
 * 客户锁定，解锁
 * @param {*} data
 */
export function crmCustomerLock(data) {
  return request({
    url: 'CrmCustomer/lock',
    method: 'post',
    data: data
  })
}

/**
 * 客户放入公海
 * @param {*} data
 * customer_id 	客户数组
 */
export function crmCustomerPutInPool(data) {
  return request({
    url: 'CrmCustomer/updateCustomerByIds',
    method: 'post',
    data: data
  })
}

/**
 * 客户转移
 * @param {*} data
 */
export function crmCustomerTransfer(data) {
  return request({
    url: 'CrmCustomer/transfer',
    method: 'post',
    data: data
  })
}

/**
 * 会员导出
 * @param {*} data
 * member_id 会员ID
 */
export function crmMemberExcelExport(data) {
  return request({
    url: 'CrmMember/batchExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}

export function crmMemberExcelAllExport(data) {
  return request({
    url: 'CrmMember/allExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 会员导入
 * @param {*} data
 * member_id 会员ID
 */
export function crmMemberExcelImport(data) {
  var param = new FormData()
  Object.keys(data).forEach(key => {
    param.append(key, data[key])
  })
  return request({
    url: 'CrmMember/uploadExcel',
    method: 'post',
    data: param,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 会员导入模板下载
 * @param {*} data
 *
 */
export const crmMemberExcelDownloadURL = process.env.BASE_API + 'CrmMember/downloadExcel'
export function crmMemberDownloadExcelAPI(data) {
  return request({
    url: 'CrmMember/downloadExcel',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}

/**
 * 公海导出
 * @param {*} data
 */
export function crmCustomerPoolExcelExportAPI(data) {
  return request({
    url: 'CrmCustomer/poolBatchExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    timeout: 60000
  })
}

export function crmCustomerPoolExcelAllExport(data) {
  return request({
    url: 'CrmCustomer/poolAllExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 客户分配
 * @param {*} data
 */
export function crmCustomerDistribute(data) {
  return request({
    url: 'CrmCustomer/distributeByIds',
    method: 'post',
    data: data
  })
}

/**
 * 客户领取
 * @param {*} data
 */
export function crmCustomerReceive(data) {
  return request({
    url: 'CrmCustomer/receiveByIds',
    method: 'post',
    data: data
  })
}

/**
 * 客户下联系人
 * @param {*} data
 */
export function crmCustomerQueryContacts(data) {
  return request({
    url: 'CrmCustomer/queryContacts',
    method: 'post',
    data: data
  })
}

/**
 * 客户下商机
 * @param {*} data
 */
export function crmCustomerQueryBusiness(data) {
  return request({
    url: 'CrmCustomer/queryBusiness',
    method: 'post',
    data: data
  })
}

/**
 * 客户下合同
 * @param {*} data
 */
export function crmCustomerQueryContract(data) {
  return request({
    url: 'CrmCustomer/queryContract',
    method: 'post',
    data: data
  })
}

/**
 * 客户下回款计划
 * @param {*} data
 */
export function crmCustomerQueryReceivablesPlan(data) {
  return request({
    url: 'CrmCustomer/queryReceivablesPlan',
    method: 'post',
    data: data
  })
}

/**
 * 客户下回款
 * @param {*} data
 */
export function crmCustomerQueryReceivables(data) {
  return request({
    url: 'CrmCustomer/queryReceivables',
    method: 'post',
    data: data
  })
}


/**
 * 跟进记录
 * @param {*} data
 */
export function crmMemberRecordSave(data) {
  return request({
    url: 'CrmMember/addRecord',
    method: 'post',
    data: data
  })
}
export function crmMemberRecordIndex(data) {
  return request({
    url: 'CrmMember/getRecord',
    method: 'post',
    data: data
  })
}
// 团队操作

/**
 * 相关团队创建
 * @param {*} data
 * types crm_leads
 * typesId 分类ID
 */
export function crmCustomerSettingTeamSave(data) {
  return request({
    url: 'CrmCustomer/addMembers',
    method: 'post',
    data: data
  })
}

export function crmCustomerSettingTeamDelete(data) {
  return request({
    url: 'CrmCustomer/deleteMembers',
    method: 'post',
    data: data
  })
}

export function crmCustomerTeamMembers(data) {
  return request({
    url: 'CrmCustomer/getMembers',
    method: 'post',
    data: data
  })
}

export function crmCustomerUpdateMembers(data) {
  return request({
    url: 'CrmCustomer/updateMembers',
    method: 'post',
    data: data
  })
}

/**
 * 查重
 * @param {*} data
 */
export function crmCustomerQueryListAPI(data) {
  return request({
    url: 'CrmCustomer/queryList',
    method: 'post',
    data: data
  })
}

/**
 * 客户标记跟进
 * @param {*} data
 * id 客户IDs
 */
export function crmCustomerSetFollowAPI(data) {
  return request({
    url: 'CrmBackLog/setCustomerFollowup',
    method: 'post',
    data: data
  })
}

/**
 * 客户成交状态修改
 * @param {*} data
 * id 客户IDs
 */
export function crmCustomerDealStatusAPI(data) {
  return request({
    url: 'CrmCustomer/setDealStatus',
    method: 'post',
    data: data
  })
}
