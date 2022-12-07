// =================== Old States ====================

import {
  IAbout,
  ICareerData,
  IContact,
  IPortfolio,
  IResumeList,
  IService,
  ITestemonial,
} from '../store/utils/dataTypes';

const aboutOldState: IAbout = {
  imgUrl: '/assets/img/about/about-1.jpg',
  description: `My name is Mehdi CHEREF, I am a full-stack developer and IA engineer. I am an accomplished coder and programmer and I enjoy using my skills to
        contribute to managing and sharing multidisciplinary ideas to bring projects to fruition. Graduated from the University of Burgundy, France in 2020 with a Master degree in Artificial intelligence. I have also attended the University of
        Science and Technology H-B, Algeria where I received a Bachelor's and a Master's degree, the BSc in Software Development and the MSc in Visual Computing.
        </br>
        My favorite subject is programming, I spend my free time in reading or developing my tech-level by building my own software.
        I enjoy eating the French Tacos <i>"Le gratiné"</i> and playing online video games. As part of my profession, I do my best to encourage my teammates
        to work hard and push them to success.`,
  name: 'Mehdi CHEREF',
  age: '29 Years',
  book: 'Utopia XXI, Aymeric Caron',
  songs: [
    {
      artist: 'Cheb Khaled',
      url: 'https://www.youtube.com/watch?v=tTcnIYYeZI8',
    },
    {
      artist: 'Lynyrd Skynyrd',
      url: 'https://www.youtube.com/watch?v=RrmWFjnAP2Ec',
    },
    {
      artist: "Rag'n'Bone Man",
      url: 'https://www.youtube.com/watch?v=L3wKzyIN1yk',
    },
  ],
  location: 'Toulouse, France',
  jobTitle: 'Computer Science Engineer',
  quotes: [
    '“Good management is the art of making problems so interesting and their solutions so constructive that everyone wants to get to work and deal with them.”',
    '“Believe passionately in what you do, and never knowingly compromise your standards and values. Act like a true professional, aiming for true excellence, and the money will follow.”',
    '“Failure is simply the opportunity to begin again, this time more intelligently.”',
    '“As you navigate through the rest of your life, be open to collaboration. Other people and other people’s ideas are often better than your own.”',
  ],
  socialMedia: [
    {
      cssClass: 'linkedin',
      link: 'https://www.linkedin.com/in/mehdi-cheref/',
      icon: 'icon-social-linkedin',
    },
    {
      cssClass: 'github',
      link: 'https://github.com/CHEREF-Mehdi/',
      icon: 'icon-social-github',
    },
    {
      cssClass: 'facebook',
      link: 'https://www.facebook.com/ooliverquetzal',
      icon: 'icon-social-facebook',
    },
    {
      cssClass: 'google',
      link: 'https://www.youtube.com/channel/UCGCwLEG6HikFzHHfDGfrEbA?view_as=subscriber',
      icon: 'icon-social-youtube',
    },
  ],
};

const contactOldState: IContact = {
  adress: 'Toulouse, France.',
  email1: 'mcheref.pro@gmail.com',
  email2: 'mehdi.cheref@capgemini.com',
  malt: 'https://www.malt.fr/profile/mehdicheref',
};

const servicesOldState: IService = [
  {
    name: 'Front End',
    detail: 'React, React Native & Angular',
    icon: 'fa fa-mobile',
  },
  {
    name: 'Back End & Databases',
    detail: 'NodeJS & Spring/ SQL & NoSQL',
    icon: 'fa fa-server',
  },
  {
    name: 'DevOps',
    detail: 'Dev, Quality, IT Operations',
    icon: 'fa fa-cogs',
  },
  {
    name: 'Artificial Intelligence',
    detail: 'Machine and Deep Learning',
    icon: 'fa fa-object-group',
  },
];

