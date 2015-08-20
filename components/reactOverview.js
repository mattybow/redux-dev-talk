import React, {Component} from 'react';
import {IgPhotoDemo} from './igComps';

const preStyle = {
	color:'grey',
	display:'inline-block',
	cursor:'pointer',
	minWidth:435,
	WebkitUserSelect:'none',
	userSelect: 'none'
}

const igSampleData = {"attribution":null,"tags":["milkyway","glaciernps","northernlights","perseid","lakemcdonald"],"type":"image","location":{"latitude":48.4953384,"name":"Glacier National Park","longitude":-113.9815369,"id":213692596},"comments":{"count":113,"data":[{"created_time":"1439432136","text":"@trganz we need to add this to our list for next year!","from":{"username":"andrewcbassett","profile_picture":"https://instagramimages-a.akamaihd.net/profiles/profile_14186205_75sq_1377116174.jpg","id":"14186205","full_name":"andrewcbassett"},"id":"1050355348076162498"},{"created_time":"1439432145","text":"@___mariapaula","from":{"username":"sbaj93101","profile_picture":"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xtf1/t51.2885-19/10958496_918652964832158_871047570_a.jpg","id":"360939906","full_name":"Adamj"},"id":"1050355420000087500"},{"created_time":"1439432154","text":"@wkay","from":{"username":"stu02","profile_picture":"https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11242857_1628997534052043_187821754_a.jpg","id":"424568","full_name":"Stu Hill"},"id":"1050355502493658586"},{"created_time":"1439432158","text":"@whatdoesthefoxsea  The northern lights are there too!","from":{"username":"al_lamby","profile_picture":"https://instagramimages-a.akamaihd.net/profiles/profile_44094886_75sq_1343269161.jpg","id":"44094886","full_name":""},"id":"1050355533313404384"},{"created_time":"1439432178","text":"Never been there at night-adding to my bucket list STAT","from":{"username":"healersintuit","profile_picture":"https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/11421992_1592209657690279_1131819991_a.jpg","id":"2114548745","full_name":"Healers Intuit"},"id":"1050355700901015027"},{"created_time":"1439432180","text":"@brksdallas","from":{"username":"grace_stulb","profile_picture":"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11261351_480036765490286_576097951_a.jpg","id":"4283765","full_name":"Grace Stulb"},"id":"1050355718097661430"},{"created_time":"1439432207","text":"@sophiegerry11","from":{"username":"gabegerry12","profile_picture":"https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/11205746_1413552888966146_1017841273_a.jpg","id":"1475160093","full_name":"Gabe Gerry⚽"},"id":"1050355945621876232"},{"created_time":"1439432209","text":"@cbiancullo next big adventure?","from":{"username":"erinhaugh","profile_picture":"https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11049190_581309852006011_955958420_a.jpg","id":"322221521","full_name":"Erin Haugh"},"id":"1050355961400847883"}]},"filter":"Normal","created_time":"1439431363","link":"https://instagram.com/p/6Tlrmlgu34/","likes":{"count":4520,"data":[{"username":"emmza_22","profile_picture":"https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11326351_926020970803999_347796800_a.jpg","id":"2128280703","full_name":"Emma Mathis"},{"username":"_santangelo_","profile_picture":"https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11419224_653592354775039_986090668_a.jpg","id":"2134104122","full_name":"Sara ʂąŋɬąŋɠɛƖơ"},{"username":"talhacena","profile_picture":"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11849219_567346676737564_1803638573_a.jpg","id":"2127084731","full_name":"Talha qadeer"},{"username":"chiefhahn","profile_picture":"https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11372292_852306801526551_2057653315_a.jpg","id":"2133341895","full_name":"Michael Hahn"}]},"images":{"low_resolution":{"url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11421969_1485388691774571_1084180537_n.jpg","width":320,"height":320},"thumbnail":{"url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11421969_1485388691774571_1084180537_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11421969_1485388691774571_1084180537_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1439431363","text":"All day today @Glaciernps is highlighting the TOP 5 things to photograph when visiting the park. \nNo. 5: Night Sky 🌠\nDon’t forget that “Half the park is after dark.” If you are lucky enough to be here during a showing of the #northernlights, #LakeMcDonald offers open views to the north. We also have spectacular dark skies for viewing the stars (and tonight's #perseid meteor shower). Check out the head of Lake McDonald, foot of Saint Mary Lake and Logan Pass for great views of the #MilkyWay May through October. Photo by Jacob W. Frank, National Park Service. \nThanks for all your questions and comments! We look forward to seeing you when you visit. We have more photo suggestions at go.nps.gov/photography. Be sure to tag your photos with #GlacierNPS and follow us at @glaciernps!","from":{"username":"usinterior","profile_picture":"https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/11375303_1613427185591520_2039014076_a.jpg","id":"174435186","full_name":"U.S. Department of the Interior"},"id":"1050348863707344653"},"user_has_liked":false,"id":"1050348862197394936_174435186","user":{"username":"usinterior","profile_picture":"https://instagramimages-a.akamaihd.net/profiles/profile_174435186_75sq_1340285291.jpg","id":"174435186","full_name":"U.S. Department of the Interior"}};
const reactTopics = "components props expressions composability lifecycle shouldComponentUpdate".split(' ');

export default class ReactOverview extends Component{
	constructor(props){
		super(props);
		this.state = {topicIndex:0};
	}
	nextTopic(){
		this.setState({topicIndex:this.state.topicIndex+1});
	}
	render(){
		const index = this.state.topicIndex % reactTopics.length;
		return (<div>
			<h2>React <span onClick={::this.nextTopic} style={preStyle}>{reactTopics[index]}</span></h2>
			<IgPhotoDemo data={igSampleData}/>
		</div>);
	}
}