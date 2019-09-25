<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="Basic Information" key="1">
        <a-form
          class="ant-advanced-search-form"
          :form="form"
          layout="inline"
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
                :colon="colon"
              >
                <a-select :size="size" v-model="formData.auditType" defaultValue="Annual Audit" >
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
                :colon="colon"
                label="Re-Audit"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-select :size="size" v-model="formData.reAudit" defaultValue="N" >
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
                :colon="colon"
                label="Related No."
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input-search
                  :size="size"
                  v-model="formData.relatedRecordNo"
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
                :colon="colon"
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
                :colon="colon"
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
                :colon="colon"
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
                :colon="colon"
                label="Vendor Name"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-input-search
                  :size="size"
                  v-model="formData.vendorName"
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
                :colon="colon"
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
                :colon="colon"
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
                :colon="colon"
                label="JQE"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
              <a-select
                :size="size"
                showSearch
                placeholder="Select JQE"
                optionFilterProp="children"
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
                :colon="colon"
                label="SQE"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-select
                  :size="size"
                  showSearch
                  placeholder="Select SQE"
                  optionFilterProp="children"
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
                :colon="colon"
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
                :colon="colon"
                label="Plan Date"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-date-picker 
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
                :colon="colon"
                label="Create Date"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                
              >
                <a-date-picker 
                  :size="size" 
                  v-model="formData.createDate" 
                />
                
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        

      </a-tab-pane>
      <a-tab-pane tab="Audit Result" key="2" forceRender>
        

        
            <div style="margin-bottom:8px;margin-right:8px;text-align:right;">
              <a-button type="primary" icon="plus" size="small" @click="showModal"></a-button>
              <a-button icon="delete" size="small"></a-button>
            </div>


            <a-table  
              size="small"
              :rowSelection="{selectedRowKeys: ['1']}"
              :columns="columns" 
              :dataSource="data" 
            >
              <template slot="operation" slot-scope="text, record">
                <a-popconfirm
                  v-if="data.length"
                  title="Sure to delete?"
                  @confirm="() => onDelete(record)">
                  <a href="javascript:;">Reject</a>
                </a-popconfirm>
                <a-popconfirm
                  v-if="data.length"
                  title="Sure to delete?"
                  @confirm="() => onDelete(record)">
                  <a href="javascript:;">Close</a>
                </a-popconfirm>
              </template>
              <template slot="name" slot-scope="text">
                <a href="javascript:;">{{text}}</a>
              </template>
            </a-table>
          
        <a-form
          class="ant-advanced-search-form"
          :form="form"
          layout="inline"
          :colon="colon"
        >
          <a-row :gutter="24">
            <a-col 
              span="24"
            >
              <a-form-item
                :colon="colon"                      
                label="Conclusion"
                :label-col="{span:4}"
                :wrapper-col="{span:20}"
              >
                <a-textarea v-model="formData.conclusion" placeholder="Conclusion" :rows="4"/>
              </a-form-item> 
            </a-col>
          </a-row>
          <a-row :gutter="24">
            <a-col 
              span="24"
            >
              <a-form-item         
                :colon="colon"                        
                label="Comments"
                :label-col="{span:4}"
                :wrapper-col="{span:20}"
              >
                <a-textarea v-model="formData.comments" placeholder="Comments" :rows="4"/>
              </a-form-item> 
            </a-col>
          </a-row>
        </a-form>

      </a-tab-pane>
     

      <div slot="tabBarExtraContent">
        <a-button type="primary" icon="save" size="small" >Save</a-button>
        <a-button icon="undo" size="small">Reset</a-button>
      </div>


    </a-tabs>






    <a-modal
      title="Finding"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :width="900"
      :okButtonProps="{
        props:{
          size:'small',
          icon:'save'
        }
      }"
      :cancelButtonProps="{
        props:{
          size:'small',
          icon:'close'
        }
      }"
      okText="Save"
    >
      <Finding></Finding>
    </a-modal>


  </div>
</template>
<script>

import moment from 'moment';
import Finding from '@/components/formtest/Finding'
const columns = [{
  title: 'Finding',  
  dataIndex: 'finding'
}, {
  title: 'Target Date',
  width:100,
  dataIndex: 'targetDate',
}, {
  title: 'Status',
  width:100,
  dataIndex: 'status',
}, {
  title: 'Commonts',
  dataIndex: 'commonts',
}, {
  title:'Operation',
  dataIndex: 'key',
  scopedSlots: { customRender: 'operation' },
}];


const data = [{
  key: '1',
  finding: 'xxxxxx',
  targetDate: '2019-01-01',
  status: 'Close',
}, {
  key: '2',
  dataIfindingndex: 'xxxxxx',
  targetDate: '2019-01-01',
  
  status: 'Close',
}, {
  key: '3',
  finding: 'xxxxxx',
  targetDate: '2019-01-01',
  status: 'Reject',
}];


let dateFormat = 'YYYY-MM-DD';
export default {
  components : {Finding},
  mounted(){
    //alert("绑定")
  },
  data () {
    return {
      //modal
      visible : false,
      //表格相关
      data,
      columns,
      //布局相关
      labelCol:{span:8},
      size:"default",
      wrapperCol:{span:16},
      expand: false,
      activeKey:['1'],


      //form      
      form: this.$form.createForm(this),
      colon:false,
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
        planDate:moment("2019-02-03", dateFormat),
        createDate:moment("2019-01-03", dateFormat),
        conclusion:"Conclusion",
        comments:"Comments"
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
    moment,
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
    onDelete (record) {
      console.log(record);
    },
    showModal(){
      this.visible = true;
    },
    handleOk(){
      this.visible = false;
    },
    handleCancel(){
      this.visible = false;
    }
  },
};
</script>
<style>
/*.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}*/

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