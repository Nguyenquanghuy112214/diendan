import ApiUtils from '~/utils/api/api';

export const UpdateView = async (idContainer, idLectureCategory) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idContainer}/UpdateNumOfViews/${idLectureCategory}`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
