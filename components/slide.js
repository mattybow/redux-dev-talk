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

function createMarkup(markdown) { return {__html: marked(markdown)}; };

export default class Slide{
  render(){
    const classNames = cx('slideholder', this.props.style || 'center');
    const {data:{format, contentKey}} = this.props;
    let content;
    switch (format){
      case 'md':
        let html = createMarkup(slideText[contentKey]);
        content = (<div className="slide-content md">
          <div dangerouslySetInnerHTML={html} />
        </div>);
        break;
      case 'jsx':
        let ContentComponent= slideComponents[contentKey];
        content = <ContentComponent />;
        break;
      default:
        content = (<div className="slide-content">
          <h1>{slideText[contentKey]}</h1>
        </div>);
        break;
    }
    return (<div className={classNames}>
      {content}
    </div>);
  }
}