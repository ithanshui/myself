import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
var lightbox=require('../js/lightbox');
var flickr=require("../js/FlickrApi.json");//由于GFW,直接从flickr API抓取需要用户翻墙，所以将抓取到的json文件存放在了本地
var lazyload=require('../js/jquery.lazyload.min');
require('../css/style.css');//由于样式较少，并未使用Stylus或者sass
require('../css/lightbox.css');
var Gallery=React.createClass({
		 		getInitialState:function(){return{listStyle:"btn-list-on",
		 			gridStyle:"btn-grid-off",
		 			photoClass:"photoLine lazy"};
		 		},
		 		clickGrid:function(event){
		 			this.setState({listStyle:"btn-list-off",
		 			gridStyle:"btn-grid-on",
		 			photoClass:"photoGrid lazy"});
		 		},
		 		clickList:function(event){
		 			this.setState({listStyle:"btn-list-on",
		 			gridStyle:"btn-grid-off",
		 			photoClass:"photoLine lazy"});
		 		},
		 		componentDidMount: function () {
		 			$("img.lazy").lazyload();
		 		},
		 		render:function(){
		 			var list=this.state.listStyle;
		 			var grid=this.state.gridStyle;
		 			var photoclass=this.state.photoClass
		 			var photo=new Array();
				 	for(let i=0;i<flickr.photoset.photo.length;i++){
				 		let key=i;
				 	     photo.push(<a key={key} href={flickr.photoset.photo[i].url_o} data-lightbox="group"><img key={key}  data-original={flickr.photoset.photo[i].url_o} className={photoclass} src="img/loadingPic.jpg"/></a>)
				 	}
		 			return(
		 			<div id="main">
		 			<div className="nav">
		 			<div className="box">
			<a href="#" className={list} onClick={this.clickList}></a>
			<a href="#" className={grid} onClick={this.clickGrid}></a>
			</div>
			</div>
				<div className="pic">{photo}</div>
			</div>
		 			);
		 		}
		 	});
		export default Gallery;