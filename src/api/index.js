export default {
  // 医生登陆 post mobile code
  login: '/doctor/doctor/login',
  // 医生退出登陆 post mobile code
  logOut: '/doctor/doctor/logout',
  // 发送验证码 post mobile
  sendSmsCode: '/health/user/sendcode',
  // 获取用户信息 getUserInfo post
  getUserInfo: '/doctor/info/getInfo',
  // 获取消息管理列表中信息列表
  getRoomList: '/doctor/reply/replyList',
  // 消息管理列表历史信息 post  // 所需参数room_id，reference_tm，page_size，page
  getMsgList: '/doctor/reply/getMsgList',
  // 发送消息 post // 所需参数room_id，media_type，message_content，file_suffix
  sendMsg: '/doctor/reply/saveMsg',
  // 结束咨询 post room_id
  endConsultation: '/doctor/reply/close',
  // 咨询用户列表
  getCustomerList: '/doctor/reply/customerList',
  // 咨询室（单）记录 customer_id
  getConsultRecords: '/doctor/reply/customerConsult',
  // 咨询室（单）记录详情 post room_id
  getConsultRecordsDetail: '/doctor/reply/detail',
  // 咨询室提交总结 post room_id conclusion
  submitConclusion: '/doctor/reply/conclusion'
}
