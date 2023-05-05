import ApiUtils from '~/utils/api/api';

export const fetchMenu = async () => {
  try {
    const res = await ApiUtils.fetch('/api/Menu/GetAll');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
