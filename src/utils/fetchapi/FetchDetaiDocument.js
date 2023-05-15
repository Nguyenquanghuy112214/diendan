import ApiUtils from '~/utils/api/api';

export const FetchDetaiDocument = async (idController, iditem) => {
  try {
    const res = await ApiUtils.fetch(`/api/${idController}/DetailItems/${iditem}`);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
