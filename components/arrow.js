import React from 'react';

export default class Arrow{
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