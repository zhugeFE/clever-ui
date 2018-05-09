import {util} from "../../src/utils"
import eventUtil from "./event"

let messageCallback = {}

let jsFiddle = {
  addMessageListener ({slug, callback}) {
    if (!util.isFunction(callback)) {
      return false
    }
    if (util.isArray(messageCallback[slug])) {
      messageCallback[slug].push(callback)
    } else {
      messageCallback[slug] = [callback]
    }
    return true
  },
  removeMessageListener (slug) {
    if (messageCallback[slug]) {
      delete messageCallback[slug]
    }
  }
}

eventUtil.addMessageListener((event) => {
  let eventName = event.data[0]
  let data = event.data[1] || {}
  if (eventName === 'embed' || eventName === 'resultsFrame') {
    let height = data.height
    let slug = data.slug
    if (messageCallback[slug]) {
      messageCallback[slug].forEach((callback) => {
        callback(height)
      })
    }
  }
})

export default jsFiddle
