import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LOGIN } from '../../app/providers/RouterConfig';

export default function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    localStorage.clear();
    dispatch({ type: 'CLEAR_STORE' });
    navigate(LOGIN);
  }

  return logout;
}
