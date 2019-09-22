<template>
    <div>
       <span class="name">[{{name}}]</span>
       <a-rate v-model='value'/>
    </div>
</template>
<script>
export default {
  data(){
    return {
      value: 2,
      name:'我是嵌套进来的页面'
    }
  }
}
</script>
<style scoped>
.name{color:blue;}
</style>
