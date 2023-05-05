import ApiUtils from '~/utils/api/api';

export const fetchThong_Ke = async () => {
  try {
    const res = await ApiUtils.fetch('/api/Statistics/GetAll');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
