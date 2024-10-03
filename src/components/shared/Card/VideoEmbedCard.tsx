import React from "react";

const VideoEmbedCard = (props: any) => {
  const { videoCardTitle, videoURL } = props;

  return (
    <>
      {/* YouTube Video Embed */}
      {videoURL && (
        <div className="w-full border-2 rounded-lg h-full aspect-video float-none clear-both mx-auto hover:border-theme">
          <embed
            src={videoURL}
            type="video/mp4"
            width="100%"
            height="100%"
            title={videoCardTitle}
            className="rounded-lg focus:ring-2 focus:ring-theme focus:ring-offset-2"
          />
        </div>
      )}
    </>
  );
};

export default VideoEmbedCard;
