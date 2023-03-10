import { memo } from 'react';
import { Logo, Nav } from '../../components';
import { navItems, navItemsAuthenticated } from '../../staticData';
import type { Nav as NavInterface } from '../../types';

export const Header = memo<NavInterface[]>(() => {
  return (
    <header>
      <Logo />

      <Nav links={navItems} />
    </header>
  );
});
