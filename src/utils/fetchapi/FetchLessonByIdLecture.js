import ApiUtils from '~/utils/api/api';

export const FetchLessonByIdLecture = async (idContainer, idLectureCategory) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idContainer}/GetByPre/${idLectureCategory}`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
