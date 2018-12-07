/**
 *
 * hoc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018-11-13
 *
 * @内容 作用
 * @内容 作用
 */
/**
 *
 * HoverScaleHOCs.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/4/10
 *
 * @内容 作用
 * @内容 作用
 */
import React, {PureComponent} from 'react'

export function CounterHoc() {
  return function (Comp) {
    return class hocComponent extends PureComponent {

      render() {
        const {id, ...others} = this.props;
        return (
          <Comp {...others}/>
        )
      }
    }
  }
}
