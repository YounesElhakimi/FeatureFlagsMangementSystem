import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Layout, Flag, Settings, Users, LogOut } from 'lucide-react';
import { useAuth } from '../lib/auth';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-2 p-2 rounded ${
      isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }`;

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <div className="flex items-center space-x-2 mb-8">
        <Flag className="w-6 h-6 text-blue-400" />
        <h1 className="text-xl font-bold">FeatureFlags</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={linkClass}>
              <Layout className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/flags" className={linkClass}>
              <Flag className="w-5 h-5" />
              <span>Feature Flags</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className={linkClass}>
              <Users className="w-5 h-5" />
              <span>Team</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={linkClass}>
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 p-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded w-full mt-auto"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;