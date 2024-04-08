<template></template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid()
    }
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config("main.qwebhook.entityNames.log"),
        apiRoute: 'apiRoutes.qwebhook.logs',
        permission: 'iwebhooks.logs',
        create: false,
        read: {
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
            {
              name: 'hook',
              label: this.$tr('iwebhooks.cms.title.hook'),
              field: 'hook',
              align: 'left',
              format: val => val ? val.title : '-'
            },
            {name: 'httpStatus', label: this.$tr('iwebhooks.cms.form.httpStatus'), field: 'httpStatus', align: 'left'},
            {name: 'response', label: this.$tr('iwebhooks.cms.form.response'), field: 'response', align: 'rigth'},
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {
              name: 'updated_at', label: this.$tr('isite.cms.form.updatedAt'), field: 'updatedAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {include: 'hook'},
        },
        update: false,
        delete: false
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  },
}
</script>
