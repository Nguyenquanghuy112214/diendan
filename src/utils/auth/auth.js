import localStorageUtils, { KeyStorage } from '../local-storage';

export const getTokenInfo = async () => {
  try {
    const tokenInfo = localStorageUtils.getObject(KeyStorage.AUTH, null);
    if (tokenInfo && tokenInfo?.token) {
      return tokenInfo;
    }
  } catch (error) {
    setTokenInfo(null);
    return null;
  }
};

export const setTokenInfo = (tokenInfo) => {
  localStorageUtils.setObject(KeyStorage.AUTH, {
    ...tokenInfo,
    expiresAt: Date.now() + Number(tokenInfo?.expiresAt) * 1000,
  });
};
