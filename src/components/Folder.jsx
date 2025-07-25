import { useState } from "react";
import { createPortal } from "react-dom";
import "./Folder.css";

const darkenColor = (hex, percent) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder = ({
  color = "#5227FF",
  size = 1,
  className = "",
  label = "",
  thumbnails = [],
}) => {
  const maxItems = 3;
  const papers = thumbnails.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  const handleClick = () => {
    setOpen((prev) => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const handleThumbnailClick = (media, index) => {
    if (open) {
      setSelectedMedia(media);
    }
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = () => {
    console.log("Sharing media");
  };

  const folderStyle = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  };

  const folderClassName = `folder ${open ? "open" : ""}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <>
      <div style={scaleStyle} className={className}>
        <div
          className={folderClassName}
          style={folderStyle}
          onClick={handleClick}
        >
          <div className="folder__back">
            {papers.map((thumbnail, i) => (
              <div
                key={i}
                className={`paper paper-${i + 1}`}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleThumbnailClick(thumbnail, i);
                }}
                style={
                  open
                    ? {
                        "--magnet-x": `${paperOffsets[i]?.x || 0}px`,
                        "--magnet-y": `${paperOffsets[i]?.y || 0}px`,
                      }
                    : {}
                }
              >
                {thumbnail && (
                  <div className="thumbnail-container">
                    {thumbnail.type === "video" ? (
                      <video
                        src={thumbnail.src}
                        muted
                        loop
                        playsInline
                        className="thumbnail-media"
                      />
                    ) : (
                      <img
                        src={thumbnail.src}
                        alt=""
                        className="thumbnail-media"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="folder__front"></div>
            <div className="folder__front right"></div>
          </div>
        </div>
        {label && <div className="folder-label">{label}</div>}
      </div>

      {selectedMedia &&
        createPortal(
          <div className="media-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">{selectedMedia.title || "Media"}</h2>
                <button className="close-modal" onClick={closeModal}>
                  ×
                </button>
              </div>
              <div className="modal-body">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="full-media"
                  />
                ) : (
                  <img src={selectedMedia.src} alt="" className="full-media" />
                )}
              </div>
              
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Folder;