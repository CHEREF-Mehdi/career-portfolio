import * as React from 'react';
import { ISocialMedia } from '../../store/dataTypes';
import ReactGa from 'react-ga';
import { GAEventCategories } from '../../utils';

interface ISocialMediaProps {
  items: ISocialMedia[];
}

export const SocialMedia: React.FC<ISocialMediaProps> = ({ items }) => {
  const onClickSocialMedia = (socialMedia: string) => {
    ReactGa.event({
      category: GAEventCategories.BUTTON_CLICK,
      action: 'GO to ' + socialMedia.substring(12).toUpperCase(),
    });
  };
  return (
    <ul
      className='social-icon wow fadeInUp socialMediaDiv'
      data-wow-delay='0.8s'
    >
      {items.map((item, key) => (
        <li key={key} onClick={() => onClickSocialMedia(item.icon)}>
          <a
            className={item.cssClass}
            target='_blank'
            rel='noopener noreferrer'
            href={item.link}
          >
            <i className={item.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};
