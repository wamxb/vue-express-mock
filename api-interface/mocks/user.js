/**
 * 用户页面 - 用户信息接口
 *
 * @url user?uid=233
 *
 */
// req.query.uid; 是你地址栏参数，相当于是 GET 方式的参数。
// req.body.uid; 是你POST的参数。
module.exports = function (req) {
  var uid = req.query.uid

  if (!uid) {
    return {
      code: -1,
      msg: 'no uid',
    }
  }

  return {
    "code": 0,
    "data|10": [{
      "uid": +uid,
      "name": "@name",
      "age|20-30": 1,
      "email": "@email",
      "date": "@date",
    }]
  }
}
