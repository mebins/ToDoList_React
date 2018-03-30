
function Item(props)
  {
  return(
  <li>
    <span>{props.value}</span>
      <button onClick = {props.delEvent}> X </button>
   </li>
  );
}
class ToDoList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
      {
      list: [],
      userInput:"",
    };
  }
  
  pushItem(input)
  {
    let list = this.state.list;
    list.push(input);
    this.setState({list:list, userInput: ''});
    
  }
  
  updateInput(input)
  {
    this.setState({userInput: input});
  }
  deleteUser = (index, e) => {
    let list = this.state.list;
    list.splice(index,1);
    this.setState({list:list});
  }
  render()
  {
    return(
    <div>
        <input type ="text" value = {this.state.userInput} onChange={(e) => this.updateInput(e.target.value)}/> 
        <button onClick = {() => this.pushItem(this.state.userInput) }> Add to List </button>
        <ul>
          {
            this.state.list.map((val,index) => {
            return (<Item value = {val} delEvent={this.deleteUser.bind(this,index)} />)
            })
          }
        </ul>
    </div>
    );
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
