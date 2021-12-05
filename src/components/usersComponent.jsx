import React from "react";
import { useSelector } from "react-redux";
import Card from "./cardComponent";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Users = ({ isAdmin }) => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  return (
    <div className="card_wrapper">
      {users &&
        users.map((user) => {
          const random_pic = "https://picsum.photos/200/300";
          user.photo = random_pic;
          return  <LazyLoadComponent key={user.id}> <Card showAction={isAdmin} user={user} key={user.id} /></LazyLoadComponent>;
        })}
      {loading ? <p>No data available to show.</p> : null}
    </div>
  );
};

export default Users;
