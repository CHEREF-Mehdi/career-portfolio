import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../store/ducks/rootReducer';
import { ModalCustom } from '../Modal';
import { ResumeList } from './ResumeList';

export const Resume: React.FC = () => {
  const {
    proExperience,
    education,
    personalProject,
    scientificPapers,
    organizations,
  } = useSelector((state: IAppState) => state.careerData.resume);

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div id='resume' className='section-padding'>
      <div className='container'>
        <div id='resumeDiv' className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <ResumeList
              icon={proExperience.icon}
              title={proExperience.title}
              items={proExperience.items}
              mapLinks={proExperience.mapLinks}
              setOpenModal={setOpenModal}
              animation={'fadeInLeft'}
            />
            <ResumeList
              icon={personalProject.icon}
              title={personalProject.title}
              items={personalProject.items}
              mapLinks={personalProject.mapLinks}
              animation={'fadeInLeft'}
            />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <ResumeList
              icon={scientificPapers.icon}
              title={scientificPapers.title}
              items={scientificPapers.items}
              mapLinks={scientificPapers.mapLinks}
              setOpenModal={setOpenModal}
              animation={'fadeInRight'}
            />
            <ResumeList
              icon={education.icon}
              title={education.title}
              items={education.items}
              mapLinks={education.mapLinks}
              animation={'fadeInRight'}
            />
            <ResumeList
              icon={organizations.icon}
              title={organizations.title}
              items={organizations.items}
              mapLinks={organizations.mapLinks}
              animation={'fadeInRight'}
            />
          </div>
        </div>
      </div>
      <ModalCustom openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
