import localStorageUtils from '../local-storage';

export const setLevelMenu = (lv, itemId) => {
  localStorageUtils.set(lv, itemId);
};
export const clearLevelMenu = (lv) => {
  localStorageUtils.clear(lv);
};

export const useLevelMenu = () => {
  const { get } = localStorageUtils;
  const lv0 = get('lv0');
  const lv1 = get('lv1');
  const lv2 = get('lv2');
  return { lv0, lv1, lv2 };
};
