<template>
    <div>
      <div id="counter"> 私有计数:{{count}}</div>
      <div id="counter"> 全局计数:{{this.$store.state.count}}</div>
      <div id="counter"> 全局计数getter:{{this.$store.getters.getCount}}</div>
      <input type="input"  v-model="factor"/> 
      <input type="button" value="Add" @click="addCount(2)"/> 
      <input type="button" value="延时1秒后再加(模拟异步)" @click="addCountDelay(2)"/> 
    </div>
</template>
<script>


export default {
  data(){
    return {
      factor:1,
      count:0
    }
  },
  methods:{
    addCount : function(x){
      console.log(this.$store); 

      if(this.factor){
        x = this.factor;
        this.count += x;
      }


      this.$store.commit('addCount',20);

      // this.$store.getCount
      //this.$store.dispatch('addCount',x);

      
    },

    addCountDelay:function(x){
      this.$store.dispatch('addCountdelay',11);
    }
  }
}
</script>
<style scoped>
#counter{color:red;}
</style>
