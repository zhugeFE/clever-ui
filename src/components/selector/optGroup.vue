<script type="text/jsx">
  import emitter from '../../mixins/emitter'
  import CGroupHeader from './groupHeader.vue'
  import COption from './option'
  export default {
    components: {
      CGroupHeader,
      COption
    },
    name: 'COptGroup',
    mixins: [emitter],
    props: {
      groupData: {
        type: Object
      },
      store: {
        type: Array
      },
      checkedMap: {
        type: Object
      },
      showMap: {
        type: Object
      },
      disableOptions: {
        type: Array
      },
      keyField: {
        type: String,
        required: true
      },
      labelField: {
        type: String,
        required: true
      },
      /**
       * @description 分组名称字段，用于显示分组名，不传则默认取labelField
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
       * @description 别名字段，设置别名后，优先展示别名
       */
      aliasField: {
        type: String
      },
      multiple: {
        type: Boolean,
        default: false
      },
      hideHead: {
        type: Boolean,
        default: false
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
      }
    },
    data () {
      return {
        show: true
      }
    },
    methods: {
      onClickOption (checked, data) {
        this.$emit('click', checked, data)
      }
    },
    render (h) {
      return (
        <ul class="c-opt-group" v-show={this.show}>
          <c-group-header groupData={this.groupData}
                           labelField={this.groupField || this.labelField}
                           show={!this.hideHead}
                           scopedSlots={{default: this.$scopedSlots.header}}></c-group-header>
          {this.store.map(option => {
            if (this.showMap[option[this.keyField]]) {
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
                           scopedSlots={{default: this.$scopedSlots.default}}
                ></c-option>
              )
            }
          })}
        </ul>
      )
    }
  }
</script>

<style lang="less">
@import "styles/optGroup.less";
</style>
