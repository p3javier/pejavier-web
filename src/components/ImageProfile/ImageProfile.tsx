import React, { useState, useEffect } from "react";

const ImageProfile = () => {
  const [translate, setTranslate] = useState("-translate-y-96");

  useEffect(() => {
    setTranslate("translate-y-0");
  }, []);

  return (
    <img
      src="images/avatar.webp"
      alt="Javier Perez"
      className={`z-0 rounded-full w-40 h-40 max-w-xs border-8 duration-2000 relative transform transition-all ${translate} ease-out`}
    />
  );
};

export default ImageProfile;
