import {ADD_BLOCK, HIGHLIGHT_BLOCKS, REMOVE_HIGHLIGHTS, HIGHLIGHT_BLOCK_WITH_INDEX} from '../constants/actionTypes';

export function addBlock(slideName,blockName){
	return {
		type:ADD_BLOCK,
		slideName,
		blockName
	};
}

export function highlightBlocks(slideName,blockName,qty=1){
	return {
		type:HIGHLIGHT_BLOCKS,
		slideName,
		blockName,
		qty
	}
}

export function removeHighlights(slideName){
	return {
		type:REMOVE_HIGHLIGHTS,
		slideName
	}
}

export function highlightBlockIndex(slideName,blockName,index){
	return {
		type:HIGHLIGHT_BLOCK_WITH_INDEX,
		slideName,
		blockName,
		index
	}
}