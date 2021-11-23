import React,{ useState,useEffect } from 'react'
import request from '../utils/request'
import style from '../assets/style/welcome.scss'
import avatar from '../assets/images/avatar.jpg'

const Welcome = ()=>{
  const [welcomeText] = useState('欢迎使用Carl的React16脚手架😉')
  const [githubLink] = useState('https://github.com/yyISACoder/react16-custom-scaffold')

  useEffect(()=>{
    const testRequest = async ()=>{
      const res = await request('scaffold')
      console.log(res)
    }

    testRequest()
  },[])

  return (
    <div className={style.welcome}>
      <img src={ avatar } />
      <p>{ welcomeText }</p>
      <p>
        github地址：<a href={ githubLink } target="_blank" rel="noreferrer">{ githubLink }</a>
      </p>
    </div>
  )
}

export default Welcome