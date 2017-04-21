很多情况下系统的数字键盘不能满足我们的要求，比如不同平台数字键盘表现不一致，比如有的数字键盘存在小数点，比如需要配合虚拟输入框而系统的键盘又不易控制...

#### Demo

![NumericKeyboard](http://wx2.sinaimg.cn/mw690/4c8b519dly1fbztgpbw6gg20ho0wgx6p.gif)

#### Example

```JavaScript
import NumericKeyboard from 'rnx-ui/NumericKeyboard';

function Example(props) {
  return (
    <NumericKeyboard
      onPress={this.onInput}
    />
  );
}
```

