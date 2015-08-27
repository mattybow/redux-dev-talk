import React, {Component} from 'react';
import MultiBlock from './multiBlock';
import Diagram from './diagram';
import Arrow from './arrow';
import Instructions from './instructions';


export default class FluxOverview{
  render(){
    const seq = [
      {name: 'dispatcher', qty:1},
      {name: 'store', qty:20},
      {name: 'store', qty:2},
      {name: 'view', qty:3}
    ];
    return <div className="full-height" style={{padding:'0 20px', position:'relative'}}>
      <h2 style={{marginTop:'2em'}}>Flux Overview</h2>
      <p>Unidirectional Data Flow</p>
      <Diagram>
        <MultiBlock forSlide="fluxOverview" highlightSeq={seq} name="action"/>
        <Arrow />
        <MultiBlock forSlide="fluxOverview" name="dispatcher"/>
        <Arrow />
        <MultiBlock forSlide="fluxOverview" name="store"/>
        <Arrow />
        <MultiBlock forSlide="fluxOverview" name="view"/>
      </Diagram>
      <Instructions/>
    </div>
  }
}