const proExperienceOldState: IResumeList = {
  title: 'experience',
  icon: 'icon-briefcase',
  mapLinks: 'BOTTOM',
  items: [
    {
      title: 'Software Engineer',
      year: 'Capgemini : Jul. 2021 - Today',
      key: 6,
      content: [
        {
          describtion: ``,
          tools: 'Agile SAFe, JavaScript, Java & DevOps.',
          links: [],
        },
      ],
    },
    {
      title: 'Full stack developer - Node/React',
      year: "Shift'In : Sep. 2020 - Jun. 2021 <strong>(10 mos)</strong>",
      key: 5,
      content: [
        {
          describtion: `Appointment scheduling application, Back end : web-services/ RESTFul APIs connected to a front end application : authentication, authorization Firebase.`,
          tools: 'Node, mongoDB, Redis, DevOps & React.',
          links: [],
        },
      ],
    },
    {
      title: 'Front end developer & AI engineer - React/ TensorFlowJS',
      year: 'Scorf : Mar. - Sept. 2020 <strong>(6 mos)</strong>',
      key: 4,
      content: [
        {
          describtion: `Developing a BI platform (tables management) and implementing IA models to extract relevant information from financial resources. (P&L, Cash-Flow...)`,
          tools: 'Scrum, ReactJS, Redux, TypeScript, TensorFlowJS & DevOps.',
          links: [],
        },
      ],
    },
    {
      key: 3,
      title: 'Computer Vision engineer - Cuda/C++',
      year: 'Laboratory LE2I University of Burgundy : Oct. 2019 - Mar. 2020  <strong>(6 mos)</strong>',
      content: [
        {
          describtion: `Internship R&D : Implementing 2D/3D fractal models under GPU using CUDA (Use the GPU to perform CPU tasks).`,
          tools: 'CUDA, C++, OpenGl & GSLS.',
          links: [
            'https://github.com/CHEREF-Mehdi/Fractal-using-cuda',
            'https://github.com/CHEREF-Mehdi/Fractal-using-cuda/blob/master/pdf/Rapport%20projet%20tuteur%C3%A9.pdf',
          ],
        },
        {
          describtion:
            'Signal processing : Estimation of spectral reflectance curves from multispectral images.',
          tools: 'Matlab',
          links: [
            'https://github.com/CHEREF-Mehdi/Multispectral',
            'https://github.com/CHEREF-Mehdi/Multispectral/blob/master/Rapport.pdf',
          ],
        },
      ],
    },
    {
      key: 2,
      title: 'Full stack developer- Node/React Native',
      year: 'LG : Sept. 2017 - Aug. 2019  <strong>(2 yrs)</strong>',
      content: [
        {
          describtion: `Back-end with Node ExpressJS: RESTFul API, Oauth, authentification, authorization. Front-end with React Native: Build cross-platform mobile application : Firebase, data-collection, QR/barecode reader & text recognition.`,
          tools: 'Scrum, React native, Redux, TypeScript, Node, MySql & DevOps',
          links: [],
        },
      ],
    },
    {
      key: 1,
      title: 'Full stack developer - Node/React',
      year: 'NTTC (New Technical Trading & Contracting) : Feb.2015 - Aug.2016  <strong>(1 yr 7 mos)</strong>',
      content: [
        {
          describtion: `Project management WEB app. Developed from scratch starting with the needs analysis to the implementation of the KPI dashboard. `,
          tools: 'ReactJS, Redux, Node, expressJS & MySQL',
          links: [],
        },
      ],
    },
  ],
};

