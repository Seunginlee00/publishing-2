import React from 'react';

export const LoginPage = () => {
  return (  
  <div className="m-4">
    <div className='text-3xl font-bold mb-10'>로그인</div>
    <div>
      {/* 입력안하면 text */}
      <input type='text' placeholder='이메일을 입력해주세용' /> 
      <input type='password' placeholder='비밀번호를 입력해주세용' /> 
    </div>
    <div className='mt-10'>
      {/* 버튼 올 자리 */}
      {/* 버튼색은 회색 진한 800 글자는 하양 글자 중간  */}
      <div className='bg-gray-800 text-white text-center py-4'>로그인</div>
      <div className='text-center py-4 text-gray-800 border border-gray'>회원가입</div>
    </div>
  </div>);
};
