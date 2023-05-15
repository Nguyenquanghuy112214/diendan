import ApiUtils from '~/utils/api/api';

export const FetchLessonByIdLecture = async (idLectureCategory) => {
  try {
    const res = await ApiUtils.fetch(`/api/ForumLectureCategory/GetByPre/${idLectureCategory}`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
