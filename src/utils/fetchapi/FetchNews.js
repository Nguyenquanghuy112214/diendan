import ApiUtils from '~/utils/api/api';

export const fetchNews = async () => {
  try {
    const res = await ApiUtils.fetch('/api/News/GetNew');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