const personalProjectOldState: IResumeList = {
  icon: 'icon-briefcase',
  title: 'personal projects',
  mapLinks: 'BOTTOM',
  items: [
    {
      title: 'WEB developement & application software',
      year: null,
      content: [
        {
          describtion: 'WEB application: User authentification ',
          tools: 'Docker, Django, JavaScript, Ajax & bootstrap',
          links: ['https://github.com/CHEREF-Mehdi/django_test'],
        },
        {
          describtion: 'P2P, messaging application',
          tools: 'Java, JavaFX, sockets & server sockets',
          links: ['https://github.com/CHEREF-Mehdi/PeerToPeer-Messenger'],
        },
      ],
    },
    {
      title: 'Computer Vision.',
      year: null,
      content: [
        {
          describtion: 'inverse kinematics, Implicit-Surface & Curves',
          tools: 'C++, Armadillo, OpenGl & GSLS.',
          links: [
            'https://github.com/CHEREF-Mehdi/Inverse-kinematics',
            'https://github.com/CHEREF-Mehdi/Implicit-Surface',
            'https://github.com/CHEREF-Mehdi/curves',
          ],
        },
        {
          describtion: 'Touchless drawing application. Human skin detection',
          tools: 'Python & Opencv.',
          links: [
            'https://www.youtube.com/watch?v=AX_0L-vBuds',
            'https://github.com/CHEREF-Mehdi/TouchlessDrawing',
            'https://github.com/CHEREF-Mehdi/SkinDetection',
          ],
        },
        {
          describtion: 'Game : Othello ',
          tools: 'Minimax (alpha-beta pruning) & Negamax algorithm',
          links: ['https://github.com/CHEREF-Mehdi/Othello'],
        },
        // item2: {
        //   describtion: "Graph visualization ",
        //   tools: "Processing.",
        //   links: [
        //     "https://github.com/CHEREF-Mehdi/Node-Link-Graph-Visualization",
        //   ],
        // },
        // item1: {
        //   describtion:
        //     "Experience in Virtual Reality : Prototyping a 3D interactive game. ",
        //   tools: "C++, VTK & Kinect V1.",
        //   links: [
        //     "https://drive.google.com/open?id=1QxJrjk_ujwFaQQfLT5cGYGGAInICsFdW",
        //   ],
        // },
      ],
    },
    {
      title: 'Artificial Intelligence',
      year: null,
      content: [
        {
          describtion: 'ANN, SVM and deep learning ANN for text Recognition',
          tools: 'Python,TensorFlow, keras, Scikit-learn, & Opencv',
          links: [
            'https://github.com/CHEREF-Mehdi/ocr',
            'https://github.com/CHEREF-Mehdi/Tensorflow_handwriting',
          ],
        },
      ],
    },
  ],
};

const educationOldState: IResumeList = {
  title: 'education',
  icon: 'icon-graduation',
  items: [
    {
      title: 'Master of Science in Image and Artificial Intelligence',
      year: 'University of Burgundy, Dijon, France 2019 - 2020',
      content: [
        {
          describtion:
            'Image processing and synthesis, Artificial Intelligence',
          links: [],
          tools: null,
        },
      ],
    },
    {
      title: 'Master of Science in Visual Computing',
      year: ' USTHB, Algiers, Algeria : 2017',
      content: [
        {
          describtion:
            'Image processing and synthesis, Artificial Intelligence',
          links: [],
          tools: null,
        },
      ],
    },
    {
      title: 'Bachelor of Science in Software Engineering',
      year: 'USTHB, Algiers, Algeria 2015',
      content: [
        {
          describtion: 'Information Systems and Software Engineering. ',
          tools: null,
          links: [],
        },
      ],
    },
  ],
};

