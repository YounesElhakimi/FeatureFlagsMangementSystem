import React from 'react';
import { User, Mail, Calendar } from 'lucide-react';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Admin',
      email: 'john@example.com',
      joinedDate: '2023-01-15',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Developer',
      email: 'jane@example.com',
      joinedDate: '2023-02-20',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Developer',
      email: 'mike@example.com',
      joinedDate: '2023-03-10',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
        <p className="text-gray-600">Manage your team members and their permissions</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Team Members</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add Member
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Member</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Joined Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {team.map((member) => (
                  <tr key={member.id} className="border-b border-gray-200">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                        {member.role}
                      </span>
                    </td>
                    <td className="py-4 px-4">{member.email}</td>
                    <td className="py-4 px-4">{member.joinedDate}</td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;