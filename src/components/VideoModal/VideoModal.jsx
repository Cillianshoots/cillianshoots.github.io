import { useContext } from "react";
import "./VideoModal.css";
import VideoModalContext from "./VideoModalContext";

function VideoModal() {
  const { videoModalSrc, setVideoModalSrc } = useContext(VideoModalContext);

  return (
    <div
      onClick={(event) => {
        if (!event.target.closest(".video-modal-image")) {
          setVideoModalSrc(null);
        }
      }}
      className={`video-modal ${
        videoModalSrc === null ? "video-hide-modal" : ""
      }`}
    >
      {videoModalSrc && (
        <iframe
          className="video-modal-iframe"
          src={`https://www.youtube.com/embed/${videoModalSrc}`}
        ></iframe>
      )}
      <div
        onClick={() => setVideoModalSrc(null)}
        className="material-symbols-outlined video-modal-close"
      >
        close
      </div>
    </div>
  );
}

export default VideoModal;
