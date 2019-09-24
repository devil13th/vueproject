<template>
    <div class="pubcomponent">
        <div id="name"><h3>我是公共组件</h3><br/>[{{name}},{{age}}]</div> 
    </div>
</template>
<script>

export default {
  name:'PubComponent',
  props:["name"], //定义属性
  data(){
    return {
      age:"我是组件内部属性"
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
