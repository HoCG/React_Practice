import React, {useState}  from 'react';
import UserInfoBox from './UserInfoBox';
import UserInfoSpace from './UserInfoSpace';
import { useSelector } from 'react-redux';
import '../styles/show_user_info.scss';

function ShowUserInfo() {
  const [spaces] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const userArr = useSelector((state) => state.user.userArr);
  return (
    <div className='user-info-main'>
      {
        spaces.map(space_number => (
          <UserInfoSpace key={space_number} space_number={space_number}/>
        ))
      }
      {
        userArr.map(user => (
          <UserInfoBox key={user.id} space_number={user.space_number} color={user.color}/>
        ))
      }
    </div>
  );
}

export default ShowUserInfo;