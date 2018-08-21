import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel='Selected Option'
  >

    <h3>Selected Option </h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClearSelectedOption}>close</button>
  </Modal>
);

export default OptionModal;
