<script type="text/jsx">
  import COption from './option.vue'
  import CCheckbox from '../checkbox/checkbox.vue'
  import COptGroup from './optGroup.vue'
  import {util} from '../../utils'
  import CScrollContainer from '../scroll/scrollContainer'
  import CSelectorHandle from './handle'
  import CLoading from '../loading/loading'
  export default {
    components: {
      CLoading,
      CScrollContainer,
      COptGroup,
      CCheckbox,
      COption,
      CSelectorHandle},
    name: 'cSelector',
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
       * @description 分组字段，用于分组名称筛选，不传则默认取labelField
       */
      groupField: {
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
       * @description 开启分组筛选过滤
       */
      filterGroup: {
        type: Boolean,
        default() {
          return true
        }
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
      },
      /**
       * @description 下拉框展开方向
       */
      expandArrow: {
        type: String,
        default: 'down',
        validator (arrow) {
          return ['down', 'up'].includes(arrow)
        }
      },
      /**
       * @description 下拉框滚动到底部执行此函数,当请求时间超过500毫秒会出现loading
       * @tip 适用下拉框数据远程加载,返回值需要是Promise实例
       */
      onBottomScroll :{
        type: Function
      },
      /**
       * @description 下拉框打开事件
       */
      onShow: {
        type: Function,
        default: () => {
          return
        }
      },
      /**
       * @description 下拉框关闭事件
       */
      onClose: {
        type: Function,
        default: () => {
          return
        }
      },
      /**
       * @description 控制下拉框内loading显示 组件内部有data控制loading，当内部loading无法满足需求时可以控制showLoading
       */
      showLoading: {
        type: Boolean,
        default: false
      },
      /**
       * @description 始终展开弹窗
       */
      alwaysExpand: {
        type: Boolean,
        default: false
      },
      useChosenAll: {
        type: Boolean,
        default: false
      }
    },
    data () {
      let data = {
        showOptions: this.alwaysExpand,
        checkedMap: {}, // 选项选中状态map集合，为了便捷option的状态显示，选中的集合与chosenList相同
        chosenList: [], // 选中的选项集合
        innerStore: this.store, // prop中的store，转为私有属性，因为tag模式时，可能需要向store中增加或删除元素
        renderStore: this.store.slice(0, this.pageSize),
        pageNum: 0,
        totalCount: 0, // 可展示的选项总数，有筛选条件时，则为符合条件的选项总数
        filter: '', // 筛选条件
        filterTimeout: null,
        noMatch: false,
        loading: false,
        finallyTimeout: null,
        scrollTime: 0,
        scrollLoadingTimer: null,
        chosenAllState: false
      }
      // 绑定默认值
      if (this.value) {
        this.store.forEach(option => {
          this.updateData(option, {
            data: data
          })
        })
      }
      return data
    },
    computed: {
      showChosenControl() {
        return (this.showChosenAllBtn || this.showClearAbleBtn) && this.store.length !== 0
      },
      showClearAbleBtn() {
        return this.multiple && this.clearAble && this.chosenList.length !== 0
      },
      showChosenAllBtn() {
        return this.multiple && this.useChosenAll
      },
      noData () {
        return this.innerStore.length === 0
      },
      showNoMatch () {
        return (!this.noData && this.noMatch) ||
          (this.theme === 'tag' &&
            this.innerStore.length === this.chosenList.length && !this.noData)
      },
      filterClass () {
        let clazz = ['c-select-search']
        if (this.filter) {
          clazz.push('c-active')
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
                (!filter || this.filterData(child) || (this.filterGroupData(item) && this.filterGroup))
              ) {
                map[child[this.keyField]] = flag
                map.count++
                haveChildren = true
              }
              if (!filter || this.filterData(child) || (this.filterGroupData(item) && this.filterGroup)) totalCount++
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
        let firstOption = null
        if (this.innerStore.length) {
          if (this.childrenField) {
            firstOption = this.innerStore[0][this.childrenField][0]
          } else {
            firstOption = this.innerStore[0]
          }
        }
        if (firstOption) {
          this.chosenList = [firstOption]
          this.$set(this, 'checkedMap', {
            [firstOption[this.keyField]]: true
          })
        } else {
          this.chosenList = []
          this.$set(this, 'checkedMap', {})
        }
        
      },
      /**
       * 保持对v-model的双向数据绑定
       * @param value
       */
      value (value) {
        if (value === this.chosenList) return
        this.chosenList = []
        this.$set(this, 'checkedMap', {})
        if (!value || this.noData) return
        this.innerStore.forEach(option => {
          this.updateData(option)
        })
        if (!this.multiple) { // 单选
          this.$emit('input', this.chosenList[0])
        } else { // 多选
          this.$emit('input', this.chosenList)
        }
      },
      showOptions (state) {
        this.filter = ''
        if (this.$refs.optionFilter) {
          this.$refs.optionFilter.inputValue = ''
        }
        if (this.$refs.options) {
          this.$refs.options.$el.scrollTop = 0
        }
        if (state) {
          this.onShow()
        } else {
          this.onClose()
        }
      }
    },
    mounted () {
      if (this.multiple) {
        if (this.showChosenAllBtn && this.chosenList.length === this.store.length) {
          this.chosenAllState = true
        }
        this.$emit('input', this.chosenList)
      } else {
        this.$emit('input', this.chosenList[0])
      }
    },
    /**
     * @description 处理选项框左右及上下位置布局 todo 位置计算优化
     */
    updated () {
      if (this._isBeingDestroyed || this._isDestroyed) return
      const dropPanel = this.$refs.dropPanel
      const dropHandle = this.$refs.handle
      if (!dropPanel || !dropHandle) return
      if (this.expandArrow === 'down') {
        const panelRect = dropPanel.getBoundingClientRect()
        const handleRect = dropHandle.$el.getBoundingClientRect()
        const bottomHeight = window.innerHeight - panelRect.top - 7
        if ((panelRect.width + panelRect.left) > window.innerWidth) {
          dropPanel.style.right = 0
        }
        dropPanel.style.top = handleRect.height + 5 + 'px'
        dropPanel.style.bottom = 'auto'
      } else {
        dropPanel.style.bottom = '38px'
        dropPanel.style.top = 'auto'
      }
    },
    methods: {
      updateData (option, params = {}) {
        if (!option || !this.value || !this.keyField) return
        let value = params.value || this.value
        let useChildren = params.useChildren || true
        let data = params.data || this
        if (useChildren && this.childrenField && util.isArray(option[this.childrenField])) {
          option[this.childrenField].forEach(item => {
            this.updateData(item, {
              value,
              useChildren: false,
              data
            })
          })
        } else {
          let optionKey = option[this.keyField]
          if (this.multiple && util.isArray(value)) {
            value.forEach(obj => {
               this.updateData(option, {
                  value: obj,
                  useChildren: false,
                  data
                })
            })
          } else if (optionKey === value[this.keyField] && !data.checkedMap[optionKey]) {
            data.checkedMap[optionKey] = true
            data.chosenList.push(option)
          }
        }
      },
      filterData (data) {
        let filterReg = util.getRegExp(this.filter.toLowerCase())
        let flag = true
        flag = filterReg.test((data[this.aliasField] || data[this.labelField] || '').toLowerCase())
        return flag
      },
      filterGroupData (groupData) {
        let filterReg = util.getRegExp(this.filter.toLowerCase())
        let flag = true
        if (this.groupField) {
          flag = filterReg.test((groupData[this.groupField] || '').toLowerCase())
        } else {
          flag = filterReg.test((groupData[this.aliasField] || groupData[this.labelField] || '').toLowerCase())
        }
        return flag
      },
      onClickOutside () {
        if (this.alwaysExpand) return
        this.showOptions = false
        if (this.$refs.handle) {
          this.$refs.handle.onBlur()
        }
      },
      onClickHandle () {
        if (this.disable || this.alwaysExpand) return
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
                if (children[this.keyField] === data[this.keyField] && !this.chosenList.length) {
                  this.chosenList.push(children)
                }
              })
            } else {
              this.$set(this.checkedMap, option[this.keyField], option[this.keyField] === data[this.keyField])
              // 如果当前项与点击项相同，并且没有已选项，则选中当前项
              if (option[this.keyField] === data[this.keyField] && !this.chosenList.length) {
                this.chosenList.push(option)
              }
            }
          })
          if (!this.alwaysExpand) this.showOptions = false
          this.$emit('input', this.chosenList[0])
        } else {
          this.$set(this.checkedMap, data[this.keyField], checked)
          if (checked) {
            this.chosenList.push(data)
            if (
              this.multiple &&
              this.useChosenAll &&
              this.innerStore.length === Object.values(this.checkedMap).filter(item => item).length
            ) {
              this.chosenAllState = true
            }
          } else {
            this.chosenList.forEach((option, i) => {
              if (option[this.keyField] === data[this.keyField]) {
                this.chosenList.splice(i, 1)
              }
            })
            if (this.multiple && this.useChosenAll) {
              this.chosenAllState = false
            }
          }
          this.$emit('input', this.chosenList)
        }
        // 选中选项后，清空搜索内容
        if (this.$refs.handle) {
          this.$refs.handle.clearSearch()
        }

        this.$emit('change', this.chosenList, this)
      },
      onBottom () {
        if (this.onBottomScroll) {
          if (this.scrollTime) return
          this.scrollTime = new Date().getTime()
          this.onBottomScroll().finally(() => {
            clearTimeout(this.scrollLoadingTimer)
            let loadingTime = 0
            let endTime = new Date().getTime() - this.scrollTime
            if (endTime > 500) {
              loadingTime = 300
              this.loading = true
            }
            if (this.finallyTimeout) {
              clearTimeout(this.finallyTimeout)
            }
            this.finallyTimeout = setTimeout(() => {
              this.loading = false
              let count = (this.pageNum + 1) * this.pageSize
              if (this.totalCount > count) {
                this.pageNum++
              }
              this.scrollTime = 0
            }, loadingTime)
          })
          this.scrollLoadingTimer = setTimeout(() => {
            this.loading = true
          }, 500)
        } else {
          let count = (this.pageNum + 1) * this.pageSize
          if (this.totalCount > count) {
            this.pageNum++
          }
        }
      },
      onFilter (filterValue, force) {
        if (!force && !this.filter && !filterValue) return

        this.showOptions = true
        if (this.filterTimeout) clearTimeout(this.filterTimeout)
        this.filterTimeout = setTimeout(() => {
          if (this.search) {
            this.loading = true
            this.search(filterValue).finally(() => {
              this.loading = false
              this.$refs.options.$el.scrollTop = 0
              this.pageNum = 0
            })
          } else {
            this.$refs.options.$el.scrollTop = 0
            this.pageNum = 0
            this.filter = filterValue
          }
        }, 300)
      },
      onHandelFocus() {
        this.onFilter('', true)
      },
      clean () {
        this.chosenAllState = false
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
        this.chosenList.forEach((item, i) => {
          if (item === option) {
            this.checkedMap[option[this.keyField]] = false
            this.chosenList.splice(i, 1)
          }
        })
        // 如果是单选
        if (!this.multiple) {
          this.$emit('input', null)
          this.$emit('change', null, this)
        }
      },
      chosenAll(state) {
        this.chosenAllState = state
        let checkedMap = {}
        let allData = []
        if (state) {
          this.innerStore.forEach((item) => {
            let field = item[this.keyField]
            if (this.childrenField && item[this.childrenField].length) {
              item[this.childrenField].forEach((childrenItem) => {
                allData.push(childrenItem)
                checkedMap[childrenItem[this.keyField]] = true
              })
            } else {
              allData.push(item)
              checkedMap[item[this.keyField]] = true
            }
          })
        } else {
          allData = []
          checkedMap = {}
        }
        this.chosenList = allData
        this.$set(this, 'checkedMap', checkedMap)
        this.$emit('input', this.chosenList)
        this.$emit('change', this.chosenList, this)
      }
    },
    render (h) {
      return (
        <div class="c-select" ref="select" style={this.selectStyle} v-click-outside={this.onClickOutside}>
          <c-selector-handle value={this.chosenList}
                              ref="handle"
                              theme={this.theme}
                              placeholder={this.placeholder}
                              labelField={this.labelField}
                              aliasField={this.aliasField}
                              splitStr={this.splitStr}
                              splitStrFormat={this.splitStrFormat}
                              width={this.width}
                              size={this.size}
                              maxWidth={this.maxWidth}
                              active={this.showOptions}
                              keyField={this.keyField}
                              disable={this.disable}
                              onInput={this.syncChosen}
                              onSearch={this.onFilter}
                              onFocus={this.onHandelFocus}
                              onEnter={this.onEnter}
                              onDelete={this.onDelete}
                              onClick={this.onClickHandle}>
            {this.$slots.default}
          </c-selector-handle>

          <transition enter-active-class="animated slideInDown">
            <div v-show={this.showOptions} class="c-drop-panel" ref="dropPanel">
              <div class="c-fixed" v-show={this.theme !== 'tag'}>
                {(() => {
                  if (this.filterOption) {
                    return (
                      <c-input icon="cicon-search"
                                width="100%"
                                class={this.filterClass}
                                clear-able
                                ref="optionFilter" onInput={this.onFilter}></c-input>
                    )
                  }
                })()}
                {
                  this.showChosenControl &&
                  <li class="option-list-control">
                    {
                      this.showChosenAllBtn &&
                      <c-option
                        checked={this.chosenAllState}
                        multiple
                        onClick={this.chosenAll}
                        labelField="labelField"
                        data={{labelField:'全选'}}
                      ></c-option>
                    }
                    {this.showClearAbleBtn && <a class="c-clear" onClick={this.clean}>清空</a>}
                  </li>
                }
                {this.$slots.optionsHeader}
              </div>
              <div class="c-context">
                <c-scroll-container class="c-content"
                                    ref="options"
                                    onBottom={this.onBottom}>
                  {this.renderStore.map(option => {
                    if (this.childrenField) {
                      return (
                        <c-opt-group key={option[this.keyField]}
                                      store={option[this.childrenField]}
                                      showMap={this.showMap}
                                      groupData={option}
                                      checkedMap={this.checkedMap}
                                      disableOptions={this.disableOptions}
                                      keyField={this.keyField}
                                      labelField={this.labelField}
                                      aliasField={this.aliasField}
                                      groupField={this.groupField}
                                      iconField={this.iconField}
                                      multiple={this.multiple}
                                      theme={this.theme}
                                      hideHead={this.hiddenGroupMap[option[this.keyField]]}
                                      onClick={this.onClickOption}
                                      scopedSlots={{
                                        default: this.$scopedSlots.default,
                                        header: this.$scopedSlots.header
                                      }}
                        ></c-opt-group>
                      )
                    } else {
                      return (
                        <c-option key={option[this.keyField]}
                                  checked={this.checkedMap[option[this.keyField]]}
                                  disable={this.disableOptions.indexOf(option[this.keyField]) > -1}
                                  data={option}
                                  labelField={this.labelField}
                                  aliasField={this.aliasField}
                                  iconField={this.iconField}
                                  multiple={this.multiple}
                                  theme={this.theme}
                                  onClick={this.onClickOption}
                                  scopedSlots={{default: this.$scopedSlots.default}}></c-option>
                      )
                    }
                  })}
                  <li v-show={this.noData} class="c-option c-error">
                    {this.noDataText}
                  </li>
                  <li v-show={this.showNoMatch} class="c-option c-error">
                    {this.noMatchText}
                  </li>
                </c-scroll-container>
                <div class="loading-wrap" v-show={this.loading || this.showLoading}>
                  <c-loading size="small" showTip={false} tip="loading"></c-loading>
                </div>
              </div>
            </div>
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
