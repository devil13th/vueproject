<template>
  <div>
    [{{this.$store.getters.getCount}}]<br/>
    [{{this.$store.state.vuextestState.count}}]<br/>
    {{showCount}}
    <input type="button" value="+2" @click="add(2)" />
  </div>
</template>


<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      count: 1
    };
  },
  computed:{ 
    ...mapState({
        count: state => state.vuextestState.count
    }),
  },  
  methods: {
    add: function(i) {
      console.log(this.$store)
      this.count += i;
      this.$store.dispatch('increaseCountdelay',i);
    }
  },
  computed: {
    showCount: function() {
      return "计数：" + this.count;
    }
  }
};
</script>
<style scoped>
</style>

