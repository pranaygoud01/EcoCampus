import React from "react";
import Popup from "./Popup";

const TermsPopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <p>
        Here are our Terms of Service. You agree not to misuse our platform and
        follow community guidelines. By using this service, you also accept that
        content may be moderated for safety...
      </p>
    </Popup>
  );
};

export default TermsPopup;
