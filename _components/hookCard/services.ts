import baseService from '@imagina/qcrud/_services/baseService'

export default {
  runHook(id = 0, params = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const requestParams = {...params}
      //Request
      baseService.show('apiRoutes.qwebhook.hooks', `run/${id}`,requestParams).then(response => {
        resolve(response)
      }).catch(error => reject(error))
    })
  }
}
