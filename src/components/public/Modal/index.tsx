import * as React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../store/ducks/rootReducer';

const styles: IClassNames = {
  modalBody: {
    background: 'rgb(27, 27, 27)',
    boxShadow: '0 0 30px 5px rgba(255, 251, 251, 0.5)',
  },
  abstractTextBody: { textAlign: 'justify', textJustify: 'inter-word' },
} as const;

interface IModalCustom {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCustom: React.FC<IModalCustom> = ({
  openModal,
  setOpenModal,
}) => {
  const { scientificPapers } = useSelector(
    (state: IAppState) => state.careerData.resume
  );

  const { selectedItem, items } = scientificPapers;

  return (
    <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={openModal}
      className="CustomModal"
      style={styles.modalContainer}
      onHide={() => setOpenModal(false)}
    >
      <Modal.Body id='ModalBody' style={styles.modalBody}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            <a
              href={
                selectedItem !== undefined
                  ? items[selectedItem].content[0].links[0]
                  : undefined
              }
              target='_blank'
              rel='noreferrer'
            >
              <u>
                <h6 className='modal-title line-title'>
                  {selectedItem !== undefined &&
                    items[selectedItem].content[0].describtion}
                </h6>
              </u>
            </a>
            <span>
              <small>
                {selectedItem !== undefined && items[selectedItem].year}
              </small>
            </span>
          </Modal.Title>
        </Modal.Header>
        <h5 className='modal-title line-title'>
          <b>Abstract:</b>
        </h5>
        <div style={styles.abstractTextBody}>
          <small>
            <span>
              <i>
                <b>
                  {selectedItem !== undefined &&
                    items[selectedItem].content[0].abstract}
                </b>
              </i>
            </span>
          </small>
        </div>
      </Modal.Body>
    </Modal>
  );
};
