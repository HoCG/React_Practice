import React from 'react';
import ShowUserInfo from '../components/ShowUserInfo';
import InputUser from '../components/InputUser';
import '../styles/main_page.scss'

function MainPage() {
  return (
    <div className='main-page'>
      <InputUser></InputUser>
      <ShowUserInfo></ShowUserInfo>
    </div>
  );
}

export default MainPage;