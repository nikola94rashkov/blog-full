import { navItems, navItemsAuthenticated } from '../../staticData';
import type { Nav as NavInterface } from '../../types/';
import { NavItem } from './NavItem';

export const Nav = (links: NavInterface[]) => {
  return (
    <ul>
      {links.map((item) => (
        <NavItem path={item.path} text={item.text} />
      ))}
    </ul>
  );
};
