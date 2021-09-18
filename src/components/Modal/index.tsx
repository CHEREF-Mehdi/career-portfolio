import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';

const styles: IClassNames = {
  modalContainer: { zIndex: 9999999 },
  modalBody: {
    background: 'black',
    boxShadow: '0 0 30px 5px rgba(255, 251, 251, 0.5)',
  },
  modalCloseBtn: { color: '#fff', opacity: 0.8 },
  abstractTextBody: { textAlign: 'justify', textJustify: 'inter-word' },
} as const;

export const Modal: React.FC = () => {
  const { scientificPapers } = useSelector(
    (state: IAppState) => state.careerData.resume
  );
  const { selectedItem, items } = scientificPapers;

  return (
    <div
      className='modal fade'
      id='Modal'
      style={styles.modalContainer}
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content' style={styles.modalBody}>
          <div className='modal-header'>
            <div id='ModalTitle'>
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
            </div>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              style={styles.modalCloseBtn}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body' id='ModalBody'>
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
          </div>
        </div>
      </div>
    </div>
  );
};
