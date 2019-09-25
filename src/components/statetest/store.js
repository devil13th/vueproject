
let componentState = {
  state: {
    count: 0,
    factor: 1
  },
  getters: {// 实时监听state值的变化(最新状态)
    getCount (state) { // 方法名随意,主要是来承载变化的Count的值
      console.log('get state.count')
      return state.count
    },
    getFactor (state) { // 方法名随意,主要是用来承载变化的factor的值
      return state.factor
    }
  },

  mutations: {// 用于直接状态的同步修改
    addCount (state, x) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
      state.count += x
    },
    setFactor (state, i) { // 同上，这里面的参数除了state之外还传了需要增加的值sum
      state.factor = i
    }
  },
  actions: { // 用于异步修改状态
    addCountdelay (context, x) {
      setTimeout(function () {
        // 错误用法
        // state.count += x;

        // 正确用法
        // 修改状态要调用mutations中的方法,不能直接使用state.count += x
        // 在actions中的方法调用mutations中的方法要用commit
        context.commit('addCount', x) // 调用addCount方法
        alert('修改完成')
      }, 1000)
    }
  }

}

export default componentState
