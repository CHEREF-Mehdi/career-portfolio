import * as React from 'react';
import store from '../../../store';
import { setSelectedScientificPapersAction } from '../../../store/ducks/resume';
import ReactGa from 'react-ga';
import { GAEventCategories } from '../../../utils';

const LinkTag: React.FC<{ link: string; title: string; description: string }> =
  ({ link, title, description }) => {
    const onClick = () => {
      ReactGa.event({
        category: GAEventCategories.LINK_CLICK,
        action: title,
        label: description.substring(0,50),
      });
    };
    return (
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        onClick={onClick}
      >
        {' '}
        <i className='fa fa-link' aria-hidden='true'></i> Link{' '}
      </a>
    );
  };

function mapLinkList(links: string[], title: string, description: string) {
  return (
    <>
      {links.map((link, key) => (
        <LinkTag key={key} link={link} title={title} description={description}/>
      ))}
    </>
  );
}

function mapContent(
  content: NS_ReduxNS.IContent[],
  mapLinks: 'TOP' | 'BOTTOM' | undefined,
  title: string
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
              {mapLinks === 'TOP' &&
                mapLinkList(value.links, title, value.describtion)}
            </p>
            {value.tools && (
              <p className='line-text' style={{ fontWeight: 'bold' }}>
                {value.tools}
                {mapLinks === 'BOTTOM' && mapLinkList(value.links, title,value.describtion)}
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
  show?: boolean;
}

export const ResumeItem: React.FC<IResumeItem> = ({
  item,
  mapLinks,
  index,
  show = false,
}) => {
  const { title, year, content, id } = item;

  const [collapse, setCollapse] = React.useState(show);

  const onReadAbstractClick = (selectedPaper: number) => {
    store.dispatch(setSelectedScientificPapersAction(selectedPaper));
    ReactGa.event({
      category: GAEventCategories.READ_PAPER_ABSTRACT,
      action: content[0].describtion,
    });
  };

  const onExperienceExpend = (id: string | number | undefined) => {
    if (typeof id !== 'undefined') setCollapse(!collapse);

    if (typeof id === 'number') {
      let experience = year as string;
      const i = experience.indexOf('<');
      experience = i === -1 ? experience : experience.substring(0, i);

      ReactGa.event({
        category: GAEventCategories.COLLAPSE_EXPERIENCE,
        action: experience,
      });
    }
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
        onClick={() => onExperienceExpend(id)}
      >
        {id || content[0]?.abstract ? (
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            {id ? (
              <i
                className={`fas fa-chevron-circle-${
                  collapse ? 'down rotateUp_this' : 'left rotateDown_this'
                }`}
              />
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
              className={`collapse ${show && 'show'}`}
              data-parent={`#accordion${id}`}
            >
              {mapContent(content, mapLinks, title)}
            </div>
          </div>
        ) : (
          mapContent(content, mapLinks, title)
        )}
      </div>
    </li>
  );
};
