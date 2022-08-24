import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/user';
import '../styles/user_info_box.scss';

function UserInfoBox(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    matchInfo();
  });
  function matchInfo() {
    document.getElementsByClassName('user-info-space '+props.space_number)[0].append(document.getElementsByClassName('user-info-box '+props.space_number)[0]);
  }
  function dragBox(e) {
    e.dataTransfer.setData("text", e.target.className);
  }
  function deleteUserEvent() {
    document.getElementsByClassName('user-info-space '+props.space_number)[0].removeChild(document.getElementsByClassName('user-info-box '+props.space_number)[0]);
    dispatch(deleteUser(props.space_number));
  }
  return (
    <div>
      <div 
        onDragStart={dragBox}
        draggable="true" 
        className={'user-info-box '+props.space_number} 
        style={{backgroundColor: props.color}}>
          <div className='user-delete-button' onClick={deleteUserEvent}></div>
      </div>
    </div>
  );
}

export default UserInfoBox;