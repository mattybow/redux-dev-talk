import React, {findDOMNode} from 'react';
import {connect} from 'react-redux';
import {setParkFilter} from '../../actions/igActions';

function selectParkFilter(state){
	return {parkListFilter:state.parkListFilter};
}

class IgParksFilter{
	setParkFilter(name){
		findDOMNode(this.refs.search_ref).value = '';
		this.props.dispatch(setParkFilter(name));
	}
	setSearchTerm(name,e){
		const {currentTarget:{value}} = e;
		console.log(value);
		this.props.dispatch(setParkFilter(name, value));
	}
	render(){
		return <div className="flex-parent-row park-filters">
			{this.renderSearch('search')}
			{this.renderToggle('all')}
			{this.renderToggle('following')}
		</div>;
	}
	renderSearch(name){
		return <div className="search-box-container flex-child-expand">
			<input className={this.isActive(name) ? 'active' : 'inactive'} 
					onClick={this.setParkFilter.bind(this,name)}
					onKeyUp={this.setSearchTerm.bind(this,name)}
					id="search-box"
					ref="search_ref"
					type="text" 
					placeholder="search"/>
		</div>;
	}
	renderToggle(name){
		const filterClass = `filter ${this.isActive(name) ? 'active' : 'inactive'}`;
		return <div className={filterClass} 
					onClick={this.setParkFilter.bind(this,name)}>
					{name}
				</div>;
	}
	isActive(name){
		return this.props.parkListFilter.name === name;
	}
}

export default connect(selectParkFilter)(IgParksFilter)