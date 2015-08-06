import React from 'react';
import cx from 'classnames';
import marked from 'marked';
import * as slideComponents from './slideIndex';
import slideText from './slideText';
import './highlight.css';

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const slideStyle = {
  display:'flex',
  flexFlow:'row wrap',
  alignItems:'center',
  height:'100%',
  justifyContent:'center',
  padding:'0 50px'
}

function createMarkup(markdown) { return {__html: marked(markdown)}; };

export default class Slide{
  render(){
    console.log('slide render');
    const classNames = cx('slideholder', this.props.style || 'center');
    const {data:{format, contentKey}} = this.props;
    let content;
    switch (format){
      case 'md':
        content = <div className="slide-content" dangerouslySetInnerHTML={createMarkup(slideText[contentKey])}></div>;
        break;
      case 'jsx':
        let ContentComponent= slideComponents[contentKey];
        content = <ContentComponent />;
        break;
      default:
        content = <div className="slide-content">{slideText[contentKey]}</div>;
    }
    return (<div className={classNames} style={slideStyle}>
      {content}
    </div>);
  }
}