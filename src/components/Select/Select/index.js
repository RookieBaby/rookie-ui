import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import invariant from 'invariant'
import shouldComponentUpdate from '../../shouldComponentUpdate'
import dataFilter from '../../../utils/dataFilter'
import TextOverflow from '../../TextOverflow'
import SelectDropdown from '../../SelectDropdown'
import './index.less'

class Select extends Component {
  constructor (props) {
    super()
    this.state = {
      data: props.data || [],
      index: -1,
      value: 'value' in props ? props.value : props.defaultValue
    }
  }

  componentWillReceiveProps (nextProps) {
    const state = {}
    'value' in nextProps && (state.value = nextProps.value)
    'data' in nextProps && (state.data = nextProps.data)
    this.setState(state)
  }

  shouldComponentUpdate = shouldComponentUpdate

  handleLoad (data) {
    const { url } = this.props
    data = dataFilter(this, data) || []
    invariant(
      Array.isArray(data),
      `\`Select\` data should be \`Array\`, check the response of \`${url}\` or the return value of \`dataFilter\`.`
    )
    this.setState({ data })
  }

  handleSelect (value, item) {
    this.refs.dropdown.close()
    this.setState({ value })
    this.props.onChange && this.props.onChange(value, item)
  }

  handleKeyDown (options, e) {
    const key = e.key
    let { index } = this.state
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      if (key === 'ArrowDown') {
        if (index === options.length - 1) index = 0
        else index++
      }
      if (key === 'ArrowUp') {
        e.preventDefault()
        if (index === 0) index = options.length - 1
        else index--
      }
      this.setState({ index })
    }
    if (key === 'Enter') {
      const props = options[index].props
      this.handleSelect(props.value, props.data || props)
    }
  }

  handleDropToggle (open) {
    // this.props.searchable && open && setTimeout(() => {
    //   this.refs.clearableInput && this.refs.clearableInput.focus()
    // }, 0)
  }

  getOptionsWithProps (onMatch) {
    const { children, render, defaultOption } = this.props
    let res
    if (children) {
      res = React.Children.map(children, this.getOptionWithProps.bind(this, onMatch))
    } else {
      res = this.state.data.map((item, i) => {
        return this.getOptionWithProps(onMatch, render.call(this, item, i), i, item)
      })
    }
    if (defaultOption) {
      res.unshift(this.getOptionWithProps(onMatch, defaultOption, -1))
    }
    return res
  }

  getOptionWithProps (onMatch, option, i, dataItem) {
    if (!option) return
    const { value, children } = option.props
    let selected = false
    if (this.state.value === value) {
      onMatch && onMatch(children)
      selected = true
    }
    return React.cloneElement(option, {
      data: dataItem,
      selected,
      key: i,
      onClick: this.handleSelect.bind(this, value, dataItem || option.props)
    })
  }

  render () {
    const {
      children, className, defaultValue, onChange, data, dataFilter, defaultOption, size,
      placeholder, noOptionsContent, noMatchingContent, ...other
    } = this.props
    const { value } = this.state

    delete other.value
    delete other.render

    let title = null
    let optionsWithProps = this.getOptionsWithProps(children => (title = children))

    const classNames = classnames('cmui-select', {
      [`cmui-select--${size}`]: size
    }, className)

    const optionsClassNames = classnames('cmui-select__options', {
      [`cmui-select__options--${size}`]: size
    })

    if (!title) {
      if (!value && !defaultOption) {
        title = placeholder
      }
      if (value) {
        title = noMatchingContent
      }
    }

    const Title = (
      <TextOverflow>
        <div className="cmui-select__title">{title}</div>
      </TextOverflow>
    )

    return (
      <SelectDropdown
        ref="dropdown"
        className={classNames}
        title={Title}
        onLoad={::this.handleLoad}
        hasPropValue={'value' in this.props || 'defaultValue' in this.props}
        onToggle={::this.handleDropToggle}
        caret
        {...other}
      >
        <ul className={optionsClassNames}>
          {optionsWithProps && optionsWithProps.length ? optionsWithProps : (
            <li className="cmui-select__option">{noOptionsContent}</li>
          )}
        </ul>
      </SelectDropdown>
    )
  }
}

Select.defaultProps = {
  placeholder: '请选择',
  noOptionsContent: '无选项',
  noMatchingContent: '无匹配选项'
}

Select.propTypes = {

  children: PropTypes.node,

  className: PropTypes.string,

  // 选中的值
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 初始化时选中的值（不可控）
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 切换选择后的回调，function(value, item)，当前数据项或 option.props
  onChange: PropTypes.func,

  // 数据源，结合 render 属性定义 Option 渲染逻辑
  data: PropTypes.array,

  // URL 数据源
  url: PropTypes.string,

  // URL 数据源模式数据过滤，参数为服务器返回的数据，返回处理后的数据
  dataFilter: PropTypes.func,

  // data 或 url 方式时 Option 渲染回调，参数为当前数据和索引，返回一个 Option
  render: PropTypes.func,

  // data 或 url 方式时默认的 Option，通常针对空值时的选项
  defaultOption: PropTypes.element,

  // 无 `value` 且无选项匹配时 Select 显示的内容，默认 `请选择`
  placeholder: PropTypes.string,

  // 是否禁用
  disabled: PropTypes.bool,

  // 尺寸
  size: PropTypes.oneOf(['sm', 'lg']),

  // 宽度，默认 160
  width: PropTypes.number,

  // 无 option 时显示的内容，默认`无选项`
  noOptionsContent: PropTypes.string,

  // 有 `value` 但无选项匹配时显示的内容，默认`无匹配选项`
  noMatchingContent: PropTypes.string,

  customProp ({ value, onChange, url, render }) {
    if (value && !onChange) {
      return new Error('You provided a `value` prop without an `onChange` handler')
    }
    if (url && !render) {
      return new Error('You provided a `url` prop without an `render` handler')
    }
  }
}

export default Select
