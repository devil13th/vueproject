<template>
    <div class="pubcomponent">
        <div id="name"><h3>我是vuex</h3><br/> 我是全局变量：[{{this.$store.state.globalMsg}}]</div> 
        <a-button type="primary" @click="changeGlobalVar">修改全局变量</a-button>
    </div>
</template>
<script>


export default {
  mounted:function(){
    console.log('生命周期 mounted');
  },
  name:'StateTest',
  props:["name"],
  data(){
    return {
      age:"我是组件内部属性"
    }
  },
  methods:{
    changeGlobalVar : function(){
      this.$store.state.globalMsg = "全局变量被改变了"
    }
  }
}
</script>
<style scoped>
.pubcomponent{background:#eee;border:3px dotted #999;}
#name {
   color:green;
}
</style>
