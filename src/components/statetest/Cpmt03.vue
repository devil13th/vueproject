<template>
    <div class="pubcomponent">
        <Comt01></Comt01>
        <Comt02></Comt02>
    </div>
</template>
<script>
import Comt01 from '@/components/statetest/Cpmt01';
import Comt02 from '@/components/statetest/Cpmt02';

export default {
  components : {Comt01,Comt02},
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
