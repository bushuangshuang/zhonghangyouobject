import { injectReducer } from '../../reducers'

export default (store) => ({
  path : 'dispatcher',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('../../views/Dispatcher/Dispatcher').default
      const reducer = require('../../reducers/Dispatcher/reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'dispatcher', reducer })

      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'dispatcher')
  }
})

