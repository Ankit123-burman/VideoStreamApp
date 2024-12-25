import React from 'react'

function VidePlayer() {
    const [video, setVideo] = React.useState('');

    const handelStreamVideo = () =>{
        setVideo('http://localhost:5000/video')
    }
  return (
    <>
    <div  >
        <h1>Video Streaming Click On The 'Stream Video' </h1>
        {
            video && (
                <video width="900" height="700" controls>
                    <source src={video} type="video/mp4" />
                </video>
            )

        }
        <button onClick={handelStreamVideo}>Stream Video</button>
    </div>
    </>
  )
}

export default VidePlayer