const scientificPapersOldState: IResumeList = {
  title: 'Scientific Papers',
  icon: 'icon-badge',
  mapLinks: 'TOP',
  selectedItem: 0,
  items: [
    {
      title: 'Journal paper',
      year: 'Image and Vision Computing Journal-Elsevier : Apr. 2020',
      content: [
        {
          key: 'ppr3',
          describtion: 'Zero–sum Game model for segmenting skin regions.',
          tools: null,
          links: ['https://doi.org/10.1016/j.imavis.2020.103925'],
          abstract: `This paper presents a new method for skin region segmentation based on a zero-sum game theory 
            model which exploits the opposite classifications of an image region by different skin detectors. 
            In fact, these regions are considered conflict areas between two players (skin and non-skin) and skin 
            detectors are considered strategies. An appropriate utility function is then defined. The computation of 
            the saddle point (The Nash equilibrium) in the mixed extension of the proposed zero-sum game allows 
            classifying effectively the conflict areas and so reducing the false positive skin detection. 
            Experiments were conducted on three publically available databases using four selected skin 
            detectors based on skin color information, skin-texture cues and employ rule-based or neural networks. 
            The results show that the proposed method outperforms the existing skin segmentation approaches in 
            reducing the false positive rates and obtains promising results in the skin segmentation performance.`,
        },
      ],
    },
    {
      title: 'Conference paper',
      year: 'Speaker in VISAPP, Valetta, Malta : Feb. 2020',
      content: [
        {
          key: 'ppr2',
          describtion: 'Melanoma Detection System based on Game Theory Model.',
          tools: null,
          links: [
            'https://doi.org/10.5220/0008879807030711',
            'https://drive.google.com/open?id=1-TdM3efNdFLiHPESk-fiGnQ34DhD-Zcy',
          ],
          abstract: `We propose in this paper a new method for Melanoma detection (the most dangerous form of skin 
            cancer) based on ABCD medical procedure. The ABCD features play a crucial role in the accuracy of diagnosis 
            rates. However, the search for such distinctive data remains difficult, because of the small variability in 
            the appearance of benign and cancerous skin lesions. To cope with this problem, each feature is calculated 
            using different formulas. Then if all the used formulas agree about the lesion classification, it will be 
            classified according to the full agreement. Otherwise, for doubtful pigmented skin lesions, the game theory 
            model is applied for final decision. The game model proposed in our work, estimates that the conflict is 
            between two agents (melanoma and non-melanoma). The different formulas applied in the computation of the 
            features A, B, C, and D are the pure strategies. The value sign in the mixed extension of the game allows 
            classifying correctly the skin lesion. The method wa s tested on two publically available databases PH2 
            and ISIC, the obtained results are promising.`,
        },
      ],
    },
    {
      title: 'Journal paper',
      year: 'Multimedia Tools and Applications Journal-Springer : Jul. 2019',
      content: [
        {
          key: 'ppr1',
          describtion:
            'Effiecient Representation of size function based on Moments Theory.',
          tools: null,
          links: [
            'https://doi.org/10.1007/s11042-019-07859-9',
            'https://link.springer.com/epdf/10.1007/s11042-019-07859-9?author_access_token=R1NfpCDI18NBtDlwagehH_e4RwlQNchNByi7wbcMAY7aPaYR2sU_6HGGHg_iK9JXx6pezEntFoqpMjlKG3gnPDqCzApfA0uI4st3MCq46KM0u1g6MtJs7I5FeZRQWQqda-MGFVGofoS8EwjmhS29fA%3D%3D',
          ],
          abstract: `Nowadays, there is a need to develop efficient and intuitive solutions such as hand gestures 
          recognition for the Human-machine interaction. This paper presents a hand gestures recognition system based 
          on salient geometric features extracted using size functions theory. We propose a new representation of the 
          reduced size function based on Tchebichef moments providing more details and information for their graphs 
          descriptions compared to existing representations. In addition, a methodical algorithm of fast Tchebichef 
          moments computation for grey scale images is well adapted to the encoded graph of size function. Furthermore, 
          a contour discretization based on a convexity approach is proposed for an optimal computation of the measuring 
          functions, and new measuring functions for hand gestures classification and retrieval are proposed. The 
          comparison with existing systems indicates that our method competes with the best ranked method for the 
          dynamic case and surpasses the state of the art in static case; in addition it presents the advantage to 
          be applied in both static and dynamic cases.`,
        },
      ],
    },
  ],
};

const organizationOldState: IResumeList = {
  title: 'organization',
  icon: 'icon-people',
  mapLinks: 'TOP',
  items: [
    {
      key: 'org3',
      title: 'INSTICC Regular member',
      year: 'Institute for Systems and Technologies of Information, Control and Communication: Feb. 2020 - Dec 2021',
      content: [
        {
          describtion:
            'INSTICC is a scientific, non-profit, association whose main goals are to serve the international scientific community by promoting, developing and disseminating knowledge in the areas of information systems and technologies, control and communications. ',
          tools: null,
          links: [
            'https://drive.google.com/open?id=1sD2zrARCwv3ruVziqnkTDdq0ayfwO2qI',
          ],
        },
      ],
    },
    {
      key: 'org2',
      title: 'WEB development instructor',
      year: 'Microclub - USTHB : Feb. 2017',
      content: [
        {
          describtion:
            'Web development instructor (HTML, JavaScript, PHP, MySQL). ',
          tools: null,
          links: [
            'https://drive.google.com/open?id=1BJ1wH7hsZRFyf3wFcbErHCn_oQrUTAHH',
          ],
        },
      ],
    },
  ],
};

