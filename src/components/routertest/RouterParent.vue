<template>
    <div>
        <div id="name">{{name}}</div>     
        <PubComponent name="我是公共组件的属性"></PubComponent>
        <div>
        我是全局变量：[{{this.$store.state.globalMsg}}]
        </div>
        <router-view/>
    </div>
</template>
<script>

import PubComponent from '@/components/PubComponent'
export default {
  components: {PubComponent},  
  name:'HelloWorld',
  data(){
    return {
      value: 2,
      name:'devil13th',
      current: ['mail'],
    }
  }
}
</script>
<style scoped>
#name {
    border:3px dotted #999 ;
    padding:24px;
    background:#eee;
}
</style>
