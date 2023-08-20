/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LinearMessagesConversationPenNewSquare3 } from "../../icons/LinearMessagesConversationPenNewSquare3";
import { Post } from "../Post";
import "./style.css";

export const CollectivePosts = ({
  className,
  postAvatarRoundedImage = "https://generation-sessions.s3.amazonaws.com/bf8fb1a460406ac60f67d0ee21076541/img/avatar-rounded-image-17@2x.png",
  postIcon = <LinearMessagesConversationPenNewSquare3 className="linear-messages-conversation-pen-new-square-2" />,
  postImageRoundedClassName,
  postIconClock = "https://generation-sessions.s3.amazonaws.com/22cd7392761006b09fe9c0427e90574f/img/---icon--clock--15@2x.png",
  override = <LinearMessagesConversationPenNewSquare3 className="linear-messages-conversation-pen-new-square-2" />,
  postIcon1 = <LinearMessagesConversationPenNewSquare3 className="linear-messages-conversation-pen-new-square-2" />,
}) => {
  return (
    <div className={`collective-posts ${className}`}>
      <Post
        avatarRoundedImage="https://generation-sessions.s3.amazonaws.com/bf8fb1a460406ac60f67d0ee21076541/img/avatar-rounded-image-17@2x.png"
        icon={postIcon1}
        iconClock="https://generation-sessions.s3.amazonaws.com/22cd7392761006b09fe9c0427e90574f/img/---icon--clock--15@2x.png"
      />
      <Post
        avatarRoundedImage={postAvatarRoundedImage}
        icon={postIcon}
        iconClock={postIconClock}
        imageRoundedClassName={postImageRoundedClassName}
      />
      <Post
        avatarRoundedImage="https://generation-sessions.s3.amazonaws.com/bf8fb1a460406ac60f67d0ee21076541/img/avatar-rounded-image-17@2x.png"
        icon={override}
        iconClock="https://generation-sessions.s3.amazonaws.com/22cd7392761006b09fe9c0427e90574f/img/---icon--clock--15@2x.png"
      />
    </div>
  );
};

CollectivePosts.propTypes = {
  postAvatarRoundedImage: PropTypes.string,
  postIconClock: PropTypes.string,
};
