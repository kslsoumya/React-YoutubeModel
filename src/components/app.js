import React, { Component } from 'react';
import Search from './search_bar';
import VideosList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyBDjouR2A80Fz4IJEcr7tv9yY419RixO0g';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state ={ videos :[]};
    this.onSearch('laptops');
    
  }

  onSearch(term) {
    YTSearch({ key: API_KEY, term: term },(videos) => {
      // console.log(data);
      this.setState(
        {videos : videos,
        selectedVideo : videos[0]});
    });

  }

  render() {
    const videoSearch = _.debounce((term) => {this.onSearch(term)},500 );

    return (
      <div>
      <Search  onSearchTermChange ={videoSearch}/>
      <div className ='row'>
      <VideoDetail video ={this.state.selectedVideo} />
      <VideosList onVideoClick = {(selectedVideo) => this.setState({selectedVideo})} 
      videos ={this.state.videos} />
      </div>
      </div>
      // <div> Hiii soumya</div>
    );
  }
}