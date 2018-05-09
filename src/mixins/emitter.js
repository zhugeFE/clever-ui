
const getChildren = ({parent, childName, deep = false}, result) => {
  let children = result || []
  if (parent.$children) {
    parent.$children.forEach(item => {
      if (item.$options.name === childName) {
        children.push(item)
      }
      if (!deep) return
      getChildren(item, childName, children)
    })
  }
  return children
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent[eventName].apply(parent, params)
      }
    },
    children (componentName, deep = false) {
      return getChildren({
        parent: this,
        childName: componentName,
        deep: deep
      })
    },
    parent (parentName) {
      let parent = this.$parent
      if (parent.$options.name === parentName) {
        return parent
      }
      while (parent.$options.name !== parentName) {
        parent = parent.$parent
        if (parent.$options.name === parentName) {
          return parent
        }
      }
    }
  }
}
