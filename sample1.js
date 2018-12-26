class Button extends React.Component{
	handleClick = () => {
  	this.props.onClickFunction(this.props.count)
  }
	render(){
  	return(
    	<button onClick={this.handleClick}>
      	+{this.props.count}
      </button>
    );
  }
}

const Result = (props) => {
	return(
  	<div>{props.counter}</div>
  )
}

class App extends React.Component{
	state = {counter:0};
  construcotr() {
  this.tryfun= () => {
    	alert('called');
    }
  }
  incrementCounter = (count) => {
  
  	this.setState((prevState) => ({
    	counter : prevState.counter + count
    }));
    
  }
	render(){
  	return(
    	<div>
      <button valu="10" onclick={alert('abc')}>10</button>
    		<Button  count={1} onClickFunction={this.incrementCounter}/>
        <Button  count={5} onClickFunction={this.incrementCounter}/>
        <Button  count={10} onClickFunction={this.incrementCounter}/>
        <Button  count={100} onClickFunction={this.incrementCounter}/>
      	<Result counter={this.state.counter}/>
      </div>
    )
  }
}
ReactDOM.render(<App />,mountNode);
