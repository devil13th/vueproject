<script>
import com from './JsxComponent'
export default{
  components: { com },
  data () {
    return {
      str: 'hello :',
      name: 'devil13th'
    }
  },
  methods: {
    showStr (name) {
      alert(this.str + name)
    }
  },
  render () {
    let cd = <div style="border:1px solid #000;background:#eee;">我是传递过来的组件</div>

    return (
      <div>
        <com
          msg={this.name}
          invokeMethod = {this.showStr}
          color="blue"
          showTitle={true}
          child = {cd}
        ></com>

        <h1 onClick={() => { this.showStr(' Thd ') }}>{this.str}{this.name} - click me please</h1>
      </div>
    )
  }
}
</script>
