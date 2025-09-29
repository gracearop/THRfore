import React from "react";

const ImageCard = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={name}
      />
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{name}</p>
    </div>
  );
};

export default ImageCard;
