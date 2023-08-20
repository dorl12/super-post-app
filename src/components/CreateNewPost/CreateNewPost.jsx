import React, { useState } from "react";
import { LinearEssentionalUiAddCircle1 } from "../../icons/LinearEssentionalUiAddCircle1";
import Popup from "reactjs-popup";
import { PopUp } from "../PopUp";
import "./style.css";

export const CreateNewPost = ({
  onDoneClick,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="overlay-container">
      <button
        className="create-new-post"
        onClick={() => setPopupOpen(true)}
      >
        <div className="text">
          <div className="text-wrapper-15">Create New Post</div>
        </div>
        <LinearEssentionalUiAddCircle1
          className="linear-essentional-ui-add-circle-1"
          color="#4C6FFF"
        />
      </button>
      {popupOpen && <div className="overlay" onClick={() => setPopupOpen(false)} />}
      <Popup
      open={popupOpen}
      onClose={() => setPopupOpen(false)}
      modal
      closeOnDocumentClick={false}
    >
      {close => (
        <PopUp
          onClose={close}
          onDoneClick={onDoneClick} // Pass the callback function
        />
      )}
    </Popup>
    </div>
  );
};
