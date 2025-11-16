import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const className = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <div className={className}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      <p className="TodoInfo__id">ID: {todo.id}</p>
      <p className="TodoInfo__status">
        Status: {todo.completed ? 'Completed' : 'Pending'}
      </p>

      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
