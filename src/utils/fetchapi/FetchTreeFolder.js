import ApiUtils from '~/utils/api/api';

export const fetchTreeFolder = async (url) => {
  try {
    const res = await ApiUtils.fetch(`/api/${url}/GetAll`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
