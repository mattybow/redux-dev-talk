import {ADD_BLOCK, HIGHLIGHT_BLOCKS, REMOVE_HIGHLIGHTS, HIGHLIGHT_BLOCK_WITH_INDEX} from '../constants/actionTypes';

function chooseRandomVals(blocks,qty){
  let highlightCount = 0;
  let tryRandom = true;
  let randomVal = true;
  return blocks.map((block, i)=>{
    const qtyLeftToAssign = blocks.length - i - highlightCount;

    if(qty > blocks.length){                    // if the qty specified is greater than the length of the array, assign all true
      return true;
    } else if (highlightCount === qty){         // if we've already assigned the qty required, the rest returns false
      return false;
    } else if (qtyLeftToAssign === qty){        // if the amount we have left loop over is equal to the amount we have left to assign, stop the random choosing      
      tryRandom = false;
    }

    if(tryRandom){
      randomVal = Math.round(Math.random() * 10) % 2 ? true : false;
      if(randomVal){
        highlightCount++;
      }
      // console.log('chose random, result:'+randomVal+' highlightCount='+highlightCount);
      return randomVal;
    } else {
      // console.log('no random just assign true');
      highlightCount++;
      return true;
    }
  });
}

function blocks(state,action){                                                  //this reducer takes in the array of blocks as its state
  const {blockName, qty, index} = action;
  switch (action.type){
    case ADD_BLOCK:
      return [...state,{name:blockName,isHighlighted:false}];                   //append a new block onto the array
    case HIGHLIGHT_BLOCKS:
      let filteredBlocks = state.filter(block=>(block.name===blockName));       //grab the blocks matching the action's block name
      let highlightArray = chooseRandomVals(filteredBlocks,qty);                //make an array with which blocks should be highlighted
      return state.map(block =>{
        if (block.name === blockName) {
          return {...block, ...{isHighlighted:highlightArray.pop()}};           //overwrite the highlighted state
        }
        return block;
      });
    case HIGHLIGHT_BLOCK_WITH_INDEX:
      let blockCnt = 0;
      return state.map(block =>{
        if (block.name === blockName){
          if(blockCnt === index){
            blockCnt++;
            return {...block, ...{isHighlighted:true}};
          } else {
            blockCnt++;
          }
        }
        return block;
      });
    case REMOVE_HIGHLIGHTS:
      return state.map(block =>{
        return {...block, ...{isHighlighted:false}}
      });
  }
}

const initialState = {
  fluxOverview:[],
  reduxOverview:[]
}

export default function blockInfo(state=initialState,action){
  const {slideName} = action;
  switch (action.type){
    case ADD_BLOCK:
    case HIGHLIGHT_BLOCKS:
    case HIGHLIGHT_BLOCK_WITH_INDEX:
    case REMOVE_HIGHLIGHTS:
      return {...state,...{[slideName]:blocks(state[slideName],action)}};
    default:
      return state;
  }
}