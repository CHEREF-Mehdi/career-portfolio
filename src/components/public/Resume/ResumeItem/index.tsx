import * as React from 'react';
import store from '../../../../store';
import ReactGa from 'react-ga';
import { GAEventCategories } from '../../../../utils';
import { IContent, IResumeItem } from '../../../../store/utils/dataTypes';
import { setSelectedScientificPapersAction } from '../../../../store/ducks/careerReducer';
import { Accordion, Card } from 'react-bootstrap';

const styles: IClassNames = {
  liChevron: { position: 'absolute', top: '0px', right: '5px' },
} as const;

const LinkTag: React.FC<{ link: string; title: string; description: string }> =
  ({ link, title, description }) => {
    const onClick = () => {
      ReactGa.event({
        category: GAEventCategories.LINK_CLICK,
        action: title,
        label: description.substring(0, 50),
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
        <LinkTag
          key={key}
          link={link}
          title={title}
          description={description}
        />
      ))}
    </>
  );
}

function mapContent(
  content: IContent[],
  mapLinks: 'TOP' | 'BOTTOM' | undefined,
  title: string
) {
  return (
    <>
      {content.map((value, key) => {
        return (
          <div key={key}>
            <p className='line-text'>
              {value.describtion}
              {mapLinks === 'TOP' &&
                mapLinkList(value.links, title, value.describtion)}
            </p>
            {value.tools && (
              <p className='line-text' style={{ fontWeight: 'bold' }}>
                {value.tools}
                {mapLinks === 'BOTTOM' &&
                  mapLinkList(value.links, title, value.describtion)}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

interface IResumeItemUI {
  item: IResumeItem;
  mapLinks?: 'TOP' | 'BOTTOM';
  index: number;
  show?: boolean;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResumeItem: React.FC<IResumeItemUI> = ({
  item,
  mapLinks,
  index,
  show = false,
  setOpenModal,
}) => {
  const { title, year, content, key } = item;

  const [collapse, setCollapse] = React.useState(show);

  const onReadAbstractClick = (selectedPaper: number) => {
    store.dispatch(setSelectedScientificPapersAction(selectedPaper));
    ReactGa.event({
      category: GAEventCategories.READ_PAPER_ABSTRACT,
      action: content[0].describtion,
    });
    setOpenModal && setOpenModal(true);
  };

  const onExperienceExpend = () => {
    if (typeof key !== 'undefined') setCollapse(!collapse);

    if (typeof key === 'number') {
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
      <Accordion defaultActiveKey={show ? key + '' : undefined}>
        <Card
          className='content-text'
          style={{
            position: 'relative',
            cursor: key ? 'pointer' : '',
            borderRadius: '5px',
          }}
        >
          <Accordion.Toggle
            as={Card.Body}
            eventKey={key + ''}
            onClick={onExperienceExpend}
          >
            <div>
              {key || content[0]?.abstract ? (
                <div style={styles.liChevron}>
                  {key ? (
                    <i
                      className={`fas fa-chevron-circle-${
                        collapse ? 'down' : 'left'
                      } shake_this`}
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
              {key ? (
                <Accordion.Collapse eventKey={key + ''}>
                  <div>{mapContent(content, mapLinks, title)}</div>
                </Accordion.Collapse>
              ) : (
                mapContent(content, mapLinks, title)
              )}
            </div>
          </Accordion.Toggle>
        </Card>
      </Accordion>
      {/* <div
        className='content-text div-rotate'
        data-toggle='collapse'
        data-target={`#collapse${key}`}
        aria-expanded='true'
        aria-controls={`collapse${key}`}
        onClick= {onExperienceExpend}
      >
        
      </div> */}
    </li>
  );
};
