import React, { Component } from 'react';
import ItemList from '@/components/ItemList'
import style from '@/App.css'

class App extends Component {
  constructor(){
    super()
    this.state={
      CommentList: [
        { id: 1, text: 'MACD', value: [12], selects: true },
        { id: 2, text: 'RSI', value: [1,2,3], selects: true },
        { id: 3, text: 'FastK', value: [35,6], selects: true },
        { id: 4, text: 'ADX', value: [3,6,9], selects: true },
        { id: 5, text: 'MA金叉', value: [3,6], selects: false }
      ],
      items : []
    }
  }
  addItem (item) {
    const that = Object.assign({},item,{id:this.state.items.length ?this.state.items[this.state.items.length-1].id + 1:0})
    this.setState({
      items:[...this.state.items,that]
    })
  }
  deleteItem(i) {
    this.state.items.splice(i,1)
    this.setState({
      items: this.state.items
    })
  }
  updateItem(index,value) {
    const items = [...this.state.items]
    items[index].value = value
    this.setState({
      items
    })
  }
  render() {
    return (
      <div>
        <ul className={style.links}>
          {this.state.CommentList.map((item)=> <li key={item.id} onClick={()=>{this.addItem(item)}}>
            {item.text}
          </li>)}
        </ul>
        <table>
          <tbody>
            {this.state.items.map((item,i)=> <ItemList key={item.id} {...item} onUpadte={this.updateItem.bind(this,i)} onClick={()=>this.deleteItem(i)}/>)}
          </tbody>
          
        </table>
          
      </div>
    );
  }
}
export default App;
