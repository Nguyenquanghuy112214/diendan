import useAuth from '~/hooks/redux/auth/useAuth';
import Loading from 'libraries/components/loading';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routePath } from 'routing/path.routing';

const withAuthClient =
  ({ children }) =>
  () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useAuth();

    useEffect(() => {
      if (!auth || !auth.token || auth.token.length <= 0) {
        navigate(routePath.SignIn, {
          state: { callbackUrl: location.pathname },
        });
        return;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth, location]);

    if (auth) {
      return <div>{children}</div>;
    }
    return <Loading />;
  };

export default withAuthClient;
