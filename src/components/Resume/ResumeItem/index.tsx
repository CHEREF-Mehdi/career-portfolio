import * as React from 'react';
import store from '../../../store';
import { setSelectedScientificPapersAction } from '../../../store/ducks/resume';

const LinkTag: React.FC<{ link: string }> = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {' '}
      <i className='fa fa-link' aria-hidden='true'></i> Link{' '}
    </a>
  );
};

function mapLinkList(links: string[]) {
  return (
    <>
      {links.map((link, key) => (
        <LinkTag key={key} link={link} />
      ))}
    </>
  );
}

function mapContent(
  content: NS_ReduxNS.IContent[],
  mapLinks: 'TOP' | 'BOTTOM' | undefined
) {
  return (
    <>
      {content.map((value, key) => {
        return (
          <div
            key={key}
            id={value.abstract ? '#accordion' + value.id : undefined}
          >
            <p className='line-text'>
              {value.describtion}
              {mapLinks === 'TOP' && mapLinkList(value.links)}
            </p>
            {value.tools && (
              <p className='line-text' style={{ fontWeight: 'bold' }}>
                {value.tools}
                {mapLinks === 'BOTTOM' && mapLinkList(value.links)}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

interface IResumeItem {
  item: NS_ReduxNS.IResumeItem;
  mapLinks?: 'TOP' | 'BOTTOM';
  index: number;
}

export const ResumeItem: React.FC<IResumeItem> = ({
  item,
  mapLinks,
  index,
}) => {
  const { title, year, content, id } = item;
  
  const onReadAbstractClick = (selectedPaper: number) => {
    store.dispatch(setSelectedScientificPapersAction(selectedPaper));
  };

  return (
    <li>
      <div
        className='content-text div-rotate'
        style={{ position: 'relative', cursor: id ? 'pointer' : '' }}
        data-toggle='collapse'
        data-target={`#collapse${id}`}
        aria-expanded='true'
        aria-controls={`#collapse${id}`}
      >
        {id || content[0]?.abstract ? (
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            {id ? (
              <i className='fas fa-chevron-circle-left rotate' />
            ) : (
              <p
                className='abstract'
                data-toggle='modal'
                data-target='#Modal'
                onClick={() => onReadAbstractClick(index)}
              >
                <small>
                  <u>Read abstract</u>
                </small>
              </p>
            )}
          </div>
        ) : (
          ''
        )}
        <h3 className='line-title'>{title}</h3>
        {year && <span dangerouslySetInnerHTML={{ __html: year }}></span>}
        {id ? (
          <div id={`#accordion${id}`}>
            <div
              id={`collapse${id}`}
              className='collapse'
              data-parent={`#accordion${id}`}
            >
              {mapContent(content, mapLinks)}
            </div>
          </div>
        ) : (
          mapContent(content, mapLinks)
        )}
      </div>
    </li>
  );
};
