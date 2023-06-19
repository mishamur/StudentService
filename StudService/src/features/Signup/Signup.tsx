import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addSessionData } from 'entities/session';
import { useState } from 'react';



export const Signup = () => {
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const[email, setEmail] = useState('')
  const dispatch = useDispatch();
  return (
    <View>
      <SignupForm>
        <Title>Присоединяйся к нам!</Title>
        <Fields>
          <Field>
            <label htmlFor="firstname">Почта</label>
            <input onChange={(e) => {setEmail(e.target.value)}} type="text" id="firstname" placeholder="Name@example.com" autoComplete="off" required />
          </Field>
          <Field>
            <label htmlFor="password">Пароль</label>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="password" autoComplete="off" required />
          </Field>
          <Field>
            <label htmlFor="confirmPassword">Повторите пароль</label>
            <input onChange={(e) => {setConfirmPassword(e.target.value)}} type="password" id="confirmPassword" autoComplete="off" required />
          </Field>
        </Fields>
        <Button onClick={() => handleSignupFormSubmit(email, password, confirmPassword)}>Зарегистрироваться</Button>
        <Notice>
          <p>Уже есть аккаунт?</p>
          <a href="#">Войти</a>
        </Notice>
      </SignupForm>
    </View>
  )
  async function handleSignupFormSubmit(email :string, password :string, confirmPassword :string){
    //dispatch(addSessionData({token:'token', email:'1'}));
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    const data = await fetch("https://localhost:44309/api/account/login",{
      //mode: 'no-cors',
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "conformPassword": confirmPassword
      })
    }).then((response) =>  {
      response.json().then((data) =>{{
        console.log(data);
        dispatch(addSessionData({token: data.token, email: data.email}));
      }})
      
    }).catch(error => console.log(error));
  }
}

const View = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

const SignupForm = styled.div`
  width: 329px;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
  padding: 32px 24px;
  background: #fff;
`

const Title = styled.h2`
  font-size: 20px;
  line-height: 30px;
  color: #0b69a3;
`

const Fields = styled.div`
  margin: 24px 0;
`

const Field = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    line-height: 18px;
    color: #334e68;
    font-weight: 600;
    margin-bottom: 2px;
  }

  input {
    outline: none;
    border: none;
    height: 34px;
    background: #f0f4f8;
    border-radius: 8px;
    padding: 8px;
    font-size: 16px;
    line-height: 18px;
    color: #000000;

    &:placeholder {
      color: #829ab1;
      font-size: 16px;
      line-height: 18px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #127fbf;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  border: 0;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    color: #127fbf;
    border: 2px solid #127fbf;
    background: #fff;
  }
`

const Notice = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  line-height: 18px;

  p {
    margin: 0;
    font-weight: 400;
    color: #000000;
  }

  a {
    font-weight: 700;
    color: #127fbf;
    text-decoration: none;
    margin-left: 8px;
  }
`
