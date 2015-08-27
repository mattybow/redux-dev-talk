import React, {Component} from 'react';
import ReactButton from './reactButton';

const textButtons = "i want to try redux".split(' ')
                    .map(
                      text => (
                        {text:text,isActive:false}
                      )
                    );


/*export default class ReactComponents {
  render(){
    return <div>
      <h2>React klgkg</h2>
      <ReactButton />
    </div>;
  }
}
*/

class Header{
 render(){
   return <div style={{display:'flex', alignItems:'center'}}>
     <h3 style={{margin:20}}>react buttons</h3>
     {this.props.children}
   </div>;
 }
}

/*export default class ReactComponents extends Component{
  constructor(props){
    super(props);
    this.state = {textButtons};
  }
  render(){
    return <div>
      <h2>React Components</h2>
      <Header>
        {this.state.textButtons.map(
          (button,i) => (
            <ReactButton
              key={button.text}
              buttonText={button.text}/>
          )
        )}
      </Header>
    </div>
  }
}*/

export default class ReactComponents extends Component{
  constructor(props){
    super(props);
    this.state = {textButtons};
  }
  handleClick(index){
    const buttons = this.state.textButtons;
    const curActive = buttons[index].isActive;
    const newTextButtons = buttons.map((button,i)=>{
      if(i===index || button.text==='redux'){
        return {...button,...{isActive:!curActive}};
      }
      return button;
    });
    this.setState({textButtons:newTextButtons});
  }
  render(){
    return <div>
      <h2>React Components</h2>
      <Header>
        {this.state.textButtons.map(
          (button,i) => (
            <ReactButton
              key={button.text}
              clickHandler={this.handleClick.bind(this,i)}
              buttonText={button.text}
              isActive={button.isActive}/>
          )
        )}
      </Header>
    </div>
  }
}