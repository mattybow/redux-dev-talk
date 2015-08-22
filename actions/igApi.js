import Promise from 'bluebird';
import request from 'superagent';
import superagentHack from 'superagent-jsonp';

superagentHack(request);

function fetch(url){
	return new Promise((resolve,reject)=>{
		request.get(url)
		.jsonp()
		.end((err,res)=>{
			if(err){
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
}

export function getUserInfo(key){
	let url = `https://api.instagram.com/v1/users/self/?access_token=${key}`;
	return fetch(url);
}

export function getParkPhotos(key, parkId){
	let url = `https://api.instagram.com/v1/locations/${parkId}/media/recent?access_token=${key}`;
	return fetch(url);
}