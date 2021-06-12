import { useState, useRef } from "react";

import { Cta } from "@/components/video-cta/cta";
import { Modal } from "@/components/video-cta/modal";

export const VideoCta = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <>
      <Cta>
        <Cta.Title>Relationships and Honesty</Cta.Title>
        <Cta.Paragraph>
          We wanted to re-share this content from a Simon Sinek interview from
          May 25, 2021. What he talks about in this short clip perfectly
          articulates our feelings on how genuinely important relationships,
          caring and honesty are to Endure Consulting.
        </Cta.Paragraph>
        <Cta.Trigger
          onClick={() => {
            setOpen(true);
          }}
        >
          Watch Video
        </Cta.Trigger>
      </Cta>
      <Modal initialFocus={videoRef} open={open} setOpen={setOpen}>
        <div className="video-container">
          <iframe
            ref={videoRef}
            src="https://www.youtube-nocookie.com/embed/ttVQ9WCEgkA?&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
};
