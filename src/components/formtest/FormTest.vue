<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel header="Basic Information" key="1">
        <a-form
          class="ant-advanced-search-form"
          :form="form"
          @submit="handleSearch"
          layout="inline"
          :colon="false"
        >
          <a-row :gutter="24">
            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item                                 
                label="Audit Type"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-select :size="size" v-model="formData.auditType" defaultValue="Annual Audit" @change="handleChange">
                  <a-select-option value="Annual Audit">Annual Audit</a-select-option>
                  <a-select-option value="Certify Audit">Certify Audit</a-select-option>
                  <a-select-option value="Quality Issue Audit" >Quality Issue Audit</a-select-option>
                  <a-select-option value="NPI Stage Audit">NPI Stage Audit</a-select-option>
                </a-select>
              </a-form-item> 
            </a-col>

            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Re-Audit"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-select :size="size" v-model="formData.reAudit" defaultValue="N" @change="handleChange">
                  <a-select-option value="N">N</a-select-option>
                  <a-select-option value="Y">Y</a-select-option>
                </a-select>
              </a-form-item> 
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Related No."
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input-search
                  :size="size"
                  v-model="formData.relatedRecordNo"
                  @search="onSearch"
                />
              </a-form-item> 
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
            
              <a-form-item 
                label="Commodity"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-select :size="size" v-model="formData.commodityName" defaultValue="Test1" >
              
                  <a-select-option
                    v-for="item in testData"
                    :key="item.key"
                    v-model="item.value"
                  >
                    {{item.value}}
                  </a-select-option>
                
                </a-select>
              </a-form-item> 
            </a-col>

            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Code"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input
                  :size="size"
                  v-model="formData.commodityCode"
                />
              
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Product"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-input :size="size" v-model="formData.product" />
              </a-form-item> 
            </a-col>
            
            
            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Vendor Name"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input-search
                  :size="size"
                  v-model="formData.vendorName"
                  @search="onSearch"
                />
              </a-form-item>
            </a-col>

            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Vendor Code"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-input
                  :size="size"
                  v-model="formData.vendorCode"
                />
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                :size="size"
                label="Vendor Site"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input
                  :size="size"
                  v-model="formData.vendorSite"
                />
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="JQE"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
              <a-select
                :size="size"
                showSearch
                placeholder="Select JQE"
                optionFilterProp="children"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                :filterOption="filterOption"
              >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="tom">Tom</a-select-option>
              </a-select>
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="SQE"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-select
                  :size="size"
                  showSearch
                  placeholder="Select SQE"
                  optionFilterProp="children"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                >
                  <a-select-option value="jack">Jack</a-select-option>
                  <a-select-option value="lucy">Lucy</a-select-option>
                  <a-select-option value="tom">Tom</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="SQE Manager"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input
                  :size="size"
                  v-model="formData.sqeManager"
                />
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Plan Date"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input
                  :size="size"
                  v-model="formData.planDate"
                />
              </a-form-item>
            </a-col>


            <a-col 
              :xs="{span:24}" 
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:8}"
            >
              <a-form-item 
                label="Create Date"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input
                  :size="size"
                  v-model="formData.createDate"
                />
              </a-form-item>
            </a-col>



          </a-row>
          
        </a-form>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2" key="2" :disabled='false'>
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3" key="3" disabled>
        <p>{{text}}</p>
      </a-collapse-panel>
    </a-collapse>


    
    <div class="search-result-list">
      Search Result List
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      labelCol:{span:8},
      size:"default",
      wrapperCol:{span:16},
      expand: false,
      form: this.$form.createForm(this),
      activeKey:['1'],
      formData : {
        relatedRecordNo : "A20190101001",
        reAudit:"Y",
        auditType:"Certify Audit",
        commodityName:"Test1",
        commodityCode:"commodityCode",
        product:"product",
        vendorName:"vendorName",
        vendorCode:"vendorCode",
        vendorSite:"vendorSite",
        jqeId:"jack",
        sqeId:"Lucy",
        sqeManager:"Zhang San",
        planDate:"2019-02-03",
        createDate:"2019-01-03"
      },
      testData:[
        {key:"Test1",value:"Test1"},
        {key:"Test2",value:"Test2"},
        {key:"Test3",value:"Test3"},
        {key:"Test4",value:"Test4"},
        {key:"Test5",value:"Test5"},
        {key:"Test6",value:"Test6"},
        {key:"Test7",value:"Test7"},
        {key:"Test8",value:"Test8"},
        {key:"Test9",value:"Test9"},
      ]
    };
  },
  computed: {
    count () {
      return this.expand ? 11 : 7;
    },
  },
  methods: {
    handleSearch  (e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log('error', error);
        console.log('Received values of form: ', values);
      });
    },

    handleReset () {
      this.form.resetFields();
    },

    toggle  () {
      this.expand = !this.expand;
    },
  },
};
</script>
<style>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>