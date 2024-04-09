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
        entityName: config("main.qwebhook.entityNames.hook"),
        apiRoute: 'apiRoutes.qwebhook.hooks',
        permission: 'iwebhooks.hooks',
        create: {
          title: this.$tr('iwebhooks.cms.title.newHook'),
        },
        read: {
          showAs: 'grid',
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', align: 'left'},
            {name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'rigth'},
            {name: 'description', label: this.$tr('isite.cms.form.description'), field: 'description', align: 'rigth'},
            {name: 'endpoint', label: this.$tr('iwebhooks.cms.form.endpoint'), field: 'endpoint', align: 'left'},
            {name: 'httpMethod', label: this.$tr('iwebhooks.cms.form.httpMethod'), field: 'httpMethod', align: 'rigth'},
            {
              name: 'category',
              label: this.$tr('isite.cms.form.category'),
              field: 'category',
              align: 'rigth',
              format: val => val?.title || '-',
            },
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
          requestParams: {include: 'category'},
          grid: {
            component: () => import('@imagina/qwebhook/_components/hookCard/index.vue'),
          }
        },
        update: {
          title: this.$tr('iwebhooks.cms.title.updateHook'),
          requestParams: {include: 'category'}
        },
        delete: true,
        formLeft: {
          id: {value: ''},
          title: {
            value: '',
            type: 'input',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`,
            },
          },
          description: {
            name: "description",
            value: '',
            type: 'html',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.description')}*`
            }
          },
          actionLabel: {
            value: '',
            type: 'input',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('iwebhooks.cms.form.actionLabel')}*`,
            },
          },
          callEveryMinutes: {
            value: null,
            type: 'input',
            props: {
              label: this.$tr('iwebhooks.cms.form.callEveryMinutes'),
              type: 'number'
            },
          },
        },
        formRight: {
          endpoint: {
            value: '',
            type: 'input',
            required: true,
            props: {
              label: `${this.$tr('iwebhooks.cms.form.endpoint')}*`,
            },
          },
          categoryId: {
            type: 'crud',
            props: {
              crudType: 'select',
              crudData: import('@imagina/qwebhook/_crud/categories'),
              crudProps: {
                label: `${this.$tr('isite.cms.form.category')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              },
              config: {
                options: {
                  label: 'title', value: 'id'
                }
              }
            },
          },
          httpMethod: {
            value: null,
            type: 'select',
            required: true,
            props: {
              label: `${this.$tr('iwebhooks.cms.form.httpMethod')}*`
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qsite.configs',
              select: {label: 'label', id: 'id'},
              requestParams: {filter: {configName: 'Iwebhooks.config.httpMethodsOptions'}}
            }
          },
          body: {
            type: 'json',
            props: {
              label: this.$tr('iwebhooks.cms.form.body'),
            },
          },
          headers: {
            type: 'json',
            props: {
              label: this.$tr('iwebhooks.cms.form.headers'),
            },
          }
        }
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  },
}
</script>