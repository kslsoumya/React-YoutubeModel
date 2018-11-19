import  React from 'react'
import VideoListItem from './video_list_item';

const VideosList =(props) =>{

    const videoLists = props.videos.map((video)=>{
      return  <VideoListItem  onVideoClick ={props.onVideoClick} key ={video.etag}  video = {video} />
    })
    return( 
        
    <ul className ='col-md-4 list-group'>
    {videoLists}

    </ul>
    );
}


export default VideosList;