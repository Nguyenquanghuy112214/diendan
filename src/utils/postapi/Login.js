import ApiUtils from '~/utils/api/api';

export const login = async (body) => {
  try {
    const res = await ApiUtils.post('/api/ApplicationAccount/Login', body);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
