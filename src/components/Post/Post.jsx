import PropTypes from "prop-types";
import React, { useState } from "react";
import { IconButton } from "rsuite";
import Popup from "reactjs-popup";
import { PopUp } from "../PopUp";
import { LinearEssentionalUiTrashBin314 } from "../../icons/LinearEssentionalUiTrashBin314";
import { LinearHomeFurnitureArmchair29 } from "../../icons/LinearHomeFurnitureArmchair29";
import { LinearMapLocationMapPoint16 } from "../../icons/LinearMapLocationMapPoint16";
import { LinearMessagesConversationPenNewSquare3 } from "../../icons/LinearMessagesConversationPenNewSquare3";
import { LinearMessagesConversationPlain15 } from "../../icons/LinearMessagesConversationPlain15";
import "./style.css";

export const Post = ({
  avatarRoundedImage="https://generation-sessions.s3.amazonaws.com/bf8fb1a460406ac60f67d0ee21076541/img/avatar-rounded-image-17@2x.png",
  iconClock="https://generation-sessions.s3.amazonaws.com/bf8fb1a460406ac60f67d0ee21076541/img/---icon--clock--15@2x.png",
  title,
  location,
  category,
  picture,
  description,
  date,
  onDelete,
  onEditDone,
  id,
}) => {

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="post">
      <img className="image-rounded" alt="Post picture" src={picture} />
      <div className="input-group">
        <div className="text-wrapper-5">Write a comment...</div>
        <LinearMessagesConversationPlain15 className="linear-messages" color="#4C6FFF" />
      </div>
      <div className="overlap-group-2">
        <img className="avatar-rounded-image" alt="Avatar rounded image" src={avatarRoundedImage} />
        <div className="content">
          <div className="div-3">
            <div className="div-3">
              <div className="text-wrapper-6">{title}</div>
              <div className="div-4">
                <img className="icon-clock" alt="Icon clock" src={iconClock} />
                <div className="text-wrapper-7">{date}</div>
              </div>
            </div>
            <div className="div-4">
              <LinearMapLocationMapPoint16 className="linear-map-location" />
              <div className="text-wrapper-8">{location}</div>
            </div>
          </div>
          <div className="description-content">
            <div className="category-chip">
              <LinearHomeFurnitureArmchair29 className="linear-home-furniture-armchair-2-9" />
              <div className="category-text">
                <div className="text-wrapper-9">{category}</div>
              </div>
            </div>
            <p className="p">{description}</p>
          </div>
        </div>
        <div className="frame">
          <IconButton className="bin-button" icon={<LinearEssentionalUiTrashBin314 />} onClick={() => onDelete()}></IconButton>
          <IconButton className="edit-button" icon={<LinearMessagesConversationPenNewSquare3 />} onClick={() => setPopupOpen(true)}></IconButton>
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
              onDoneClick={onEditDone} // Pass the callback function
              postId={id}
            />
          )}
        </Popup>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  avatarRoundedImage: PropTypes.string,
  iconClock: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired, // Add onDelete prop type
  onEditDone: PropTypes.func.isRequired, // Add onEdit prop type
  id: PropTypes.number,
};