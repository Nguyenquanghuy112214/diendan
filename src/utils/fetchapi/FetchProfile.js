import ApiUtils from '~/utils/api/api';

export const fetchProfile = async () => {
  try {
    const res = await ApiUtils.fetch('/api/ApplicationAccount/Profile');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
