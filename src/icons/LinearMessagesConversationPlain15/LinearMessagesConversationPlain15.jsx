/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinearMessagesConversationPlain15 = ({ color = "#4C6FFF", className }) => {
  return (
    <svg
      className={`linear-messages-conversation-plain-15 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M16.2116 8.84847C16.5061 8.55721 16.5087 8.08234 16.2174 7.78783C15.9262 7.49332 15.4513 7.49068 15.1568 7.78195L16.2116 8.84847ZM10.6626 14.3362L16.2116 8.84847L15.1568 7.78195L9.60787 13.2697L10.6626 14.3362Z"
        fill={color}
      />
    </svg>
  );
};

LinearMessagesConversationPlain15.propTypes = {
  color: PropTypes.string,
};
