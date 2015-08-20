export default function dateTimeValue(seconds){
	const diff = new Date().valueOf() - parseInt(seconds*1000);
	let suffix = '';
	let val = 0;
	const sec = 1000;
	const min = sec * 60;
	const hr = min * 60;
	const day = hr * 24;
	const wk = day * 7;
	const yr = day * 365;
	if(diff < min){
		val = Math.round(diff/sec);
		suffix = 's';
	} else if (diff < hr){
		val = Math.round(diff/min);
		suffix = 'm';
	} else if (diff < day){
		val = Math.round(diff/hr);
		suffix = 'h'
	} else if (diff < wk * 2){
		val = Math.round(diff/day);
		suffix = 'd'
	} else if (diff < yr * 2){
		val = Math.round(diff/wk);
		suffix = 'w'
	} else {
		val = Math.round(diff/yr);
		suffix = 'y'
	}
	return `${val}${suffix}`;
}