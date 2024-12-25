import React from 'react'

function VidePlayer() {
    const [video, setVideo] = React.useState('');

    const handelStreamVideo = () =>{
        setVideo('http://localhost:5000/video')
    }
  return (
    <>
    <div>
        <h1>Video Streaming</h1>
        <button onClick={handelStreamVideo}>Stream Video</button>
        {
            video && (
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4" />
                </video>
            )

        }
    </div>
    </>
  )
}

export default VidePlayer