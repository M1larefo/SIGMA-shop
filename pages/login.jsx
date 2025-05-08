import React from 'react'
import { useState, useEffect } from 'react';
import {Header} from './Header'
import {useSiteState} from './Header'
import Link from 'next/link';
export default function LoginPage(){


const [themeChanger,setthemeChanger] = useState(`left-[52.2%]`)
  const [isThemeChanged,setisThemeChanged]= useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
const isWide=(width > 1050) ? true : false

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
   
    
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const  themeChange = () => {
  
    if(  (themeChanger===`left-[52.2%]`)){
        setthemeChanger(`left-[54.2%]`);
        setisThemeChanged(true);
          }else if( (themeChanger===`left-[54.2%]`)){
            setthemeChanger(`left-[52.2%]`);
            setisThemeChanged(false)
          }
          else if( (themeChanger===`left-[61.2%]`) && width > 630){
            setthemeChanger(`left-[64.6%]`);
            setisThemeChanged(true)
          }
          else if( (themeChanger===`left-[64.6%]`)){
            setthemeChanger(`left-[61.2%]`);
            setisThemeChanged(false)
          }
        
          else if( (themeChanger===`left-[61.2%]`) && width < 630){
            setthemeChanger(`left-[67%]`);
            setisThemeChanged(true)
          }
          else if( (themeChanger===`left-[67%]`)){
            setthemeChanger(`left-[61.2%]`);
            setisThemeChanged(false)
          }
        }



        if(isWide && ( themeChanger===`left-[64.6%]`)){
            setthemeChanger(`left-[54.2%]`);
           
          }else if(isWide && ( themeChanger===`left-[61.2%]`)){
            setthemeChanger(`left-[52.2%]`);
          }else if(!isWide && ( themeChanger===`left-[54.2%]`)){
            setthemeChanger(`left-[64.6%]`);
          }else if(!isWide && ( themeChanger===`left-[52.2%]`)){
            setthemeChanger(`left-[61.2%]`);
          }
          else if(width < 630 && ( themeChanger===`left-[64.6%]`)){
            setthemeChanger(`left-[67%]`);
          }
          else if(width > 630 && ( themeChanger===`left-[67%]`)){
            setthemeChanger(`left-[64.6%]`);
          }

   
    return(
      <>
      <title>SIGMA electricity shop</title>
  
       <div className="w-12/12 h-full ">
<Header/>
<button className={`${isThemeChanged ? 'bg-gray-700' : 'bg-white'} z-50 w-[4%] h-[30px] fixed top-[13px] outline-none rounded-xl ${isWide ? 'min-w-14' : 'min-w-[58px]'} ${isWide ? 'left-[52%]' : 'left-[61%]'}`}  onClick={themeChange}></button>
<button className={` ${isThemeChanged ? 'bg-white' : 'bg-black'} z-50 w-[1.4%] h-[25px] fixed top-[15px]  rounded-[50px] ${themeChanger} min-w-6`}  onClick={themeChange}></button>
<div className={` ${isThemeChanged ? 'bg-gray-900' : 'bg-gradient-to-tr from-blue-500 to-purple-900'} w-12/12 h-[1000px]  flex flex-row justify-center  `}>
<div className={`${isThemeChanged ? 'bg-slate-700' : 'bg-slate-200'}  h-[620px] flex flex-row z-0 w-[360px] min-w-[355px] relative top-14 rounded-lg`}>
<div className={`${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} text-7xl font-bold relative left-[26%] top-12`}>Login</div>
<div className='block'>
<input type="email" className={`bg-transparent z-0 text-2xl w-2/4 ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-48 h-14 right-[52%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg` }></input>
<label className='text-3xl text-lime-600 z-0 relative top-[105px] h-2 right-[52%]'>Email</label>
<input type="password" className={`bg-transparent z-0 text-2xl ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} w-[27%] mx-1 min-w-[320px] relative top-60 h-14 right-[52%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg `}></input>
<label className='text-3xl text-lime-600 z-0 relative top-[155px] h-2 right-[52%] '>Password</label>
<button className={`w-[320px] bg-amber-500 h-[50px] relative text-2xl right-[52%] top-[260px] rounded-2xl ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'}`}>Login</button>
<p className={`${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} text-xl relative right-[49%] top-[335px]`}> Do not have an account?</p>
<Link href="/sing-up"><div className='relative left-[19%] top-[302px] text-2xl text-blue-800 hover:border-[2px] border-b-blue-800  rounded-md w-[86px]'>Sing up</div> </Link>
</div>
</div>
</div>
       </div>
       </>
    )
}
