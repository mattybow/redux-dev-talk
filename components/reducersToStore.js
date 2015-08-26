import React from 'react';
import Diagram from './diagram';

class Panel{
	render(){
		return <div className="panel">
			<h4>{this.props.name}</h4>
			{this.props.children}
		</div>;
	}
}

class KeyBlock{
	render(){
		return <div className="key-block">
			<div>{this.props.keyName} :</div>
			<div className="key-block-block"
						style={{backgroundColor:this.props.bgColor}}>
						<div style={{margin:'auto', display:'inline-block'}}>{this.props.blockText}</div>
			</div>
		</div>
	}
}

export default class ReducersToStore{
	render(){
		return <div className="full-height" style={{padding:'0 20px', position:'relative'}}>
      <h2 style={{marginTop:'2em'}}>Reducers and the Store</h2>
			<Diagram>
				<Panel name="Root Reducer">
					<KeyBlock keyName="follows" bgColor="turquoise" blockText="reducer"/>
					<KeyBlock keyName="apiKey" bgColor="salmon" blockText="reducer"/>
					<KeyBlock keyName="parkPhotos" bgColor="skyblue" blockText="reducer"/>
					<KeyBlock keyName="parks" bgColor="papayawhip" blockText="reducer"/>
				</Panel>
				<Panel name="Store">
					<KeyBlock keyName="follows" bgColor="turquoise" blockText="data"/>
					<KeyBlock keyName="apiKey" bgColor="salmon" blockText="data"/>
					<KeyBlock keyName="parkPhotos" bgColor="skyblue" blockText="data"/>
					<KeyBlock keyName="parks" bgColor="papayawhip" blockText="data"/>
				</Panel>
			</Diagram>
		</div>
	}
}