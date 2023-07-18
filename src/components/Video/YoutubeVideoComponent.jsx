import React from 'react';
import youtubeStyle from './youtubeStyle.css'
function YoutubeVideoComponent({ embedId }) {
    return (
        <div className="video-responsive my-5">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
}

export default YoutubeVideoComponent;