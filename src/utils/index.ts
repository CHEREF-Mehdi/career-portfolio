import { toast, ToastOptions } from 'react-toastify';

export const toastNotify = (msg: string, type?: 'error') => {
  const options: ToastOptions = {
    position: 'bottom-center',
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  };
  if (type === 'error') {
    toast.error(msg, options);
  } else {
    toast.warn(msg, options);
  }
};

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};
