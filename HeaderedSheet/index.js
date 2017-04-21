/**
 * @component HeaderedSheet
 * @version 0.12.0
 * @description 有标题栏的底部弹层
 *
 * @instructions {instruInfo: ./HeaderedSheet/HeaderedSheet.md}
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  ACTIVE_OPACITY,
} from '../constant';
import Sheet from '../Sheet';
import styles from './styles.js';

const NOOP = () => {};

class HeaderedSheet extends Component {
  makeTitle() {
    let title = this.props.title;
    if (typeof title === 'string') {
      title = (
        <Text
          style={[styles.title, this.props.titleStyle]}
          numberOfLines={1}
        >
          {this.props.title}
        </Text>
      );
    }
    return title;
  }
  makeLeftBtn() {
    let leftBtn = this.props.leftBtn;
    if (typeof leftBtn === 'string') {
      leftBtn = (
        <Text
          style={[styles.btnText, this.props.leftBtnStyle]}
        >
          {this.props.leftBtn}
        </Text>
      );
    }

    return leftBtn;
  }
  makeRightBtn() {
    let rightBtn = this.props.rightBtn;
    if (typeof rightBtn === 'string') {
      rightBtn = (
        <Text
          style={[styles.btnText, this.props.rightBtnStyle]}
        >
          {this.props.rightBtn}
        </Text>
      );
    }
    return rightBtn;
  }
  render() {
    const title = this.makeTitle();
    const leftBtn = this.makeLeftBtn();
    const rightBtn = this.makeRightBtn();

    return (
      <Sheet
        visible={this.props.visible}
        overlayStyle={this.props.overlayStyle}
        onPressOverlay={this.props.onPressOverlay}
        onClose={this.props.onClose}
        duration={this.props.duration}
        style={[styles.containerStyle, this.props.containerStyle]}
      >
        <TouchableWithoutFeedback>
          <View>
            <View
              style={[styles.header, this.props.headerStyle]}
            >
              <View
                style={[styles.titleWrapper, {
                  left: this.props.titleGap,
                  right: this.props.titleGap,
                }]}
              >
                {title}
              </View>
              <TouchableOpacity
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPressLeftBtn}
              >
                <View style={styles.btn}>
                  {leftBtn}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPressRightBtn}
              >
                <View style={styles.btn}>
                  {rightBtn}
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.container, this.props.style]}>
              {this.props.children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Sheet>
    );
  }
}

HeaderedSheet.propTypes = {
  /**
   * @property visible
   * @type Boolean
   * @default false
   * @description 显示开关
   */
  visible: Sheet.propTypes.visible,
  /**
   * @property overlayStyle
   * @type Object
   * @default null
   * @description 遮罩层样式
   */
  overlayStyle: Sheet.propTypes.overlayStyle,
  /**
   * @property onClose
   * @type Function
   * @default NOOP
   * @description 关闭回调（动画结束时）
   */
  onClose: Sheet.propTypes.onClose,
  /**
   * @property onPressOverlay
   * @type Function
   * @default NOOP
   * @description 遮罩点击事件
   */
  onPressOverlay: Sheet.propTypes.onPressOverlay,
  /**
   * @property duration
   * @type Number
   * @default 200
   * @description 动画时长
   */
  duration: Sheet.propTypes.duration,
  /**
   * @property containerStyle
   * @type Object
   * @default null
   * @description 自定容器义样式（包含 header 区域）
   */
  containerStyle: Sheet.propTypes.style,
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property headerStyle
   * @type Object
   * @default null
   * @description 自定义 header 样式
   */
  headerStyle: View.propTypes.style,
  /**
   * @property title
   * @type String Element
   * @default ''
   * @description 标题
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * @property titleStyle
   * @type Object
   * @default null
   * @description  标题文本样式（title 为字符串时才生效）
   */
  titleStyle: Text.propTypes.style,
  /**
   * @property titleGap
   * @type Number
   * @default 50
   * @description  标题到左右两边的距离
   */
  titleGap: PropTypes.number,
   /**
   * @property leftBtn
   * @type String Element
   * @default null
   * @description  左侧按钮
   */
  leftBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
   /**
   * @property onPressLeftBtn
   * @type Function
   * @default NOOP
   * @description  左侧点击事件
   */
  onPressLeftBtn: PropTypes.func,
  /**
   * @property leftBtnStyle
   * @type Object
   * @default null
   * @description  左侧按钮文本样式（leftBtn 为字符串时才生效）
   */
  leftBtnStyle: Text.propTypes.style,
  /**
   * @property rightBtn
   * @type String  Element
   * @default null
   * @description  右侧按钮
   */
  rightBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * @property onPressRightBtn
   * @type Function
   * @default NOOP
   * @description  右侧点击事件
   */
  onPressRightBtn: PropTypes.func,
  /**
   * @property rightBtnStyle
   * @type Object
   * @default null
   * @description  右侧按钮文本样式（leftBtn 为字符串时才生效）
   */
  rightBtnStyle: Text.propTypes.style,
  /**
   * @property activeOpacity
   * @type Number
   * @default ACTIVE_OPACITY
   * @description  按钮点击透明度变化
   */
  activeOpacity: PropTypes.number,
  /**
   * @property children
   * @type Element Array
   * @default null
   * @description  子元素
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
HeaderedSheet.defaultProps = {
  visible: false,
  overlayStyle: null,
  onClose: NOOP,
  onPressOverlay: NOOP,
  duration: 200,
  style: null,
  headerHeight: null,
  title: '',
  titleStyle: null,
  titleGap: 50,
  leftBtn: null,
  onPressLeftBtn: NOOP,
  leftBtnStyle: null,
  rightBtn: null,
  onPressRightBtn: NOOP,
  rightBtnStyle: null,
  activeOpacity: ACTIVE_OPACITY,
  children: null,
};

export default HeaderedSheet;
