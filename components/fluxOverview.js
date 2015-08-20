import React, {Component} from 'react';

const blockStyle={
  borderRadius:2,
  padding:'20px 30px',
  backgroundColor:'#FFF',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    transform: 'translate3d(0px, 0px, 0px) scale(1)',
    margin:10,
    WebkitUserSelect:'none',
    cursor:'pointer'
}

class Block extends Component{
  constructor(props){
    super(props);
    this.state = {highlighted:false};
  }
  clickHandler(e){
    if(!e.metaKey){
      const curState = this.state.highlighted;
      this.setState({highlighted:!curState});
    }
  }
  render(){
    let style = blockStyle;
    if(this.state.highlighted){
      style = {...blockStyle,...{backgroundColor:this.props.highlightColor}};
    }
    return (<div onClick={::this.clickHandler} key={this.props.num} style={style}>
        {this.props.name}
    </div>);
  }
}

class MultiBlock extends Component{
  constructor(props){
    super(props);
    this.state = {blocks:[this.props.name]};
  }
  addBlock(ev){
    if(ev.metaKey){
      const newState = [...this.state.blocks,this.props.name];
      this.setState({blocks:newState});
      ev.stopPropagation();
    }
  }
  render(){
    return <div onClick={::this.addBlock} id="store">
      {this.state.blocks.map((name,i)=>(<Block name={name} num={i} highlightColor="papayawhip"/>))}
    </div>;
  }
}

class Arrow{
  render(){
    const html = `<svg width="100%" height="100%" viewBox="0 0 190 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <g transform="matrix(1,0,0,1,-29,-14)">
                <g id="Layer1">
                    <path d="M34.373,30L216.762,30L194.992,20.736" style="fill:none;stroke-width:1px;stroke:black;"/>
                    <g transform="matrix(1,0,0,-1,0,60)">
                        <path d="M216.762,30L194.992,20.736" style="fill:none;stroke-width:1px;stroke:black;"/>
                    </g>
                </g>
            </g>
        </svg>`;
    function getHtml(){
      return {__html:html};
    }
    return <div style={{width:70}}dangerouslySetInnerHTML={getHtml()}></div>;
  }
}

const diagramStyle={
  display:'-webkit-flex',
  flexFlow:'row nowrap',
  WebkitJustifyContent:'space-around',
  justifyContent:'space-around',
  alignItems:'center',
  WebkitAlignItems:'center',
  width:'100%',
  height:'100%',
  position:'absolute',
  top:0,
  left:0
}

class Diagram{
  render(){
    return (<div style={diagramStyle}>
      {this.props.children}
    </div>);
  }
}

export default class FluxOverview extends Component{
  constructor(props){
    super(props);
    this.state={stores:1, views:1};
  }
  render(){
    return <div className="full-height" style={{padding:'0 50px', position:'relative'}}>
      <h2 style={{marginTop:'3em'}}>Flux Overview</h2>
      <p>Unidirectional Data Flow</p>
      <Diagram>
        <Block name="action" highlightColor="papayawhip"/>
        <Arrow />
        <Block name="dispatcher" highlightColor="papayawhip"/>
        <Arrow />
        <MultiBlock name="store"/>
        <Arrow />
        <MultiBlock name="view"/>
      </Diagram>
    </div>
  }
}