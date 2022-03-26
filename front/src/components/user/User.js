import React, { useState, useContext, useEffect } from "react";
import UserEditForm from "./UserEditForm";
import UserCard from "./UserCard";
import * as Api from "../../api";
import { ImageUpdateContext } from "../../App";
function User({ portfolioOwnerId, isEditable }) {
  // useState 훅을 통해 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  // useState 훅을 통해 user 상태를 생성함.
  const [user, setUser] = useState(null);
  const { imageSrc, setImageSrc } = useContext(ImageUpdateContext);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("users", portfolioOwnerId).then((res) => {
      setUser(res.data);
      setImageSrc(res.data.img);
    });
  }, [portfolioOwnerId, setImageSrc]);

  return (
    <>
      {isEditing ? (
        <UserEditForm
          user={user}
          setIsEditing={setIsEditing}
          setUser={setUser}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
        />
      ) : (
        <UserCard
          user={user}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
          imageSrc={imageSrc}
        />
      )}
    </>
  );
}

export default User;