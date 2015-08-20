import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Slide from '../components/slide';
import NotFound from './notFound';
const {LEFT, RIGHT, UP, DOWN} = {LEFT:37,RIGHT:39,UP:38,DOWN:40};


@connect(state=>({
  slides:state.slides
}))
export default class Presentation{
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  // componentWillMount(){
  //   if(this.getCurSlide() >= this.props.slides.length){
  //     this.context.router.replaceWith('/notFound',null,{message:"that slide does not exist"});
  //     return;
  //   }
  // }
  shouldComponentUpdate(nextProps){
    //console.log('SCU',nextProps);
    if(nextProps.params.currentSlide!==this.props.params.currentSlide){
      return true;
    }
    return false;
  }
  componentDidMount(){
    //console.log('presentaton mount');
    document.body.addEventListener('keydown',::this.handleKeyDown);
  }
  componentWillUnmount(){
    document.body.removeEventListener('keydown',::this.handleKeyDown);
  }
  handleKeyDown(e){
    const whichKey = e.which;
    let curSlide= this.getCurSlide();
    if( whichKey >= 37 && whichKey <= 40){
      e.preventDefault();
    }
    switch (e.which){
      case LEFT:
        this.prevSlide(curSlide);
        break;
      case RIGHT:
        this.nextSlide(curSlide);
        break;
      default:
        return;
    }
  }
  nextSlide(curSlide){
    let nextSlide = Math.min(this.props.slides.length-1, curSlide + 1);
    if(curSlide !== nextSlide) this.goTo(nextSlide);
  }
  prevSlide(curSlide){
    let nextSlide = Math.max(0,curSlide - 1);
    if(curSlide !== nextSlide) this.goTo(nextSlide);
  }
  goTo(slide){
    const {router} = this.context
    router.transitionTo('/slide/'+slide);
  }
  getCurSlide(){
    let slide = this.props.params.currentSlide || 0;
    return parseInt(slide);
  }
  render(){
    //console.log(this.props);
    const currentSlide = this.getCurSlide();
    return (<div id="presentation" style={{width:'100%',height:'100%'}}>
      <Slide data={this.props.slides[currentSlide]}/>
    </div>);
  }
}
