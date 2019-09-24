<template>
    <div>
      <input type="button" value="Reset" @click="resetCount"/>
    </div>
</template>
<script>


export default {
  data(){
    return {
     
    }
  },
  methods:{
    resetCount : function(x){
      alert("reset")
    }
  }
}
</script>
<style scoped>
#counter{color:red;}
</style>
