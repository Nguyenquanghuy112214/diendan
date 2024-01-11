import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '~/hooks/redux/auth/useAuth';
import Loading from '~/libraries/components/AnimationLoading/Animationloading';
import { routePath } from '~/routing/pathRouting';

function Auth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { auth } = useAuth();

  useEffect(() => {
    if (!auth || !auth.token || !auth.token.length < 0) {
      navigate(routePath.introforum);
      return;
    }
  }, [auth, location, navigate]);

  if (auth !== undefined && auth.token !== undefined) {
    return <div>{children}</div>;
  }
  return <Loading active />;
}

export default Auth;
