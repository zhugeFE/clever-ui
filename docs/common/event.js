import {util} from "../../src/utils"
let callbacks = {
  message: []
}
let eventListener = {
  onMessage (event) {
    callbacks.message.forEach((item) => {
      if (util.isFunction(item)) {
        item(event)
      }
    })
  }
}

let event = {
  addMessageListener (callback) {
    if (util.isFunction(callback)) {
      callbacks.message.push(callback)
    }
  },
  removeMessageListener (callback) {
    if (util.isFunction(callback)) {
      callbacks.message.forEach((item, index) => {
        if (itme === callback) {
          callbacks.message.splice(index)
          return
        }
      })
    }
  }
}

window.addEventListener("message", eventListener.onMessage, false)

export default event
