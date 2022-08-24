import React from 'react';
import { useDispatch } from 'react-redux';
import { sortUser,updateUser } from '../store/user';
import '../styles/user_info_space.scss';

function UserInfoSpace(props) {
  const dispatch = useDispatch();
  function dropBox(e) {
    const user_info_box_class = e.dataTransfer.getData("text");
    if(!e.target.hasChildNodes()){
      e.preventDefault();
      document.getElementsByClassName(user_info_box_class)[0].className = 'user-info-box '+props.space_number;
      e.target.append(document.getElementsByClassName('user-info-box '+props.space_number)[0]);
      const updateUserInfo = {
        box_number: parseInt(user_info_box_class.substring(14, 16)),
        space_number: props.space_number
      }
      dispatch(updateUser(updateUserInfo));
      dispatch(sortUser());
    }
  }
  function dragOverBox(e) {
    e.preventDefault();
  }
  return (
    <div 
      onDrop={dropBox}
      onDragOver={dragOverBox}
      className={'user-info-space '+props.space_number}>
    </div>
  );
}

export default UserInfoSpace;