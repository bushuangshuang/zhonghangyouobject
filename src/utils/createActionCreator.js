/**
 *
 * createActionCreator.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/11/19
 *
 * @内容 作用
 * @内容 作用
 */
function createActionCreator(type, payloadSelector) {
  if (payloadSelector == null) {
    var actionCreator = function () { return ({ type: type }); };
    actionCreator.type = type;
    return actionCreator;
  }
  else {
    var actionCreator = function (state, meta) { return ({ type: type, payload: payloadSelector(state, meta) }); };
    actionCreator.type = type;
    return actionCreator;
  }
}
export {createActionCreator};
