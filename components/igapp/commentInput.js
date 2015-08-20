import React from 'react';

export default class CommentInput{
	render(){
		return (<div className="comment-input" style={{margin:'0 10px'}}>
			<input style={{padding:10,border:'none',outline:'none'}} type="text" placeholder="write a comment"/>
		</div>);
	}
}