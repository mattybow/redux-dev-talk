import React from 'react';
import {connect} from 'react-redux';
import MultiBlock from './multiBlock';
import Diagram from './diagram';
import Arrow from './arrow';
import Instructions from './instructions';

export default class ReduxOverview{
	render(){
		const seq = [
      {name: 'middleware', qty:1},
      {name: 'reducer', qty:20},
      {name: 'store', qty:1},
      {name: 'view', qty:20}
    ];
		return <div className="full-height" style={{padding:'0 20px', position:'relative'}}>
      <h2 style={{marginTop:'2em'}}>Redux Overview</h2>
			<Diagram>
        <MultiBlock forSlide="reduxOverview" highlightSeq={seq} name="action"/>
        <Arrow />
        <MultiBlock forSlide="reduxOverview" name="middleware"/>
        <Arrow />
        <MultiBlock forSlide="reduxOverview" name="reducer"/>
        <Arrow />
        <MultiBlock forSlide="reduxOverview" name="store"/>
        <Arrow />
        <MultiBlock forSlide="reduxOverview" name="view"/>
      </Diagram>
      <Instructions/>
		</div>
	}
}
