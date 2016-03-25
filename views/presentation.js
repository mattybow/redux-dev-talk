import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Slide from '../components/slide';
import NotFound from './notFound';
const {LEFT, RIGHT, UP, DOWN} = {LEFT:37,RIGHT:39,UP:38,DOWN:40};

class NoMobileMessage extends React.Component{
  render(){
    return <div style={{
        marginTop:'2em',
        textAlign:'center',
        padding:'2em'
      }}>
      <h3 style={{fontFamily:'monospace'}}>sorry</h3>
      <div style={{lineHeight:'1.5em'}}>this presentation requires arrow keys to work, please view on a laptop or desktop computer</div>
    </div>
  }
}


@connect(state=>({
  slides:state.slides
}))
export default class Presentation{
  static contextTypes = {
    router: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
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

    switch (e.which){
      case UP:
        e.preventDefault();
        this.prevSlide(curSlide);
        break;
      case DOWN:
        e.preventDefault();
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
    const {router} = this.context;
    router.push('/slide/'+slide);
  }
  getCurSlide(){
    let slide = this.props.params.currentSlide || 0;
    return parseInt(slide);
  }
  render(){
    //console.log(this.props);
    if('ontouchstart' in window){
      return <NoMobileMessage/>
    }
    const currentSlide = this.getCurSlide();
    return (<div id="presentation" style={{width:'100%',height:'100%'}}>
      <Slide data={this.props.slides[currentSlide]}/>
    </div>);
  }
}
