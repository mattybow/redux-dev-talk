import React from 'react';

export default class heartSvg {
  render() {
    return (
      <div className="heart-svg" style={{width:30,height:30}}>
        <svg width="100%" height="100%" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g transform="matrix(1,0,0,1,-15,-12)">
                <g id="Layer1">
                    <path d="M30,21C42.382,10.63 51.148,30.3 30,39C10.014,31.262 15.644,10.612 30,21Z" style={{stroke:'grey', fill:'none'}}/>
                </g>
            </g>
        </svg>
      </div>
    );
  }
}
