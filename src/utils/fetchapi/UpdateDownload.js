import ApiUtils from '~/utils/api/api';

export const UpdateDownload = async (idContainer, idLectureCategory) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idContainer}/UpdateNumOfDownload/${idLectureCategory}`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
