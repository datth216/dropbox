import React from 'react'

function VideoClip() {
    return (
        <section className="mt-[72px]">
            <video autoPlay loop muted>
                <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default VideoClip