const portfolioOldState: IPortfolio = [
  {
    img: '/assets/img/gallery/img-1.jpg',
    link: 'https://www.google.fr/maps/place/Valletta,+Malta/@35.8989085,14.5145528,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOgaci7Qxa9EX2zj0vrgoh9bjSvzMx5z8kXUvw-!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOgaci7Qxa9EX2zj0vrgoh9bjSvzMx5z8kXUvw-%3Dw129-h86-k-no!7i2997!8i1998!4m5!3m4!1s0x130e45281d8647c5:0x745ad38ee242c917!8m2!3d35.8989085!4d14.5145528',
    filter: 'travel',
  },
  {
    img: '/assets/img/gallery/img-2.jpg',
    link: 'https://microclub-usthb.com/agc/',
    filter: 'event',
  },
  {
    img: '/assets/img/gallery/img-3.jpg',
    link: 'https://www.google.fr/maps/place/Timimoun,+Algeria/@29.2609217,0.2385387,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMJCU-fM6iZ8kVFsjnIzGgHutG4H_XvfzVvoVut!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMJCU-fM6iZ8kVFsjnIzGgHutG4H_XvfzVvoVut%3Dw114-h86-k-no!7i720!8i540!4m5!3m4!1s0x127572225e84a77f:0x29b4250c99b3463e!8m2!3d29.2616911!4d0.2415964',
    filter: 'travel',
  },
  {
    img: '/assets/img/gallery/img-4.jpg',
    link: 'https://www.facebook.com/AlgerianGameDevelopers/',
    filter: 'work',
  },
  {
    img: '/assets/img/gallery/img-5.jpg',
    link: 'https://www.scorf.io/',
    filter: 'work',
  },
  {
    img: '/assets/img/gallery/img-6.jpg',
    link: 'https://www.google.com/maps/place/Sousse,+Tunisia/@35.8284534,10.5480137,12z/data=!3m1!4b1!4m13!1m7!3m6!1s0x125595448316a4e1:0x3a84333aaa019bef!2sTunisia!3b1!8m2!3d33.886917!4d9.537499!3m4!1s0x130275759ac9d10d:0x698e3915682cef7d!8m2!3d35.8267213!4d10.6347656',
    filter: 'travel',
  },
];

const testimonialOldState: ITestemonial = [
  {
    name: 'Pierre-Alexandre Beucher',
    title: 'Co-founder at Scorf',
    img: '/assets/img/rec/PA.jfif',
    url: 'https://www.linkedin.com/in/pierre-alexandre-beucher-0338951/',
    testimonial: `Nos 6 mois de collaborations furent excellent. Très
                    professionnel, rigoureux et méthodique, toujours prêt à
                    aider, à faire avancer les projets en proposant des
                    solutions. Mehdi a su mener à bien l'ensemble des
                    missions qui lui ont été confiées avec la plus grande
                    autonomie dans un contexte sanitaire parfois compliqué.
                    Vivement recommandé`,
  },
  {
    name: 'Youcef ZAHARIOU',
    title: 'Software Engineer',
    img: '/assets/img/rec/YZ.jfif',
    url: 'https://www.linkedin.com/in/youcef-zahariou/',
    testimonial: `Mehdi était une personne brillante avec qui j'ai
                    travaillé. Il est très cartésien dans tout ce qu'il fait
                    et on peut compter sur lui pour faire le travail
                    efficacement. Grâce à ses compétences interpersonnelles
                    et techniques dans le développement Frontend en
                    particulier React. Il avait une vision pour voir les
                    avantages et la passion de transformer cela en résultats
                    mesurables pour LG Algérie. Le succès obtenu dans son
                    travail exigeait des connaissances et un dévouement
                    approfondis. Il est un atout pour toute entreprise, je
                    recommande vivement de travailler avec lui`,
  },
];

export const oldCareerData: ICareerData = {
  about: aboutOldState,
  contact: contactOldState,
  services: servicesOldState,
  resume: {
    education: educationOldState,
    proExperience: proExperienceOldState,
    personalProject: personalProjectOldState,
    organizations: organizationOldState,
    scientificPapers: scientificPapersOldState,
  },
  portfolio: portfolioOldState,
  testimonials: testimonialOldState,
};
