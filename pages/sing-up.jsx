import React from 'react'
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc,doc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAGFrnfR5XYdsWnKf6QsKU1vjE7_SioqyE",
  authDomain: "sigma-electricity-shop.firebaseapp.com",
  databaseURL: "https://sigma-electricity-shop-default-rtdb.firebaseio.com",
  projectId: "sigma-electricity-shop",
  storageBucket: "sigma-electricity-shop.appspot.com",
  messagingSenderId: "89506601147",
  appId: "1:89506601147:web:c035b60739d4861bf8b19e",
  measurementId: "G-HWQYRWL3Q6"
};

const app = initializeApp(firebaseConfig);


export default function SingUpPage(){
  function useSiteState(){
 
    const[ BlockDisplay, setBlockDisplay] = useState(true);
    const[BurgerDisplay, setBurgerDisplay] = useState(true);
     
    const [themeChanger,setthemeChanger] = useState(`left-[52.2%]`)
  
   //window resize
       const [width, setWidth] = useState(0)
       const [height, setHeight] = useState(0)
       
   const isWide=(width >= 1050) ? true : false
  
   return{
    BlockDisplay,
    setBlockDisplay,
    BurgerDisplay,
    setBurgerDisplay,
    width,
    setWidth,
    height,
    setHeight,
    isWide, 
    themeChanger,
    setthemeChanger,
   }
  }

  function Header(){
    const {
     BlockDisplay,
     setBlockDisplay,
 BurgerDisplay,
 setBurgerDisplay,
 width,
 setWidth,
 height,
 setHeight,
 isWide,
 themeChanger,
 setthemeChanger,
    } = useSiteState()

    
   
    let IsBurgerClicked=false;
   const [SearchVal, setSearchVal]=useState('')
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

     const MenuBurgerClick = () => {
       if (IsBurgerClicked === false){
         IsBurgerClicked=true
       }else{
         IsBurgerClicked=false
       }
 
 
     if (isWide === true){
       setBurgerDisplay(false);
     }
     else if((isWide === false) && (IsBurgerClicked=== true) && (BurgerDisplay === false)) {
       setBurgerDisplay(true);
     }else if((isWide === false) && (IsBurgerClicked=== false)){
     setBurgerDisplay(true);
     }else if((isWide === false) && (IsBurgerClicked=== true)) {
       setBurgerDisplay(false);
     }
     else if((isWide === false) && (IsBurgerClicked=== true)) {
       setBurgerDisplay(false);
     }
 
 
     if(BurgerDisplay === true){
       setBlockDisplay(false);
     }else if(BurgerDisplay === false){
       setBlockDisplay(true);
     }
    
     }
   

     const Searching = () => {
       if(typeof window !== undefined){
         localStorage.setItem('SearchReq', SearchVal)
       
       }
       window.location.href='/search';
     }

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

 

   return (
 
     <>
     <header  className={` flex flex-row   bg-gradient-to-r from-sky-800 to-indigo-800 w-12/12 h-[58px] sticky top-0 z-40 `}>
           
           <input placeholder="Search..." className={` bg-gray-500  relative left-[19.6%] h-[34px] min-w-[120px] top-[10px] w-[27.1%] rounded-xl rounded-r-none outline-none p-3 text-white `} name="SearchVal"  value={SearchVal} onChange={e => { setSearchVal(e.currentTarget.value); }}></input>
          
          
            <button className={` cursor-pointer relative mx-0 left-[31%] text-xl  bg-emerald-500 text-zinc-50 h-[40px] w-[8%] top-[8px] font-bold italic font-sans  rounded-xl ${isWide ? "block" : 'hidden' } `}><Link href="/login"><div className=" h-10 pt-[5px] rounded-xl"> Login </div></Link></button> 
            
             <div className="bg-[url('./img/wired-outline-19-magnifier-zoom-search (1).png')] z-0 w-[20px]"></div>
             <button className={` cursor-pointer relative mx-0 left-[31%] text-xl  bg-zinc-50 text-emerald-500 h-[40px] w-[8%] top-[8px] font-bold italic font-sans  rounded-xl ${isWide ? "block" : 'hidden' } `}><Link href="/sing-up"><div className=" h-10 pt-[5px] rounded-xl"> Sing Up </div></Link></button> 
             
             <button className={`z-40 cursor-pointer  relative left-[34%] text-xl mx-1 bg-teal-700 text-zinc-50  h-[40px] w-[8%] top-[8px] font-bold italic font-sans rounded-xl ${isWide ? 'block' : ' hidden' } `}><Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl">Cart</div></Link></button>
           
             <button className={`z-40 cursor-pointer  relative left-[36%] mx-1 bg-zinc-500 text-zinc-50 text-xl h-[40px] w-[8%] text-clip  top-[8px] font-bold italic font-sans rounded-xl ${isWide ? 'block' : ' hidden' } `}><Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl">Profile</div></Link></button>
             <div className={`cursor-pointer relative left-[47%]  w-12 h-[40px] top-2  `} onClick={MenuBurgerClick}>
       
             <div className={`cursor-pointer w-12 my-1 bg-gray-500 h-2 rounded-xl ${BurgerDisplay && (isWide=== false) ? 'block' : 'hidden'}` } ></div>
             <div className={`cursor-pointer w-12 my-1 bg-gray-500 h-2 rounded-xl ${BurgerDisplay && (isWide=== false) ? 'block' : 'hidden'} `} ></div>
            <div  className={`cursor-pointer w-12 my-1 bg-gray-500 h-2 rounded-xl ${BurgerDisplay && (isWide=== false) ? 'block' : 'hidden'} `}></div>
       
            <div className={`cursor-pointer w-12  bg-gray-500 h-2 rotate-[315deg] relative top-5  rounded-xl ${(BurgerDisplay=== false)&& (isWide=== false)  ? 'block' : 'hidden'} ` } ></div>
            <div  className={`cursor-pointer w-12  bg-gray-500 h-2 rotate-[45deg] relative top-3 rounded-xl ${(BurgerDisplay=== false)  && (isWide=== false)   ? 'block' : 'hidden'} `}></div>
              </div>
              <div className={` z-40  bg-slate-600 w-2/5 h-60  absolute top-14 left-[61%] flex flex-col rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' } `}>
              <button className={` z-40 cursor-pointer   relative left-[25%] my-2 bg-emerald-500 text-zinc-50 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' }   `} ><Link href="/login"><div className=" h-10 pt-[5px] rounded-xl"> Login </div></Link></button>  
              <button className={` z-40 cursor-pointer  relative left-[25%] my-2 bg-zinc-200 text-emerald-500 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' }  `}><Link href="/sing-up"><div className=" h-10 pt-[5px] rounded-xl"> Sing Up </div></Link></button>
              <button className={`z-40 cursor-pointer  relative left-[25%] my-2 bg-teal-800 text-zinc-50 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' } `}><Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl">Cart</div></Link></button>
              <button className={`z-40 cursor-pointer  relative left-[25%] my-2 bg-zinc-500 text-zinc-50 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans  rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' } `}><Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl">Profile</div></Link></button>
              </div> 
              <div>
               
              </div>
             
              <img src='https://cdn-icons-png.flaticon.com/512/428/428556.png' className={`z-50 bg-black w-8 h-[34px] absolute left-[47.6%] ${(width > 600) && (width < 1100) ? 'left-[46.5%]' : 'left-[47.6%]'} top-[10px] rounded-2xl hover:cursor-pointer`} onClick={() => Searching()} ></img>
              <Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl"> <img src='https://cdn-icons-png.freepik.com/512/8847/8847249.png' className={` z-50 bg-black w-8 h-8 absolute left-[78.7%] ${width > 1500 ? "block" : 'hidden' } top-3 rounded-2xl hover:cursor-pointer`}></img></div></Link>
              <Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl"><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className={`z-50 bg-black  ${width  > 1500 ? "block" : 'hidden' } w-8 h-8 absolute left-[89.1%] top-3 rounded-2xl hover:cursor-pointer`}></img></div></Link>
              <Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl"><img src='https://cdn-icons-png.freepik.com/512/8847/8847249.png' className={` z-50 bg-black w-8 h-8 absolute left-[71.7%] ${((width < 1050) && (width > 710)) && (BurgerDisplay=== false)? "block" : 'hidden' } top-[187px] rounded-2xl hover:cursor-pointer`}></img></div></Link>
              <Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl"><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className={`z-50 bg-black  ${((width < 1050) && (width > 710)) && (BurgerDisplay=== false) ? "block" : 'hidden' } w-8 h-8 absolute left-[71.7%] top-[243px] rounded-2xl hover:cursor-pointer`}></img></div></Link>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AhcexJzdsr9r-ux1wCC7KEl6j_HbDYCFUQ&s' className={`z-50 bg-black ${ (width >= 900) || (width < 640) ? 'w-12' : 'w-10'} h-11 absolute ${ width >= 900 ? 'left-[20px]' : 'left-[5px]'}  top-[6px] rounded-2xl `}></img>
              <p className={`z-50  absolute ${ width >= 900 ? 'left-[76px]' : 'left-[51px]'} font-bold top-0 ${ width >= 640 ? 'block' : 'hidden'}  ${ width >= 720 ? 'text-2xl' : 'text-xl'} text-zinc-200 `}>SIGMA</p>
              <p className={`z-50  absolute ${ width >= 900 ? 'left-[76px]' : 'left-[51px]'} font-bold top-[25px] ${ width >= 640 ? 'block' : 'hidden'} ${ width >= 720 ? 'text-sm' : 'text-xs'} font-serif italic text-zinc-200 `}>electricity </p>
              <p className={`z-50  absolute ${ width >= 900 ? 'left-[92px]' : 'left-[72px]'} font-bold top-[37px] ${ width >= 640 ? 'block' : 'hidden'} ${ width >= 720 ? 'text-sm' : 'text-xs'}  font-serif italic text-zinc-200 `}>shop</p>
              <button className='bg-orange-400 w-[4.3%] h-[34px] absolute top-[10px] left-[46.5%] rounded-r-xl min-w-10 ' onClick={() => Searching()}></button>
           </header>
     </>
 )
}

function Footer(){
    return(
         <>
    <div className=" bg-slate-800 w-12/12 h-[130px] ">
    <div className='relative top-[40px] left-[60px] text-4xl text-slate-100 font-sans font-semibold'>© SIGMA electicity company</div>
    </div>
    </>
    )
}

  let Counter;
  let isThemeCh;
  const Copy25A_ArrayOfCounters=Array(98).fill(0);  
  if (typeof window !== 'undefined') {


if(localStorage.getItem('theme')){
   Counter=parseInt(localStorage.getItem('theme'))
   if(Counter % 2 === 0){
    isThemeCh=true;
   }else{
    isThemeCh=false;
   }
}else{
   Counter=1;
   isThemeCh=false;
}
console.log(Counter)
  }


 const [email, setemail]=useState('')
 const [password, setpassword]=useState('')
 const [password2, setpassword2]=useState('')
 const [passwordMatch, setpasswordMatch]=useState('')
 const auth = getAuth();
const db=getFirestore()
  const SingUping = () => {
    console.log(email, password,password2)
 if(password === password2){
  setpasswordMatch('right')

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up  
    Counter=parseInt(Counter)+2;
    const user = userCredential.user;
    const userData={email:email, password: password}
   


    localStorage.setItem('theme', Counter + 2);
    const docRef=doc(db,"users", user.uid);
    setDoc(docRef, userData)
    .then(()=>{
     window.location.href='/'
    })
    .catch((error) => {

     console.error("error writing document", error)
     
    })
    window.location.href='/login'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode === "auth/email-already-in-use"){
      alert("Email Address Already Exists!")
    }
  });
  
 }else{

if(password !== password2){
  setpasswordMatch('wrong')
alert("passwords don't match!")
}else{
  alert("Incorrect Email")
}

 }

  }
 
               
  const [isThemeChanged,setisThemeChanged]= useState(isThemeCh ? true : false)

  const [themeChanger,setthemeChanger] = useState(isThemeChanged ? 'left-[54.2%]' : `left-[52.2%]`)
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
      localStorage.setItem('theme', Counter + 1);

   setisThemeChanged(!isThemeChanged)
    if(  (themeChanger===`left-[52.2%]`)){
     
        setthemeChanger(`left-[54.2%]`);
          }else if( (themeChanger===`left-[54.2%]`)){
            setthemeChanger(`left-[52.2%]`);
           
          }
          else if( (themeChanger===`left-[61.2%]`) && width > 630){
            setthemeChanger(`left-[64.6%]`);   
            
          }
          else if( (themeChanger===`left-[64.6%]`)){
            setthemeChanger(`left-[61.2%]`);     
            
          }        
          else if( (themeChanger===`left-[61.2%]`) && width < 630){
            setthemeChanger(`left-[67%]`);
            
          }
          else if( (themeChanger===`left-[67%]`)){
            setthemeChanger(`left-[61.2%]`);
          
          }

          Counter=parseInt(Counter)+1;
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
<button className={`${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} z-50 w-[4%] h-[30px] fixed top-[13px] outline-none rounded-xl ${isWide ? 'min-w-14' : 'min-w-[58px]'} ${isWide ? 'left-[52%]' : 'left-[61%]'}`} suppressHydrationWarning={true} onClick={themeChange}></button>
<button className={` ${isThemeChanged ? 'bg-zinc-200' : 'bg-black'} z-50 w-[1.4%] h-[25px] fixed top-[15px]  rounded-[50px] ${themeChanger} min-w-6`} suppressHydrationWarning={true}  onClick={themeChange}></button>
<div className={`w-12/12 h-[1000px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gradient-to-tr from-blue-500 to-purple-900'} flex flex-row justify-center `}>

