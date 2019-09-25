<template>
  <div>
    <a-form
      class="ant-advanced-search-form"
      :form="form"
      layout="inline"
      :colon="colon"
    >
      <a-row :gutter="24">
        <a-col 
          :xs="{span:24}" 
          :sm="{span:24}"
          :md="{span:24}"
          :lg="{span:24}"
        >
          <a-form-item
            :colon="colon"                        
            label="Finding"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-input
              :size="size"
              v-model="formData.finding"
            />
          </a-form-item> 
        </a-col>
      </a-row>

      <a-row :gutter="24">
        <a-col 
          :xs="{span:24}" 
          :sm="{span:24}"
          :md="{span:24}"
          :lg="{span:24}"
        >
          <a-form-item          
            :colon="colon"                       
            label="Target Date"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-date-picker 
              :size="size" 
              v-model="formData.targetDate" 
            />
          </a-form-item> 
        </a-col>
      </a-row>

      <a-row :gutter="24">
        <a-col 
          span="24"
        >
          <a-form-item        
            :colon="colon"                         
            label="Conclusion"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-textarea v-model="formData.commonts" placeholder="Commonts" :rows="4"/>
          </a-form-item> 
        </a-col>
      </a-row>

    </a-form>
  </div>
</template>
<script>

import moment from 'moment';
let dateFormat = 'YYYY-MM-DD';
export default {
  data(){
    return{
      //布局相关
      labelCol:{span:4},
      size:"default",
      wrapperCol:{span:20},
      colon:false,

      form: this.$form.createForm(this),
      formData : {
        finding:"",
        targetDate:moment("2019-02-03", dateFormat),
        commonts:""
      }
    }
  },
  methods:{

  }
}
</script>
<style scoped>
</style>
