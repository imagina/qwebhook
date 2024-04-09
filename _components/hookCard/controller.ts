import {reactive, toRefs, getCurrentInstance} from "vue";
import service from '@imagina/qwebhook/_components/hookCard/services'

export default function controller(props: any, emit: any) {
  const proxy = getCurrentInstance()!.proxy

  // Refs
  const refs = {
    // refKey: ref(defaultValue)
  }

  // States
  const state = reactive({
    // Key: Default Value
  })

  // Computed
  const computeds = {
  }

  // Methods
  const methods = {
    async runAction(hook) {
      try {
        await service.run(hook.id)
        emit('refresh')
      } catch (e) {
        const message = e?.message ?? proxy.$tr('isite.cms.message.errorRequest')
        proxy.$alert.error(message)
      }
    },
    checkIsEmpty(val) {
      if(Array.isArray(val)) return true
      return Object.keys(val).length === 0
    }
  }


  return {...refs, ...(toRefs(state)), ...computeds, ...methods}
}
