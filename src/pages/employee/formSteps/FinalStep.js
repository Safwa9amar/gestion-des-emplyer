import React, { useEffect, useState } from "react";

const ImageUpload = ({ onImageSelect, setActiveStep }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);

      // Pass the selected image to the parent component
      onImageSelect(file);
    }
  };
  useEffect(() => {
    setActiveStep(5);
  }, [setActiveStep]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="imageInput"
      />
      <label htmlFor="imageInput" className="cursor-pointer">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-32 h-32 object-cover rounded"
          />
        ) : (
          <div className="w-32 h-32 border-dashed border-2 border-gray-300 flex items-center justify-center rounded">
            <span className="text-gray-400">Select an image</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
