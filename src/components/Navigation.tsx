import { Avatar } from 'primereact/avatar';
import { NavItem } from './NavItem';

export const Navigation = () => {
  return (
    <aside className="flex flex-col gap-y-4">
      <div className="pl-2">
        <Avatar
          style={{ background: '#242529', color: '#00aff0' }}
          label="U"
          size="normal"
          shape="circle"
        />
      </div>
      <NavItem to="/" label="Home" icon="home" />
      <NavItem to="/notifications" label="Notification" icon="bell" />
      <NavItem to="/messages" label="Messages" icon="envelope" />
      <NavItem to="/collections" label="Collections" icon="bookmark" />
      <NavItem to="/subscriptions" label="Subscriptions" icon="user" />
      <NavItem to="/profile" label="My Profile" icon="user-edit" />
    </aside>
  );
};
