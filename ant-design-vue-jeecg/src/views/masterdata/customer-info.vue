<template>
  <page-view>
    <div slot="route-view">
      <a-card class="card" title="基础信息" :bordered="false">
        <customer-form ref="customerForm" :showSubmit="false" />
      </a-card>

      <footer-tool-bar>
        <a-button type="primary" @click="validate" :loading="loading">提交</a-button>
      </footer-tool-bar>
    </div>
  </page-view>
</template>

<script>
import pick from 'lodash.pick'
import CustomerForm from './modules/form/CustomerForm'
import FooterToolBar from '@/components/tools/FooterToolBar'
import PageView from '@comp/layouts/PageView'
import { getCustomer, createCustomer, updateCustomer } from '@/api/api'
export default {
  name: 'AdvancedForm',
  components: {
    PageView,
    FooterToolBar,
    CustomerForm
  },
  data() {
    return {
      loading: false,
      model: {}
    }
  },
  mounted() {
    this.initModel()
  },
  methods: {
    initModel() {
      let { id = undefined } = this.$route.query
      if (id) {
        getCustomer(id).then(res => {
          if (res.success) {
            this.model = {
              ...res.result
            }
            debugger
            this.$refs.customerForm.edit(this.model)
          } else {
            this.$message.warning(res.message)
          }
        })
      } else {
        this.$refs.customerForm.edit(this.$route.query)
      }
    },
    _submitForm(postData) {
      this.loading = true
      let promises
      if (postData.id) {
        promises = updateCustomer(postData)
      } else {
        promises = createCustomer(postData)
      }
      promises
        .then(res => {
          if (res.success) {
            this.$message.success(res.message)
          } else {
            this.$message.warning(res.message)
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    // 最终全页面提交
    validate() {
      this.$refs.customerForm.form.validateFields((err, values) => {
        console.info('customerForm', values)
        if (!err) {
          let postData = pick(
            values,
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
          this._submitForm(postData)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 24px;
}
</style>