import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/video.module.css';
import {RxCross2} from 'react-icons/rx'
import { ProgressSpinner} from 'primereact/progressspinner'

const Video = ({visible, onHide, onShow, src, title})=> {
    const videoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);

        let videoPlayer;
        script.onload = () => {
          videoPlayer = new window.YT.Player("video-player", {
            videoId: src,
            playerVars: {
              autoplay: 1,
              controls: 1, 
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
            events: {
              onError: (event) => {
                if (
                  event.data === window.YT.PlayerError.CONNECTION_ERROR ||
                  event.data === window.YT.PlayerError.SEEK_ERROR
                ) {
                  setIsLoading(false);
                  console.log("eerrr");
                }
              },
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.BUFFERING) {
                  setIsLoading(true);
                  console.log("buffering");
                } else if (event.data === window.YT.PlayerState.PLAYING) {
                  setIsLoading(false);
                }
              },
            },
          });

          videoRef.current = videoPlayer;
        }
      
        return () => {
          document.head.removeChild(script);
        };
      }, [src]);

    return (<>
    {
        visible &&

        <div className={styles.dialogContainer}>
            <div className={styles.container}>
                <div className='text-right'>
                    <RxCross2 className='cursor-pointer' onClick={onHide} />
                </div>
                <div id="video-player" />
                {isLoading && <ProgressSpinner />}
            </div>
        </div>
    }
        </>)
}

export default Video;
