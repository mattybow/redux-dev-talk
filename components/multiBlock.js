import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBlock} from '../actions/blockActions';
import Block from './block';
import {highlightBlocks,removeHighlights, highlightBlockIndex} from '../actions/blockActions';
const SPACE_KEY = 32;

function selectBlockInfo(state,props){
  const {name} = props;
  let blocks = state.blockInfo[props.forSlide].filter(block=> (block.name ===name));
  return {blocks};
}

class MultiBlock{
  componentWillMount(){
    if(!this.props.blocks.length){
      this.addBlock();
    }
  }
  componentDidMount(){
    this.boundHandler = ::this.handleKeyDown;
    document.body.addEventListener('keydown',this.boundHandler);
  }
  componentWillUnmount(){
    document.body.removeEventListener('keydown',this.boundHandler);
  }
  handleKeyDown(e){
    if(e.which === SPACE_KEY){
      const {dispatch,forSlide} = this.props;
      dispatch(removeHighlights(forSlide));
    }
  }
  handleMultiBlockClick(ev){
    if(ev.metaKey){
      this.addBlock();
      ev.stopPropagation();
    }
  }
  highlightFlow(index,ev){
    if(!ev.metaKey){
      const {forSlide, name, dispatch, highlightSeq} = this.props;
      let delay = 500;
      dispatch(highlightBlockIndex(forSlide,name,index));
      highlightSeq.forEach(block=>{
        const {name, qty} = block
        setTimeout(()=>{
          dispatch(highlightBlocks(forSlide, name, qty));
        },delay);
        delay = delay + 500;
      });
    }
  }
  addBlock(){
    const { forSlide, dispatch, name } = this.props;
    dispatch(addBlock(forSlide,name));
  }
  render(){
    const {blocks,name,highlightSeq} = this.props;
    return <div onClick={::this.handleMultiBlockClick} className="multi-block">
      {blocks.map((block,i)=>
        (<Block name={block.name} 
                clickHandler={highlightSeq ? this.highlightFlow.bind(this,i) : ()=>{}} 
                key={i} 
                highlightColor="papayawhip" 
                isHighlighted={block.isHighlighted}/>)
        )}
    </div>;
  }
}

export default connect(selectBlockInfo)(MultiBlock)