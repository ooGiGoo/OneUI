<template>
  <a-form :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="客户编号">
          <a-input
            placeholder="请输入客户编号"
            v-decorator="[
              'customerCode',
              {rules: [{ required: true, message: '请输入客户编号', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="客户名称">
          <a-input
            placeholder="请输入客户名称"
            v-decorator="[
              'customerName',
              {rules: [{ required: true, message: '请输入客户名称', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="客户分组">
          <j-dict-select-tag
            v-decorator="[ 'customerGroupCode', {rules: [{ required: true, message: '请选择管理员'}]} ]"
            :triggerChange="true"
            placeholder="请选择客户分组"
            dictCode="customer_group"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="联络人">
          <a-input
            placeholder="请输入联络人"
            v-decorator="[
              'contactPerson',
              {rules: [{ required: true, message: '请输入联络人', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="联系电话">
          <a-input
            placeholder="请输入联系电话"
            v-decorator="[
              'contactPhone',
              {rules: [{ required: true, message: '请输入联系电话', whitespace: true},ruleWith('phone')]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="联系人身份证号码">
          <a-input
            placeholder="请输入联系人身份证号码"
            v-decorator="[
              'contactPersonId',
              {rules: [{ required: true, message: '请输入联系人身份证号码', whitespace: true},ruleWith('idCard')]}
            ]"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="纳税人资格">
          <a-input
            placeholder="请输入纳税人资格"
            v-decorator="[
              'taxSubject',
              {rules: [{ required: true, message: '请输入纳税人资格', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="营业执照号码">
          <a-input
            placeholder="请输入营业执照号码"
            v-decorator="[
              'businessLicense',
              {rules: [{ required: true, message: '请输入营业执照号码', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="税务登记号">
          <a-input
            placeholder="请输入税务登记号"
            v-decorator="[
              'taxCode',
              {rules: [{ required: true, message: '请输入税务登记号', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="8" :md="8" :sm="24">
        <a-form-item label="社会信用代码">
          <a-input
            placeholder="请输入社会信用代码"
            v-decorator="[
              'socialCreditCode',
              {rules: [{ required: true, message: '请输入社会信用代码', whitespace: true}]}
            ]"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import pick from 'lodash.pick'
import ValidationMixin from '@/mixins/ValidationMixin'
export default {
  name: 'CustomerForm',
  mixins: [ValidationMixin],
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    add() {
      this.edit({})
    },
    edit(record = {}) {
      this.model = {
        ...record
      }
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            record,
            'id',
            'businessLicense',
            'contactPerson',
            'contactPersonId',
            'contactPhone',
            'createTime',
            'customerCode',
            'customerGroupCode',
            'customerName',
            'socialCreditCode',
            'taxCode',
            'taxSubject'
          )
        )
      })
    },
    validate(rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback('需要以 user- 开头')
      }
      callback()
    }
  }
}
</script>

<style scoped>
</style>