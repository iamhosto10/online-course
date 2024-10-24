import React from "react";

interface IProps {
  url: string;
}

function VideoComponent({ url }: IProps) {
  return (
    <video width={1000} height={250} controls className="rounded-sm">
      <source src={url} type="video/mp4" />
    </video>
  );
}

export default VideoComponent;
