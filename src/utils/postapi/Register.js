import ApiUtils from '~/utils/api/api';

export const register = async (body) => {
  try {
    const res = await ApiUtils.post('/api/ApplicationAccount/Register', body);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
