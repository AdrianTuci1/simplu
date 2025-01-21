import React, { useState } from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import "./imagebox.css";

const ImageBox: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [clinicLogo, setClinicLogo] = useState<string | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "background" | "logo"
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileURL = URL.createObjectURL(file);

      if (type === "background") {
        setBackgroundImage(fileURL);
      } else if (type === "logo") {
        setClinicLogo(fileURL);
      }
    }
  };

  const handleRemoveImage = () => {
    setBackgroundImage(null);
  };


  return (
    <div className="clinic-info-container">
      {/* Background Container */}
      <div className="background-container rectangle" >
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Background"
            className="background-image"
          />
        ) : (
          <div className="dotted-box background-placeholder">
            <FaImage size={30} />
            <span>No Background Image</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="background-buttons">
          <label htmlFor="background-input" className="action-button">
            {backgroundImage ? (
              <>
                <FaEdit className="icon" /> Change Image
              </>
            ) : (
              <>
                <FaImage className="icon" /> Add Image
              </>
            )}
          </label>
          {backgroundImage && (
            <button
              className="action-button remove-button"
              onClick={handleRemoveImage}
            >
              <FaTrash className="icon" /> Remove Image
            </button>
          )}
          <input
            type="file"
            id="background-input"
            accept="image/*"
            className="hidden-input"
            onChange={(e) => handleImageChange(e, "background")}
          />
        </div>
      </div>

      {/* Content */}
      <div className="content-container">
        {/* Logo and Clinic Info */}
        <div
          className="logo-container"
          onClick={() => document.getElementById("logo-input")?.click()}
        >
          {clinicLogo ? (
            <img src={clinicLogo} alt="Clinic Logo" className="logo" />
          ) : (
            <div className="dotted-box ">
              <FaImage size={20} className="icon" />
              <span>Add Logo</span>
            </div>
          )}
          <input
            type="file"
            id="logo-input"
            accept="image/*"
            className="hidden-input"
            onChange={(e) => handleImageChange(e, "logo")}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;