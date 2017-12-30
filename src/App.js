import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGUNAsync } from './index.redux'

@connect (
  // 你要什么属性放到props里
  state => ({ num: state.counter }),
  // 你要什么方法放在props里,自动dispatch
  { addGUN, removeGUN, addGUNAsync }
)
class App extends React.Component {
  render () {
    const num         = this.props.num,
          addGUN      = this.props.addGUN,
          removeGUN   = this.props.removeGUN,
          addGUNAsync = this.props.addGUNAsync

    return (
      <div>
        <h1>现在有机枪 { num }</h1>
        <button onClick = { addGUN }>申请武器</button>
        <button onClick = { removeGUN }>回收武器</button>
        <button onClick = { addGUNAsync }>托两天再给</button>
      </div>
    )
  }
}

export default App