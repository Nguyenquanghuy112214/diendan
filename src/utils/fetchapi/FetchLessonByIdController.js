import ApiUtils from '~/utils/api/api';

export const fetchLessonByIdController = async (idContailler) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idContailler}/GetAll`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
