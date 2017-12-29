import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const store     = this.props.store,
          num         = store.getState(),
          addGUN      = this.props.addGUN,
          removeGUN   = this.props.removeGUN,
          addGUNAsync = this.props.addGUNAsync

    return (
      <div>
        <h1>现在有机枪 { num }</h1>
        <button onClick = { () => store.dispatch(addGUN()) }>申请武器</button>
        <button onClick = { () => store.dispatch(removeGUN()) }>回收武器</button>
        <button onClick = { () => store.dispatch(addGUNAsync()) }>托两天再给</button>
      </div>
    )
  }
}

export default App