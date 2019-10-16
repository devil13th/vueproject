
export default{
  props: {
    child: {
      type: Object
    },
    showTitle: {
      type: Boolean,
      default: () => { return false }
    },
    msg: {
      type: String,
      default: () => { return '' }
    },
    color: {
      type: String,
      default: () => { return '#000' }
    },
    invokeMethod: {
      type: Function
    }
  },
  data () {
    return {
      str: 'hello jsx',
      name: 'thd'
    }
  },
  methods: {
    showStr () {
      alert(this.str)
    }
  },
  render () {
    const _this = this
    const aDom = <h3 style={{background: '#eee', color: 'red'}}>我是组件</h3>
    const title = this.showTitle ? aDom : ''
    return (
      <div style={{borderWidth: '1px', borderStyle: 'solid', borderColor: this.color}}>
        {title}
        {this.msg}<br/>
        <input type="button" onClick={this.invokeMethod} value="click me"/>
        <input type="button" onClick={function (e) { _this.invokeMethod('devil13th', e) }} value="click me"/>
        <hr/>
        {this.child}
      </div>
    )
  }
}
