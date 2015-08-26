import React from 'react';
import {Link} from 'react-router';

export default class IgNav{
	render(){
		return <div id="ig-nav" className="flex-parent-row">
			{this.renderLink('feed','/igapp')}
			{this.renderLink('parks','/igapp/parks')}
		</div>;
	}
	renderLink(name, path){
		const activeClass = this.props.activeLink === name ? 'active' : 'inactive';
		const linkClass = `ig-nav-links ${activeClass}`;
		return (<span className={linkClass} >
			<Link to={path}>{name}</Link>
		</span>);
	}
}