enum actions {
  SET_ABOUT = 'portfolio/about/SET_ABOUT',
}

interface ISocialMedia {
  cssClass: string;
  link: string;
  icon: string;
}

export interface IAbout {
  imgUrl: string;
  description: string;
  name: string;
  age: string;
  songs: { artist: string; url: string }[];
  book: string;
  location: string;
  jobTitle: string;
  quotes: string[];
  socialMedia: ISocialMedia[];
}

const initialState: IAbout = {
  imgUrl: 'about-1.jpg',
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

//reducer
const reducer = (state: IAbout = initialState, action: Iaction): IAbout => {
  switch (action.type) {
    case actions.SET_ABOUT:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;

//action creator
const actionMaker =
  <T extends actions, G>(type: T) =>
  (payload: G) => {
    return {
      type,
      payload,
    };
  };

export const setAboutAction = actionMaker<actions.SET_ABOUT, IAbout>(
  actions.SET_ABOUT
);

const actionsObj = {
  setAboutAction,
};

export type Iaction = NS_ReduxNS.IactionUnion<typeof actionsObj>;
export type IAPIaction = (Dispatch: React.Dispatch<Iaction>) => any;

// export const union = (
//   workspaceId: string,
//   fileIds: Array<string>,
//   tags: Array<string>,
//   newFileName: string | undefined,
//   deleteAllAfter: boolean,
//   final: () => void
// ) => {
//   return (Dispatch: React.Dispatch<Iaction>) => {
//     API.union(fileIds, tags, newFileName, deleteAllAfter, workspaceId, 'hardcode.companyId')
//       .then((res) => {
//         if (res) {
//           const { data } = res;
//           //add file
//           Dispatch(addFileAction(res.data.fileInfo));
//           // delete if necesary
//           if (deleteAllAfter) {
//             for (const f of fileIds) {
//               Dispatch(deleteFileAction(f));
//             }
//           }
//           //select the added file to show
//           const file: NS_Workspace.IfileContent = {
//             data: data.fileContent.data,
//             columns: data.fileContent.columns,
//             id: data.fileInfo.fileId,
//           };
//           Dispatch(setFileData(file));
//         } else {
//           toast.error(errorMsg('Union'));
//         }
//       })
//       .finally(() => final());
//   };
// };
