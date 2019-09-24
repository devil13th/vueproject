
let componentState = {
  state: {
    count: 0
  },
  // 实时监听state值的变化(最新状态)
  getters: {
    // 方法名随意,主要是来承载变化的Count的值
    // 使用:{{this.$store.getters.getCount}} 或在方法中直接使用this.$store.getters.getCount
    //

    getCount (state, getters, rootState) {
      console.log(getters)
      console.log(rootState)
      console.log('get state.count')
      return '全局计数：' + state.count
    }
  },
  // 用于同步修改状态
  mutations: {
    // 第一个参数是全局state,第二个参数是形参
    // 使用:this.$store.commit('addCount',20);
    increaseCount (state, x) {
      state.count += x
    }
  },
  // 用于异步修改状态
  actions: {
    // 第一个参数是上下文,第二个参数是形参
    // 使用：this.$store.dispatch('addCountdelay',11);
    increaseCountdelay (context, x) {
      setTimeout(function () {
        // 错误用法
        // state.count += x;

        // 正确用法
        // 修改状态要调用mutations中的方法,不能直接使用state.count += x
        // 在actions中的方法调用mutations中的方法要用commit
        context.commit('increaseCount', x) // 调用addCount方法
        alert('修改完成2')
      }, 1000)
    }
  }

}

export default componentState
