import Modal from 'react-modal';
import React from 'react';

import { colors, zIndexes } from '../../styles/tokens';

import { container, close as closeButton } from './style';

Modal.setAppElement('#___gatsby');

const SearchModal = ({ children, isOpen, onClose, ...props }) => {
  const customStyles = {
    content: {
      alignItems: 'flex-start',
      backgroundColor: colors.background,
      border: 0,
      borderRadius: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      left: 0,
      padding: 0,
      right: 0,
      top: 0,
      zIndex: zIndexes.modal,
    },

    overlay: {
      zIndex: zIndexes.modal,
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} {...props}>
      <button
        type="button"
        aria-label="Schließen"
        css={closeButton}
        onClick={() => onClose()}
      >
        X
      </button>

      <div css={container}>{children}</div>
    </Modal>
  );
};

export default SearchModal;
