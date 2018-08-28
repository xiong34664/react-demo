import React, { Component } from 'react'
import style from './style.css'

class ItemList extends Component {
  constructor (props) {
    super(props)
    this.state= {
      ...props
    }
    this.add = this.add.bind(this)
  }
  add() {
    this.props.onUpadte([2,3,6])
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    })
  }
  render() {
    // const {text,value,onClick} = this.props
    return <tr className={style.item }>
      <td width="200"><p>{this.state.text}({this.state.value.join(",")})</p></td>
      <td width="200">
        <select className="selectArea" onChange={()=>{}}>
          <option value="0">区间</option>
          <option value="1">大于</option>
          <option value="2">小于</option>
        </select>
      </td>
      <td width="300">
        <input type="number" /></td>
      <td width="200">
        <button onClick={this.state.onClick}>X</button>
        <button onClick={this.add}></button>
      </td>
    </tr>
  }
}

export default ItemList