import type React from "react"

export const Video = ({ src, poster }: { src: string; poster?: string }) => {
    return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                poster={poster}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                style={
                    {
                        "--webkit-media-controls-fullscreen-button": "none",
                        mediaControlsFullscreenButton: "none",
                    } as React.CSSProperties
                }
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
