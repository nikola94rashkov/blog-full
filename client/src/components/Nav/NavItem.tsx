import type { Nav as NavInterface } from '../../types/';
import { Link } from 'react-router-dom';

export const NavItem = ({ path, text }: NavInterface) => {
  return (
    <li>
      <Link to={path}>{text}</Link>
    </li>
  );
};
