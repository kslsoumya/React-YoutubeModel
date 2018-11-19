import React from 'react'

const VideoListItem =({video, onVideoClick}) =>{

    const videoTitle = video.snippet.title;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li  onClick = {()=>onVideoClick(video)} className= 'list-group-item'>
        <div className = 'vide-item media'>
        <div className ='media-left mr-3'>
        <img className = 'media-object' src ={imageUrl}  alt ='movieImage' />
        </div>
        <div className='media-body'>
        <div className ='media-heading'>
        {videoTitle}
        </div>
        </div>
        </div>
        
        </li>
    )
}

export default VideoListItem;