import PropTypes from "prop-types";
import React, { useState } from "react";
import { LinearArrowsAltArrowDown2 } from "../../icons/LinearArrowsAltArrowDown2";
import { IconsOperations } from "../IconsOperations";
import "./style.css";

export const PopUp = ({
  className,
  headerOptions = "https://generation-sessions.s3.amazonaws.com/90a65aacb9c3c986b76dad859ee48d06/img/header-options.svg",
  onClose,
  onDoneClick, // Add this prop
}) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleDoneClick = () => {
    const newPost = {
      title,
      location,
      category,
      description,
      picture: uploadedFile ? URL.createObjectURL(uploadedFile) : null,
    };
  
    if (onDoneClick) {
      onDoneClick(newPost); // Call the callback to send the new post data
      onClose();
    }
  };
  

    const handleFrame2Click = () => {
    // Trigger the file input click event
    document.getElementById("file-input").click();
  };

  return (
    <div className={`pop-up ${className}`}>
      <div className="overlap-group">
        <img
          className="header-options"
          alt="Header options"
          src={headerOptions}
          onClick={onClose}
        />
        <div className="title-input">
          <input
            type="text"
            className="title-input-box"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
      </div>
      <div className="done-button">
        <div className="div" onClick={handleDoneClick}>Done</div>
      </div>
      <div className="location-input">
        <input
          type="text"
          className="location-input-box"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
      </div>
      <div className="date-category-inputs">
        <div className="category-input">
          <select
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Rentals">Rentals</option>
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Appliances">Appliances</option>
          </select>
          <LinearArrowsAltArrowDown2 className="linear-arrows-alt" color="#4C6FFF" />
        </div>
      </div>
      <div className="frame">
        <div className="frame-2" onClick={handleFrame2Click}>
          <div className="text-wrapper-2">Choose File To Upload</div>
          <IconsOperations className="icons-operations-data-upload" />
        </div>
        <p className="or-drag-drop-a-file">Or drag &amp; drop a file here</p>
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </div>
      <div className="description-input">
        <textarea
          value={description}
          className="description-input-box"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a description..."
        />
      </div>
    </div>
  );
};

PopUp.propTypes = {
  headerOptions: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
