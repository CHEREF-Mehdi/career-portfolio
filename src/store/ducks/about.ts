import { aboutInitialState, IAbout } from './initialStates';

enum actions {
  SET_ABOUT = 'portfolio/about/SET_ABOUT',
}

//reducer
const reducer = (
  state: IAbout = aboutInitialState,
  action: Iaction
): IAbout => {
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
