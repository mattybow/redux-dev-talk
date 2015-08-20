import React from 'react';
import calcDateTime from '../../utils/dateTimeValue';

export default class TimeDiff{
	render(){
		const dt = calcDateTime(this.props.created);
		return <span>{dt}</span>;
	}
}