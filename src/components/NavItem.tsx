import clsx from 'clsx';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavItemProps extends NavLinkProps {
  icon?: string;
  iconImage?: string;
  label: string;
}

export const NavItem = ({ label, icon, iconImage, ...props }: NavItemProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          'flex h-[35px] items-center font-bold  hover:text-[#00aff0] hover:bg-[#151e25] rounded-2xl w-52 pl-4',
          isActive ? 'text-white!' : 'text-[#8A96A3]'
        )
      }
      {...props}
    >
      {icon && <i className={`pi pi-${icon} mr-2`} />}
      {iconImage && (
        <img className="mr-2 h-[14px] w-[14px]" src={iconImage} alt={label} />
      )}
      {label}
    </NavLink>
  );
};
