import ApiUtils from '~/utils/api/api';

export const FetchHistoryUpload = async (iditem, headers) => {
  try {
    const res = await ApiUtils.fetch(`/api/HistoryUpload/GetAllByUser?ID=${iditem}`, headers);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
