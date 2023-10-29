import { useRef } from "react";

function AnimateHovering(card, mouse) {
  const height = card.clientHeight;
  const width = card.clientWidth;

  const { layerX, layerY } = mouse.nativeEvent;
  const yRotation = ((layerX - width / 2) / width) * 20;
  const xRotation = ((layerY - height / 2) / height) * 20;

  const styleString = `
    perspective(500px)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)
  `;

  card.style.transform = styleString;
}

function ResetAnimationHovering(card) {
  const styleString = `
    perspective(500px)
    rotateX(0)
    rotateY(0)
  `;

  card.style.transform = styleString;
}

// eslint-disable-next-line react/prop-types
function AnimatedCard({ children }) {
  const cardRef = useRef(null);
  const card = (
    <div
      ref={cardRef}
      className="animated-card"
      onMouseMove={(e) => AnimateHovering(card.ref.current, e)}
      onMouseOut={() => ResetAnimationHovering(card.ref.current)}
    >
      {children}
    </div>
  );
  return card;
}

export default AnimatedCard;
