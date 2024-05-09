import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(2)

//   return (
//     <>
//       <Count count={count} />
//       <PlusButton count={count} setCount={setCount}/>
//       <MinusButton count={count} setCount={setCount}/>
//     </>
//   )
// }

// function Count ({count}) {
//   console.log('props: ' + count)
//   return (<div>count : {count}</div> )
// }

// function PlusButton ({count, setCount}) {
//   return <button onClick={() => {
//     setCount(count+1)
//   }} >+</button>
// }
// function MinusButton ({count, setCount}) {
//   return <button onClick={() => {
//     setCount(count-1)}}>-</button>
// }

class App extends Component {
  state = {count : 2}

  plusCount = () => {
    //화살표 함수일 떄의 this
    console.log(this)
    this.setState({ count: this.state.count+1})
  }
  minusCount ()  {
    // 함수 선언식일 떄의 this
    console.log(this)
    this.setState({ count: this.state.count-1 })
  }

  render() {
    return (
      <>
        <Count count={this.state.count} />
        <PlusButton onClick={this.plusCount}/>
        <MinusButton onClick={this.minusCount}/>
      </>
    )}
}

class PlusButton extends Component {
  render() {
    return (<button onClick={this.props.onClick}>+</button>)
  }
}
class MinusButton extends Component {
  render() {
    return (<button onClick={this.props.onClick}>-</button>)
  }
}


class Count extends Component {
  render() {
    console.log('props: ' + this.props.count)
    return (<div>count: { this.props.count }</div>)
  }
}

export default App
