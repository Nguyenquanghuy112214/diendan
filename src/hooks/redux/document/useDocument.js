import { useDispatch, useSelector } from 'react-redux';
import { changeDocument } from './reducer';

function useDocument() {
  const document = useSelector((state) => state.document);
  const dispatch = useDispatch();

  const setTitle = (title) => {
    if (title && document.title !== title) {
      const action = changeDocument(title);
      dispatch(action);
    }
  };
  return { document, setTitle };
}

export default useDocument;
