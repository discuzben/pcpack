// const baseUrl = 'https://test.juniuapi.com';
const baseUrl = 'http://kppw36.com';
// const baseUrl = 'http://task.test';
const basePath = '未知';

const urlHub = {
  // sharefile: "/"//测试接口
  sendCode: "api/user/getSmsCode",//发送验证码
  getActive: "api/getActive",//获取最新成交列表
  taskCate: "api/taskCate",//获取分类列表
  getServeStar: "api/shopList",//获取服务之星
  tasks:"api/tasks",//获取任务列表
  commodityLists:"api/commodityLists",//获取商品列表
}

export default{
  baseUrl,
  basePath,
  urlHub
}
