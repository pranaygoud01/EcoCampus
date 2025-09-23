import React from "react";
import Popup from "./Popup";

const PrivacyPopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <p>
        We respect your privacy and are committed to protecting your data. This
        Privacy Policy explains how we collect, use, and safeguard your
        information while using our services...
      </p>
    </Popup>
  );
};

export default PrivacyPopup;
