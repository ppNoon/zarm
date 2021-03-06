## 搜索框 SearchBar



### 基本用法
```jsx
import { SearchBar } from 'zarm';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '默认关键字',
      placeholder: '搜索',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: '默认关键字2',
        placeholder: '搜索你想购买的保险',
      });
    }, 0);
  }

  render() {
    return (
      <div>
        <SearchBar
          shape="round"
          placeholder={this.state.placeholder}
          showCancel={false}
          onSubmit={(value) => {
            console.log(`搜索内容为${value}`);
          }}
          onFocus={() => {
            console.log('获取焦点');
          }}
          onChange={(value) => {
            console.log(value);
          }}
          onBlur={() => {
            console.log('失去焦点');
          }}
          onClear={() => {
            console.log('点击了清除');
          }}
          onCancel={() => {
            console.log('点击了取消');
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



### 始终展示取消按钮
```jsx
import { SearchBar } from 'zarm';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          showCancel
          value={this.state.value}
          placeholder="搜索"
          onChange={(value) => {
            console.log(value);
            this.setState({
              value,
            });
          }}
          onClear={(value) => {
            console.log('清除了 -> ', value);
            this.setState({
              value: '',
            });
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



### 手动获取焦点
```jsx
import { SearchBar, Button } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          shape="radius"
          cancelText="取消"
          placeholder="搜索"
          ref={(ref) => { this.manualFocus = ref; }}
        />
        <div className="button-wrap">
          <Button theme="primary" size="xs" shape="radius" onClick={() => { this.manualFocus.focus(); }}>点击获取焦点</Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



### API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| placeholder | string | '搜索' | 占位符 |
| value | string | - | 值 |
| defaultValue | string | - | 初始值 |
| shape | string | - | 形状，可选值 `radius`, `round` |
| disabled | boolean | false | 是否禁用 |
| showCancel | boolean | false | 是否一直展示取消按钮 |
| cancelText | string | '取消' | 取消按钮显示的内容 |
| maxLength | number | - | 输入字数上限 |
| clearable | boolean | true | 是否提供清空输入框功能 |
| onChange | (value?: string) => void | - | 值变化时触发的回调函数 |
| onSubmit | (value?: string) => void | - | 提交时触发的回调函数 |
| onFocus | () => void | - | 获取焦点时触发的回调函数 |
| onBlur | () => void | - | 失去焦点时触发的回调函数 |
| onClear | () => void | - | 点击清除按钮时触发的回调函数 |
| onCancel | () => void | - | 点击取消时触发的回调函数 |
