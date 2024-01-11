import ApiUtils from '~/utils/api/api';

export const fetchLessonByPre = async (idContailler) => {
  console.log("idContailler", idContailler);
  try {
    const res = await ApiUtils.fetch(`/api/${idContailler}/GetByPre`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
