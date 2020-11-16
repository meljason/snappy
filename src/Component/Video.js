import React, { useRef, useState } from 'react';
import '../video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video className="video__player" loop ref={videoRef} onClick={onVideoPress} src="https://v77.tiktokcdn.com/a197dfab135f4fc3392732ceb534847d/5fb2f12f/video/tos/alisg/tos-alisg-pve-0037c001/19a141e49c6040e1bd9546efffa982a5/?a=1233&br=1250&bt=625&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020111615374001019021820346018970&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajl1eDN3OGc5eDMzMzczM0ApPGY3NjVkOjw8N2VoNGU1N2dzZmZeNnBxbl5fLS1iMTRzczYwMmA0X2JjMDBiLWM1YjY6Yw%3D%3D&vl=&vr="></video>
            <VideoFooter channel="jasoncwy" description="This is my descroption of my drawing" song="Allan Walker - Fade"/>
            <VideoSidebar likes={111} messages ={222} shares={333}/>
        </div>
    )
}

export default Video
