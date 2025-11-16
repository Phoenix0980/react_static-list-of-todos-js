import React from 'react';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name">{user.name}</p>
    <p className="UserInfo__email">{user.email}</p>
    {user.company && <p className="UserInfo__company">{user.company.name}</p>}
  </div>
);
