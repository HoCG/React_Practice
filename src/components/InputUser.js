import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/user';
import SetColorDialog from '../components/SetColorDialog';
import '../styles/input_user.scss';


function InputUser() {
  const [dialog, setDialog] = useState(false);
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [phone_number, setPhoneNumber] = useState('');
  const [newUser, setNewUser] = useState({id: 1, name: '', age: 0, phone_number: '', space_number: 1, color: ''});
  const dispatch = useDispatch();

  function handleName(e) {
    setName(e.target.value);
    newUser.name = e.target.value;
  }
  function handleAge(e) {
    setAge(e.target.value);
    newUser.age = e.target.value;
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
    newUser.phone_number = e.target.value;
  }

  function controlDialog() {
    setDialog(true);
  }

  function submitUser() {
    newUser.color = color;
    dispatch(addUser(newUser));
    setNewUser({id: 1, name: '', age: 0, phone_number: '', space_number: 1, color: color});
  }

  return (
    <div className='input-user'>
      <div className='input-user__show-name'>이름</div>
      <input className='input-user__input-name' value={name} onChange={handleName}></input>
      <div className='input-user__show-age'>나이</div>
      <input className='input-user__input-age' value={age} onChange={handleAge}></input>
      <div className='input-user__show-phone-number'>핸드폰 번호</div>
      <input className='input-user__input-phone-number' value={phone_number}onChange={handlePhoneNumber}></input>
      <div className='input-user__color-part'>
        <div className='input-user__color-part--color-demo' style={{backgroundColor: color}}></div>
        <div className='input-user__color-part--color-button' onClick={controlDialog}>색상설정버튼</div>
      </div>
      <div className='input-user__submit-button' onClick={submitUser}>submit</div>
      {
        dialog && <SetColorDialog setColor={setColor} setDialog={setDialog}/>
      }
    </div>
  );
}

export default InputUser;