<div className={`${isThemeChanged ? 'bg-slate-700' : 'bg-slate-200'} h-[710px] flex flex-row z-0 w-[360px] min-w-[355px] relative top-14 rounded-lg`}>
<div className={`w-[5%] h-[20px] z-40 relative top-[180px] left-[7%] `}></div> 
<div className={`${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} text-6xl font-bold h-2 w-48 relative left-[20%] top-12`}>Sing</div>
<div className={`${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} text-6xl font-bold h-2 w-48 relative left-[24%] top-12`}> Up</div>

<div className='block'>
  
<input type="email" className={`bg-transparent z-0 text-2xl pl-[10px] w-2/4 ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-48 h-14 right-[56%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg`}  name="email"  value={email} onChange={e => { setemail(e.currentTarget.value); }} ></input>
<label className='text-3xl text-lime-600 z-0 relative top-[100px] h-2 right-[56%]'>Email</label>
<input type="password" className={`bg-transparent z-0 text-2xl pl-[10px] w-2/4 ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-[215px] h-14 right-[56%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg`}  name="password"  value={password} onChange={e => { setpassword(e.currentTarget.value); }}></input>
<label className='text-3xl text-lime-600 z-0 relative top-[132px] h-2 right-[56%]'>Password</label>
<input type="password" className={`bg-transparent z-0 pl-[10px] text-2xl w-[27%] ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-60 h-14 right-[56%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg `} name='password2' value={password2} onChange={e => { setpassword2(e.currentTarget.value); }}></input>
<label className='text-3xl text-lime-600 z-0 relative top-[155px] h-2 right-[56%] '>Confirm password</label>
<button className={` ${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} w-[320px] bg-amber-500 h-[50px] relative text-2xl right-[56%] top-[260px] rounded-2xl text-black`} onClick={() =>  SingUping()}>Sign Up</button>
<p className={`text-2xl ${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} relative right-[49%] top-[335px] `}> Have an account?</p>
<Link href="/login"><div className='relative left-[10%] top-[302px] text-2xl text-blue-600 hover:border-[2px] border-b-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0    hover:rounded-md w-[62px]'>Login </div> </Link>
</div>
</div>
</div>
       </div>
       <Footer/>
       </>
    )
}