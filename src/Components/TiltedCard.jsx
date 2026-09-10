import { useState } from "react";

export default function TiltedCard({
  imageSrc,
  altText = "",
  captionText,
  containerHeight = "340px",
  containerWidth = "280px",
  imageHeight = "340px",
  imageWidth = "280px",
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setRotation({
      x: -y * rotateAmplitude,
      y: x * rotateAmplitude,
    });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <figure
      className="relative overflow-visible"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "900px",
      }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetRotation}
    >
      <div
        className="relative overflow-hidden bg-neutral-900 shadow-2xl"
        style={{
          height: imageHeight,
          width: imageWidth,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? scaleOnHover : 1})`,
          transition: isHovered ? "transform 80ms ease-out" : "transform 300ms ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full object-cover"
          draggable="false"
        />
        {displayOverlayContent && overlayContent}
      </div>
      {showTooltip && isHovered && captionText && (
        <figcaption className="pointer-events-none absolute -bottom-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 text-xs text-black shadow-lg">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
