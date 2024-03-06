import React from 'react';
// 해당 강의 참고 
// https://youtu.be/oqOLcJ2Ct-0?si=8gYwgH9uYGVckJMi
export const HomePage = () => {
  return (  
    // margin 4rem > 16px 일듯   
  <div className="m-4">  
    <div className='space-y-4'> {/* 	margin-top: 1rem; 16px  사이 간격  */}
      <div className='text-2xl font-bold' >New</div>
      {/*  object-cover > 이걸 안쓰면 사진이 줄어드나 이걸 쓰면 그릇?크기는 고정 안에 이미지만 늘어낫다 줄엇다*/}
      <img 
      className='w-full h-72 object-cover rounded-2xl'
      src="https://villiv.co.kr/data/2023/01/2023-01-09_15-37-44-64178-1673246264.jpg" alt=''/>
      <div></div>
    </div>

    <div className='space-y-4'>
      <div className='text-2xl font-bold mb-4'>Category</div>
      {/* 자신의 크기 만큼 줄어듦  */}
      <div className='flex space-x-6'>
           {/*  위의 space-y-4가 아래도 잘 적용됨..!
           랜덤 : https://source.unsplash.com/random
           */}
        <div>
          <img
          className='w-24 h-24 object-cover rounded-full'
          src='https://plus.unsplash.com/premium_photo-1674062989129-4f8c01e8ac9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D' alt='' />
          <div className='text-center'>일식</div>
        </div>
        <div>
          <img
          className='w-24 h-24 object-cover rounded-full'
          src='https://images.unsplash.com/photo-1614277786110-1a64e457c4c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww' alt='' />
          <div className='text-center'>중식</div>
        </div>
        <div>
          <img
          className='w-24 h-24 object-cover rounded-full'
          src='https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWElMjBmb29kfGVufDB8fDB8fHww' alt='' />
          <div className='text-center'>한식</div>
        </div>
        <div>
          <img
          className='w-24 h-24 object-cover rounded-full'
          src='https://images.unsplash.com/photo-1598930230137-27b0b22154fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2VzdGVybiUyMGZvb2R8ZW58MHx8MHx8fDA%3D' alt='' />
          <div className='text-center'>양식</div>
        </div>
      </div>
    </div>

    <div>
      {/* font-size: 1.5rem; 24px line-height: 2rem; 32px
      굵기 bold 
      marginBottom 1rem; 16px 
      */}
      <div className='text-2xl font-bold mb-4'> List</div>
      {/* border  	padding: 1rem; 16px */}
      <div className='border p-4'>

        <div>
          {/*h-48 :  height: 12rem;  192px 
          고냥 숫자는 96?이 최대인듯? 퍼센트로도 할 수 있음 h-1/2
          bg-gray-100 : background-color: rgb(243 244 246);
          */}

          <div className='h-48 bg-gray-100'></div>
          <div className='mt-4'>
            <div className='text-lg font-semibold'> Card title </div>
            <div className='text-gray-500'>
              너무 신기함.. 
            </div>
            {/* 
            mt-4 margin-top: 1rem; 16px 
            space-y-2 : margin-top: 0.5rem; 8px  > 물체간 사이 간격 */}
            <div className='mt-4 space-y-2'>
              {/* 	bg-gray-800 : background-color: rgb(31 41 55); 
              
              */}
              <div className='bg-gray-800 text-white text-color'>
                  Button
              </div>
              <div className='bg-gray-800 text-white text-color'>
                  Button
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>);
};
