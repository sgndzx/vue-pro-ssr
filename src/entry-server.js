import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      
      resolve({app, store: store.state.$precept})
    }, reject)
  })
}