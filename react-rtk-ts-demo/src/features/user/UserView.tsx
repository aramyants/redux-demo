import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};
