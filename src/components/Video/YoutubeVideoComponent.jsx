import React from 'react';
import ReactPlayer from 'react-player/lazy'
function YoutubeVideoComponent({ embedId }) {
    return (
        <div className="player-wrapper my-5">
            <ReactPlayer
                className='react-player'
                width='100%'
                playing
                controls
                muted
                height={500}
                url={`https://www.youtube.com/watch?v=${embedId}`}
            />
        </div>
    );
}

export default YoutubeVideoComponent;