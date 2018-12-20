<script type="text/jsx">
  import ZgOption from './option.vue'
  import ZgCheckbox from '../checkbox/checkbox.vue'
  import ZgOptGroup from './optGroup.vue'
  import {util} from '../../utils'
  import ZgScrollContainer from '../scroll/scrollContainer'
  import ZgSelectorHandle from './handle'
  import ZgLoading from '../loading/loading'
  export default {
    components: {
      ZgLoading,
      ZgScrollContainer,
      ZgOptGroup,
      ZgCheckbox,
      ZgOption,
      ZgSelectorHandle},
    name: 'zgSelector',
    props: {
      /**
       * @description 选项唯一标识字段
       */
      keyField: {
        type: String,
        required: true
      },
      /**
       * @description 用于展示的子集字段名称
       * @tip 用于分组展示
       */
      childrenField: {
        type: String
      },
      /**
       * @description 隐藏分组的head, 参数应为组的id map
       * @tip 不隐藏组内其它项，如需要隐藏整个组，需要在外部数据源上做整体处理
       */
      hiddenGroupMap: {
        type: Object,
        default () {
          return {}
        }
      },
      /**
       * @description 数据源
       */
      store: {
        type: Array,
        required: true
      },
      /**
       * @description 禁用的选项列表：key值列表
       * @default []
       */
      disableOptions: {
        type: Array,
        default () {
          return []
        }
      },
      /**
       * @description 单页展示条数,单页展示条数将影响组件性能，建议不要太大值
       */
      pageSize: {
        type: Number,
        default: 20
      },
      /**
       * @description 主题，目前支持的主题有：normal、noborder、tag
       */
      theme: {
        type: String,
        default: 'normal',
        validator (value) {
          const themes = ['normal', 'noborder', 'tag']
          return themes.indexOf(value) > -1
        }
      },
      /**
       * @description 通过v-model的形式进行数据绑定，不建议直接传递value属性
       * @tip 如果multiple为true，则value需要为对象数组，否则为Object，Object需是Store的子项，或者至少拥有有效的keyField字段
       */
      value: {
        type: [Array, Object]
      },
      /**
       * @description 下拉框宽度。如果theme为noborder，则该值为最大宽度，组件宽度在范围内自适应。theme为tag，则该值为最小宽度
       */
      width: {
        type: Number,
        default: 150
      },
      /**
       * @description 最大宽度
       */
      maxWidth: {
        type: Number,
        default: 250
      },
      /**
       * @description 用于展示的字段名称
       */
      labelField: {
        type: String,
        required: true
      },
      /**
       * @description 别名字段，设置别名后，优先展示别名
       */
      aliasField: {
        type: String
      },
      /**
       * @description 图标
       */
      iconField: {
        type: String,
        default: ''
      },
      /**
       * @description 默认提示文本
       */
      placeholder: {
        type: String,
        default: '请选择'
      },
      /**
       * @description 筛选无匹配数据的提示文本
       * @tip filterOption开启后生效
       */
      noMatchText: {
        type: String,
        default: '无匹配数据'
      },
      /**
       * @description 无数据的提示文本
       */
      noDataText: {
        type: String,
        default: '暂无数据'
      },
      /**
       * @description 可清空选中结果
       * @tip multiple模式下有效
       */
      clearAble: {
        type: Boolean,
        default: true
      },
      /**
       * @description 开启选项筛选过滤
       */
      filterOption: {
        type: Boolean,
        default: false
      },
      /**
       * @description 搜索回调处理
       * @tip 返回值需要是Promise实例
       */
      search: {
        type: Function
      },
      /**
       * @description 多选模式
       */
      multiple: {
        type: Boolean,
        default: false
      },
      /**
       * @description 下拉框尺寸
       */
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['small', 'medium', 'big', 'normal'].includes(value)
        }
      },
      /**
       * @description 禁用下拉框
       */
      disable: {
        type: Boolean,
        default: false
      },
      splitStr: {
        type: Boolean,
        default: true
      },
      splitStrFormat: {
        type: Object,
        default () {
          return {
            maxLength: 12,
            beginLength: 10,
            endLength: 0,
            replaceStr: '...'
          }
        }
      }
    },
    data () {
      let data = {
        showOptions: false,
        checkedMap: {}, // 选项选中状态map集合，为了便捷option的状态显示，选中的集合与chosenList相同
        chosenList: [], // 选中的选项集合
        innerStore: this.store, // prop中的store，转为私有属性，因为tag模式时，可能需要向store中增加或删除元素
        renderStore: this.store.slice(0, this.pageSize),
        pageNum: 0,
        totalCount: 0, // 可展示的选项总数，有筛选条件时，则为符合条件的选项总数
        filter: '', // 筛选条件
        filterTimeout: null,
        noMatch: false,
        loading: false
      }
      // 绑定默认值
      if (this.value) {
        if (!this.multiple) {
          this.store.forEach(option => {
            if (this.childrenField) {
              option[this.childrenField].forEach(child => {
                if (child[this.keyField] === this.value[this.keyField]) {
                  data.checkedMap[this.value[this.keyField]] = true
                  data.chosenList.push(child)
                }
              })
            } else {
              if (option[this.keyField] === this.value[this.keyField]) {
                data.checkedMap[this.value[this.keyField]] = true
                data.chosenList.push(option)
              }
            }
          })
        } else {
          this.store.forEach(option => {
            if (this.childrenField) {
              option[this.childrenField].forEach(child => {
                this.value.forEach(defaultOption => {
                  if (child[this.keyField] === defaultOption[this.keyField]) {
                    data.checkedMap[child[this.keyField]] = true
                    data.chosenList.push(child)
                  }
                })
              })
            } else {
              this.value.forEach(defaultOption => {
                if (option[this.keyField] === defaultOption[this.keyField]) {
                  data.checkedMap[option[this.keyField]] = true
                  data.chosenList.push(option)
                }
              })
            }
          })
        }
      }
      return data
    },
    computed: {
      noData () {
        return this.innerStore.length === 0
      },
      filterClass () {
        let clazz = ['zg-select-search']
        if (this.filter) {
          clazz.push('zg-active')
        }
        return clazz.join(' ')
      },
      selectStyle () {
        let style = {}
        if (this.theme === 'tag') {
          style['vertical-align'] = 'top'
        }
        return style
      },
      /**
       * 用于处理数据分页
       */
      showMap () {
        let map = {
          count: 0
        }
        let maxCount = (this.pageNum + 1) * this.pageSize
        let totalCount = 0
        let filter = this.filter
        let renderStore = []
        this.innerStore.forEach(item => {
          // 有分组
          if (this.childrenField) {
            let haveChildren = false
            item[this.childrenField].forEach((child, i) => {
              let flag = map.count < maxCount
              if (flag &&
                (!filter || this.filterData(child))
              ) {
                map[child[this.keyField]] = flag
                map.count++
                haveChildren = true
              }
              if (!filter || this.filterData(child)) totalCount++
            })
            if (haveChildren) renderStore.push(item)
            map[item[this.keyField]] = haveChildren
          } else { // 没分组
            let flag = map.count < maxCount
            if (flag && ((!filter || this.filterData(item)))) {
              map[item[this.keyField]] = flag
              map.count++
              renderStore.push(item)
            }
            if (!filter || this.filterData(item)) totalCount++
          }
        })
        this.renderStore = renderStore
        this.totalCount = totalCount
        this.noMatch = filter && totalCount === 0
        return map
      }
    },
    watch: {
      store (store) {
        this.innerStore = store
      },
      /**
       * 保持对v-model的双向数据绑定
       * @param value
       */
      value (value) {
        if (value === this.chosenList) return
        this.chosenList = []
        this.$set(this, 'checkedMap', {})
        if (!value) return
        if (!this.multiple) {
          this.innerStore.forEach(option => {
            if (this.childrenField) {
              option[this.childrenField].forEach(child => {
                if (child[this.keyField] === value[this.keyField]) {
                  this.checkedMap[value[this.keyField]] = true
                  if (!this.chosenList.length)this.chosenList.push(child)
                  this.$emit('input', this.chosenList[0])
                }
              })
            } else {
              if (option[this.keyField] === value[this.keyField]) {
                this.checkedMap[value[this.keyField]] = true
                if (!this.chosenList.length)this.chosenList.push(option)
                this.$emit('input', this.chosenList[0])
              }
            }
          })
          if (this.noData) this.$emit('input', this.chosenList[0])
        } else {
          this.innerStore.forEach(option => {
            if (this.childrenField) {
              option[this.childrenField].forEach(child => {
                value.forEach(defaultOption => {
                  if (child[this.keyField] === defaultOption[this.keyField]) {
                    this.checkedMap[child[this.keyField]] = true
                    this.chosenList.push(child)
                  }
                })
              })
            } else {
              value.forEach(defaultOption => {
                if (option[this.keyField] === defaultOption[this.keyField]) {
                  this.checkedMap[option[this.keyField]] = true
                  this.chosenList.push(option)
                }
              })
            }
          })
          this.$emit('input', this.chosenList)
        }
      }
    },
    mounted () {
      if (this.multiple) {
        this.$emit('input', this.chosenList)
      } else {
        this.$emit('input', this.chosenList[0])
      }
    },
    updated () {
      const dropPanel = this.$refs.dropPanel
      if (!dropPanel) return
      const panelRect = dropPanel.getBoundingClientRect()
      const bottomHeight = window.innerHeight - panelRect.top - 7
      dropPanel.style.maxHeight = Math.min(325, bottomHeight) + 'px'
      if ((panelRect.width + panelRect.left) > window.innerWidth) {
        dropPanel.style.right = '0px'
      }
    },
    methods: {
      filterData (data) {
        let filterReg = util.getRegExp(this.filter.toLowerCase())
        let flag = true
        flag = filterReg.test((data[this.aliasField] || data[this.labelField] || '').toLowerCase())
        return flag
      },
      onClickOutside () {
        this.showOptions = false
      },
      onClickHandle () {
        if (this.disable) return
        this.showOptions = !this.showOptions
        this.pageNum = 0
        if (this.showOptions && this.filterOption && this.theme !== 'tag') {
          this.$nextTick(() => {
            this.$refs.optionFilter.focus()
          })
        }
      },
      onClickOption (checked, data) {
        if (!this.multiple) {
          this.chosenList = []
          this.innerStore.forEach(option => {
            if (this.childrenField) {
              option[this.childrenField].forEach(children => {
                this.$set(this.checkedMap, children[this.keyField], children[this.keyField] === data[this.keyField])
                if (children[this.keyField] === data[this.keyField] && !this.chosenList.length) this.chosenList.push(children)
              })
            } else {
              this.$set(this.checkedMap, option[this.keyField], option[this.keyField] === data[this.keyField])
              if (option[this.keyField] === data[this.keyField] && !this.chosenList.length) this.chosenList.push(option)
            }
          })
          this.showOptions = false
          this.$emit('input', this.chosenList[0])
        } else {
          this.$set(this.checkedMap, data[this.keyField], checked)
          if (checked) {
            this.chosenList.push(data)
          } else {
            this.chosenList.forEach((option, i) => {
              if (option === data) {
                this.chosenList.splice(i, 1)
              }
            })
          }
          this.$emit('input', this.chosenList)
        }
        this.$emit('change', this.chosenList, this)
      },
      onBottom () {
        let count = (this.pageNum + 1) * this.pageSize
        if (this.totalCount > count) {
          this.pageNum++
        }
      },
      onFilter (filterValue) {
        this.showOptions = true
        if (this.filterTimeout) clearTimeout(this.filterTimeout)
        this.filterTimeout = setTimeout(() => {
          if (this.search) {
            this.loading = true
            this.search(filterValue).finally(() => {
              this.loading = false
            })
          } else {
            this.$refs.options.scrollTop = 0
            this.pageNum = 0
            this.filter = filterValue
          }
        }, 100)
      },
      clean () {
        this.chosenList = []
        this.$set(this, 'checkedMap', {})
        this.$emit('input', this.chosenList)
        this.$emit('change', this.chosenList, this)
      },
      syncChosen (list) {
        if (!this.multiple) {
          this.$emit('input', list[0])
        } else {
          this.$emit('input', list)
        }
      },
      onEnter (option) {
        if (option) { // 输入搜索内容后回车
          let exit = false
          this.innerStore.forEach(item => { // 此时exit还为false
            if (item[this.labelField] === option[this.labelField] ||
              (this.aliasField && item[this.aliasField] === option[this.aliasField])) {
              exit = true
              option = item
            }
          })
          if (!exit) this.innerStore = [option].concat(this.innerStore) // 如果store列表中不存在该值，则插入该值
          if (!this.checkedMap[option[this.keyField]]) this.onClickOption(true, option)
        } else { // 选项上下移动时回车
          // todo 选中或者取消选中当前hover的选项
        }
      },
      onDelete (option) {
        if (option.temp) { // 临时选项，从store中真实删除
          this.innerStore.forEach((item, i) => {
            if (item[this.keyField] === option[this.keyField]) {
              this.innerStore.splice(i, 1)
            }
          })
        }
        this.onClickOption(false, option)
      }
    },
    render (h) {
      return (
        <div class="zg-select" style={this.selectStyle} v-click-outside={this.onClickOutside}>
          <zg-selector-handle value={this.chosenList}
                              theme={this.theme}
                              placeholder={this.placeholder}
                              labelField={this.labelField}
                              aliasField={this.aliasField}
                              splitStr={this.splitStr}
                              splitStrFormat={this.splitStrFormat}
                              width={this.width}
                              maxWidth={this.maxWidth}
                              active={this.showOptions}
                              keyField={this.keyField}
                              onInput={this.syncChosen}
                              onSearch={this.onFilter}
                              onEnter={this.onEnter}
                              onDelete={this.onDelete}
                              onClick={this.onClickHandle}>
            {this.$slots.default}
          </zg-selector-handle>

          <transition enter-active-class="animated slideInDown">
            <ul v-show={this.showOptions} class="zg-drop-panel" ref="dropPanel">
              <div class="zg-fixed" v-show={this.theme !== 'tag'}>
                {(() => {
                  if (this.filterOption) {
                    return (
                      <zg-input icon="zgicon-search"
                                width="100%"
                                class={this.filterClass}
                                clear-able
                                ref="optionFilter" onInput={this.onFilter}></zg-input>
                    )
                  }
                })()}
                <li v-show={this.multiple && this.chosenList.length && this.clearAble} class="zg-clear">
                  <a href="javascript:void(0)" onClick={this.clean}>清空</a>
                </li>
              </div>

              <zg-scroll-container class="zg-content" ref="options" onBottom={this.onBottom}>
                <zg-loading v-show={this.loading} size="small" tip="loading"></zg-loading>
                {this.renderStore.map(option => {
                  if (this.childrenField) {
                    return (
                      <zg-opt-group key={option[this.keyField]}
                                    store={option[this.childrenField]}
                                    showMap={this.showMap}
                                    groupData={option}
                                    checkedMap={this.checkedMap}
                                    disableOptions={this.disableOptions}
                                    keyField={this.keyField}
                                    labelField={this.labelField}
                                    aliasField={this.aliasField}
                                    iconField={this.iconField}
                                    multiple={this.multiple}
                                    theme={this.theme}
                                    hideHead={this.hiddenGroupMap[option[this.keyField]]}
                                    onClick={this.onClickOption}
                                    scopedSlots={{
                                      default: this.$scopedSlots.default,
                                      header: this.$scopedSlots.header
                                    }}
                      ></zg-opt-group>
                    )
                  } else {
                    return (
                      <zg-option key={option[this.keyField]}
                                 checked={this.checkedMap[option[this.keyField]]}
                                 disable={this.disableOptions.indexOf(option[this.keyField]) > -1}
                                 data={option}
                                 labelField={this.labelField}
                                 aliasField={this.aliasField}
                                 iconField={this.iconField}
                                 multiple={this.multiple}
                                 theme={this.theme}
                                 onClick={this.onClickOption}
                                 scopedSlots={{default: this.$scopedSlots.default}}></zg-option>
                    )
                  }
                })}
                <li v-show={this.noData} class="zg-option zg-error">
                  {this.noDataText}
                </li>
                <li v-show={!this.noData && this.noMatch} class="zg-option zg-error">
                  {this.noMatchText}
                </li>
              </zg-scroll-container>
            </ul>
          </transition>
          <div style="display: none">{this.showMap.count}</div>
        </div>
      )
    }
  }
</script>

<style lang="sass">
  @import "styles/select"
</style>
