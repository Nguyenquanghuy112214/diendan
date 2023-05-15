import ApiUtils from '~/utils/api/api';

export const FetchLessonNoCategory = async (idContailler) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idContailler}/GetAll`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
