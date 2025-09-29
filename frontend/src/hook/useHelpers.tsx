import { useNavigate } from 'react-router-dom';

const useHelpers = () => {
  const navigate = useNavigate();

  return { navigate };
};
export default useHelpers;
