import ApiUtils from '~/utils/api/api';

export const FetchLessonNoCategory = async (idContailler) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idContailler}/GetAllItems`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
