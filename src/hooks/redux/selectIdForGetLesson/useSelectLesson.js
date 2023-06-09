import { useDispatch, useSelector } from 'react-redux';
import { changeLesson } from './reducer';

function useSelectLesson() {
  const idController = useSelector(
    (state) =>
      state.selectLesson !== undefined &&
      state.selectLesson.selectLesson !== undefined &&
      state.selectLesson.selectLesson.idController !== undefined &&
      state.selectLesson.selectLesson.idController
  );
  const idLectureCategory = useSelector(
    (state) =>
      state.selectLesson !== undefined &&
      state.selectLesson.selectLesson !== undefined &&
      state.selectLesson.selectLesson.idLectureCategory !== undefined &&
      state.selectLesson.selectLesson.idLectureCategory
  );
  const dispatch = useDispatch();

  const setIdChangeLesson = (menu) => {
    const action = changeLesson(menu);
    dispatch(action);
  };
  return { idController, idLectureCategory, setIdChangeLesson };
}

export default useSelectLesson;
