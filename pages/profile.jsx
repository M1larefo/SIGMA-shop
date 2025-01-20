import React from 'react'
import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc,doc} from 'firebase/firestore';
import Link from 'next/link';

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



export default function ProfilePage(){
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

  let totalMoneySpend=0;
  let Quantity=0;
  let OrderNumber=0;
  let Counter;
  let isThemeCh;
  const TotalPriceArrayCopy=Array(98).fill('');
  const DayArrayCopy=Array(98).fill('');
  const TimeArrayCopy=Array(98).fill('');
  const Copy25A_ArrayOfCounters=Array(98).fill(0);  
  if (typeof window !== 'undefined') {
  
    if(localStorage.getItem(`TotalMoneySpend`)){
      totalMoneySpend=localStorage.getItem(`TotalMoneySpend`);
    }
    if(localStorage.getItem(`Quantity`)){
      Quantity=localStorage.getItem(`Quantity`);
    }
    if(localStorage.getItem(`OrderNumber`)){
      OrderNumber=localStorage.getItem(`OrderNumber`);
    }

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
for(let i=0; i < OrderNumber;i++){
  TotalPriceArrayCopy[i]=localStorage.getItem(`totalPrice_${i+1}`);
   DayArrayCopy[i]=localStorage.getItem(`day_${i+1}`);
   TimeArrayCopy[i]=localStorage.getItem(`time_${i+1}`);
}
/*setTotalPriceArray(TotalPriceArrayCopy);
setDayArray(DayArrayCopy);
setTimeArray(TimeArrayCopy);*/

  }

  const [isThemeChanged,setisThemeChanged]= useState(isThemeCh ? true : false)

  const [themeChanger,setthemeChanger] = useState(isThemeChanged ? 'left-[54.2%]' : `left-[52.2%]`)
    const [width, setWidth] = useState(0)
    const [Height1, setHeight1] = useState()
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpenedSeeMore, setisOpenedSeeMore] = useState(Array(97).fill(false))
    console.log(isOpenedSeeMore);
   let EmailText =''
    let PasswordText = ''
    const auth = getAuth();
    const db=getFirestore()
    let totalProductsQuantity=Array(21).fill(0);
  const isWide=(width > 1050) ? true : false
  const UserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null
  let isLoggedIn2= UserId ? true : false;
 
   
      
  
    
  
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
        
     
        if (typeof window !== 'undefined') {
          const loggedUserId=window.localStorage.getItem("loggedInUserId")
          console.log(loggedUserId)
          const loggedUserEmail = window.localStorage.getItem("loggedInUserEmail")
        const loggedUserPassword=window.localStorage.getItem("loggedInUserPassword")
        EmailText=loggedUserEmail;
        PasswordText=loggedUserPassword;
        } 
        
       
       
        /*  if (loggedUserId) {

            const docRef=doc(db,"users", loggedUserId);
            setDoc(docRef)
            .then((docSnap)=>{
             if(docSnap.exists()){
              const userData=docSnap.data();
               setEmailText(userData.email)
               setPasswordText(userData.password)
             }
            })
          } */
   
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    
  }
  useEffect(() => {
    // component is mounted and window is available
  
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

 
const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
   console.log(position)
   
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const [isLoggedIn, setisLoggedIn] = useState(typeof loggedUserId !== undefined ? 'true' : 'false')

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

              const OpenSeeMore = (key1) => {
                 const lkey_1=parseInt(key1)
                const CopyisOpenedSeeMoreArray=isOpenedSeeMore.slice();
                if(isOpenedSeeMore[lkey_1] === false){
                  CopyisOpenedSeeMoreArray[lkey_1] = true;
                }else{
                  CopyisOpenedSeeMoreArray[lkey_1] = false;
                }
               
                setisOpenedSeeMore(CopyisOpenedSeeMoreArray);
                console.log( CopyisOpenedSeeMoreArray);
              }

          const  Logouting = () => {
            setisLoggedIn(!isLoggedIn)
            
            if (typeof window !== 'undefined') {
              if(isThemeChanged){
                localStorage.setItem('isLogout', true)
              }else{
                localStorage.setItem('isLogout', false)
              }
              for(let i=0; i < OrderNumber;i++){
                localStorage.setItem(`totalPrice_${i+1}`, ``)
                localStorage.setItem(`time_${i+1}`, ``)
                localStorage.setItem(`day_${i+1}`, ``)
              }
              localStorage.setItem(`Quantity`, 0)
              localStorage.setItem(`TotalMoneySpend`,  0)
              localStorage.setItem(`OrderNumber`, 0)
              window.localStorage.setItem("loggedInUserId", '')
              window.localStorage.setItem("loggedInUserEmail", '')
              window.localStorage.setItem("loggedInUserPassword",'')
              for(let i=0; i < 98; i++){
                if(localStorage.getItem(`${i}`) > 0){
                  localStorage.setItem(`${i}_${OrderNumber}`, 0);
                 
                }
              }
               window.location.href='/'
            }
          }
          for(let j =0; j < 25;j++){
             for(let i=0; i < 98; i++){
              if(localStorage.getItem(`${i}_${j+1}`) > 0){
                totalProductsQuantity[j] =totalProductsQuantity[j] + 1;
              }
            }
            
          }


          function OrderOperation({key1, key2, price1,imgRef,productName}){
            let productCount;
            const key_1=parseInt(key1)
            const key_2=parseInt(key2)
            const price = parseInt(price1)
         if( typeof window !== undefined) {
           if( localStorage.getItem(`${key_1}_${key_2}`)){
            productCount=localStorage.getItem(`${key_1}_${key_2}`);
           }
         }
           return(
            <>
            <div className={`${productCount ? 'block' : 'hidden' } ${isOpenedSeeMore[key_2] ? 'block' : 'hidden'} `}>
              <div className={` relative h-[100px]  bottom-[30px]  rounded-2xl`}> 
  <img src={imgRef} className={`h-[80px] w-[15%] relative  left-3  rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`}></img>
  <div className={` relative left-[18%] bottom-[55px] text-2xl font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`}>{`${productName}`}</div>
  <div className={`${width > 540 ? 'block' : 'hidden'} relative bottom-[95px] left-[71%]  ${width > 800 ? ' text-4xl' : ' text-2xl'}   font-bold  font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price}$</div>

  <div  className={`  ${isThemeChanged ? 'bg-gray-700' : 'bg-gray-100'}   font-sans font-bold ${width > 800 ? ' w-[125px]' : ' w-[85px]'}  ${width > 800 ? ' h-[50px]' : 'h-[38px]'} relative left-[85.5%] bottom-[135px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  ${width > 800 ? ' text-4xl' : ' text-2xl'} text-center pl-px ` }>{`${productCount}`}</div>
</div>
</div>
            </>
           )
           }
          
          function AOrdersDecription({key1}){
            const key=parseInt(key1)

           

           console.log(totalProductsQuantity[key])
            return(
              <div className={` ${OrderNumber >= key ? 'block' : 'hidden'} ${isLoggedIn2 ? 'block' : 'hidden'} mb-[160px]  z-0`}>
              <div className={`  w-[65%] relative ${width > 750 ? 'left-[20%]' : 'left-[14%]'} rounded-xl ${isOpenedSeeMore[key] ? `h-[${200 + 105*totalProductsQuantity[key - 1]}px]` : ' h-[80px]'} ${isLoggedIn2 ? 'block' : 'hidden'} top-[183px] z-0 ${isThemeChanged ? 'bg-slate-700' : 'bg-slate-100'} mb-10`}>
<div  className={` relative  left-[30px]   font-sans   font-bold  truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} top-[10px] text-3xl text-center pr-[120%] pt-[10px] ` }>{`Order #${key}`} <div className='relative left-[250px] bottom-[38px] '> {`${DayArrayCopy[key - 1]}`}</div> <div className='relative left-[550px] bottom-[75px] '> {`${TimeArrayCopy[key - 1]}`}</div> <div className='relative left-[830px] bottom-[110px]  z-50'> {`${TotalPriceArrayCopy[key - 1]}`}$</div>
<div  className={`${width > 540 ? 'block' : 'hidden'} z-10 cursor-pointer ${width > 800 ? 'w-10' : 'w-8'}  bg-gray-400 ${width > 800 ? 'h-[8px]' : 'h-[6px]'} ${isOpenedSeeMore[key] ? 'rotate-[45deg]' : ' rotate-[315deg]'}  relative bottom-[130px] left-[1095px] rounded-xl  ` } onClick={ () =>  OpenSeeMore(key)}></div>
<div   className={`${width > 540 ? 'block' : 'hidden'} z-10 cursor-pointer ${width > 800 ? 'w-10' : 'w-8'}  bg-gray-400 ${width > 800 ? 'h-[8px]' : 'h-[6px]'} ${isOpenedSeeMore[key] ? 'rotate-[315deg]' : ' rotate-[45deg]'}  relative bottom-[140px] left-[1070px] rounded-xl  `} onClick={ () =>  OpenSeeMore(key)}></div>
<div className={`relative left-[1070px] bottom-[130px] text-base `}> {`See more`}</div>
<div className={`h-[57px] w-[70px] relative left-[1070px]   ${isLoggedIn2 ? 'block' : 'hidden'}  bottom-[190px] bg-transparent hover:cursor-pointer`} onClick={ () =>  OpenSeeMore(key)}></div>
</div>
<div  className={`${isOpenedSeeMore[key] ? 'block' : 'hidden'} relative  left-[40px]   font-sans   font-bold  truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} bottom-[10px] text-2xl text-center pr-[120%] pt-[10px] ` }>{`Image`}
   <div className='relative left-[250px] bottom-[27px] '> {`Product name`}</div> 
   <div className='relative left-[840px] bottom-[58px] '> {`Price`}</div>
    <div className='relative left-[1035px] bottom-[89px]  z-50'> {`Quantity`}</div>
    </div>
   
    <OrderOperation key1="0" key2={key} price1="209" productName="Smartphone Samsung Galaxy A15 8GB/256GB" imgRef='https://img.5element.by/import/images/ut/goods/good_c21e7d2e-ae25-11ee-8db3-005056012b6d/sm-a155-goluboy-128gb-telefon-gsm-samsung-galaxy-a15-1_600.jpg'/>
<OrderOperation key1="1" key2={key} price1="149" productName="Smartphone Xiaomi Redmi 13C 8GB/256GB " imgRef='https://img.5element.by/import/images/ut/goods/good_f858c95e-dc5d-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="2" key2={key} price1="304" productName="Smartphone Honor 200 Lite" imgRef='https://img.5element.by/import/images/ut/goods/good_2460e313-2964-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="3" key2={key} price1="899" productName="Smartphone APPLE iPhone 14 128GB " imgRef='https://img.5element.by/import/images/ut/goods/good_b1710876-9442-11ee-8db3-005056012b6d/iphone-14-128gb-midnight-telefon-gsm-apple-mvup3ch-a-1_600.jpg'/>
<OrderOperation key1="4"  key2={key} price1="79" productName="Smartphone HONOR X5 plus 2GB/32GB " imgRef='https://img.5element.by/import/images/ut/goods/good_2a03a205-4e30-11ee-bb94-005056012465/x5-plus-wod-lx1-4gb-64gb-cyan-lake-telefon-gsm-honor-1_600.jpg'/>
<OrderOperation key1="5" key2={key}  price1="299" productName="Smartphone Vivo V25 8GB/256GB" imgRef='https://img.5element.by/import/images/ut/goods/good_5f4ef522-3852-11ed-bb95-0050560120e8/v25-8gb-256gb-aquamarine-blue-telefon-gsm-vivo-1_600.jpg'/>
<OrderOperation key1="6"  key2={key}  price1="329" productName="Smartphone POCO X6 5G 8GB/256GB " imgRef='https://img.5element.by/import/images/ut/goods/good_9175e137-3303-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="7"  key2={key} price1="239" productName="Smartphone Huawei nova 12  8GB/256GB  " imgRef='https://img.5element.by/import/images/ut/goods/good_7e6666a9-f286-11ee-8db3-005056012b6d/nova-12-se-256gb-bne-lx1-black-telefon-gsm-huawei-1_600.jpg'/>
<OrderOperation key1="8"  key2={key} price1="1659" productName="Smartphone Samsung Galaxy S24 Ultra 512GB" imgRef='https://img.5element.by/import/images/ut/goods/good_f2a2981e-b474-11ee-8db3-005056012b6d/sm-s928-zheltyy-titan-512gb-telefon-gsm-samsung-galaxy-s24-ultra-1_600.jpg'/>
<OrderOperation key1="9"  key2={key}  price1="579" productName="Smartphone APPLE iPhone 11 Pro Max 64GB" imgRef='https://img.5element.by/import/images/ut/goods/good_b58146cd-828d-11ed-bb97-0050560120e8/-1_600.jpg'/>
<OrderOperation key1="10"  key2={key}  price1="1249" productName="TV Samsung QE55Q70CAUXRU" imgRef='https://img.5element.by/import/images/ut/goods/good_ad7bd4f2-2ae4-11ee-bb93-005056012465/qe55q70cauxru-televizor-samsung-1_600.jpg'/>
<OrderOperation key1="11"  key2={key} price1="379" productName="TV Vityaz 5028ALULF1204 " imgRef='https://img.5element.by/import/images/ut/goods/good_355bf48e-f096-11ec-bb95-0050560120e8/32lh0212-televizor-vityaz-1_600.jpg'/>
<OrderOperation key1="12" key2={key} price1="345" productName="ТV Horizont 50LE7513DFG" imgRef='https://img.5element.by/import/images/ut/goods/good_265a403c-16a1-11ea-80c7-005056840c70/good_img_5ef54fd5-172c-11ea-80c7-005056840c70_600.jpg'/>
<OrderOperation key1="13" key2={key} price1="239" productName="ТV KIVI MR3286FD706BHT " imgRef='https://img.5element.by/import/images/ut/goods/good_4825c6ec-44cf-11ef-8db4-005056012b6d/m32fd70b-televizor-kivi-1_600.jpg'/>
<OrderOperation key1="14" key2={key} price1="2429" productName="ТV Sony Bravia A80L XR-55A80L " imgRef='https://img.5element.by/import/images/ut/goods/good_f8f46b33-2759-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="15" key2={key} price1="4499" productName="ТV LG B60L OLED77C4RLAL" imgRef='https://img.5element.by/import/images/ut/goods/good_22a1d6e5-f74e-11ee-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="16" key2={key} price1="859" productName="ТV Harper 65QR850TS/RU" imgRef='https://img.5element.by/import/images/ut/goods/good_60ad82fa-3858-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="17" key2={key} price1="609" productName="ТV IFFALCON iFFR55Q73TG" imgRef='https://img.5element.by/import/images/ut/goods/good_e2ecc293-2bc3-11ee-bb91-005056012464/iff55q73-televizor-iffalcon-1_600.jpg'/>
<OrderOperation key1="18" key2={key} price1="644" productName="Laptop ASUS Vivobook Go 15 E1504FA-BQ831W" imgRef='https://img.5element.by/import/images/ut/goods/good_f19c2733-e135-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="19" key2={key} price1="1739" productName="Laptop Apple MacBook Air 15 M2 2023 8/256" imgRef='https://img.5element.by/import/images/ut/goods/good_ef15f590-4d49-11ee-bb92-005056012464/-1_600.jpg'/>
<OrderOperation key1="20" key2={key} price1="1329" productName="Laptop Lenovo LOQ 15APH8 82XTE1ES" imgRef='https://img.5element.by/import/images/ut/goods/good_64072d2e-025e-11ef-8db4-005056012b6d/-1_200.jpg'/>
<OrderOperation key1="21" key2={key} price1="774" productName="Laptop Acer Aspire 3 A315-58G-5683" imgRef='https://img.5element.by/import/images/ut/goods/good_f4973714-3046-11ee-bb93-005056012465/nx-aduel-003-noutbuk-aspire-3-acer-1_600.jpg'/>
<OrderOperation key1="22" key2={key} price1="1029" productName="Laptop Huawei MateBook D 16 MCLG-X" imgRef='https://img.5element.by/import/images/ut/goods/good_1e138c3f-a588-11ee-8db3-005056012b6d/mclg-x-53013wxa-matebook-d16-noutbuk-huawei-1_600.jpg'/>
<OrderOperation key1="23" key2={key} price1="1451" productName="Laptop MSI Prestige 13 AI Evo MS-13Q2" imgRef='https://img.5element.by/import/images/ut/goods/good_1b2c8b51-2e15-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="24" key2={key} price1="959" productName="Laptop Tecno Megabook S1 i5/16/512/Grey/W<" imgRef='https://img.5element.by/import/images/ut/goods/good_6dec0c31-8a00-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="25" key2={key} price1="450" productName="Wireless Dreame Vacuum Cleaner H12S" imgRef='https://img.5element.by/import/images/ut/goods/good_ac31eb0a-be95-11ee-8db3-005056012b6d/hhr30b-h12s-wet-and-dry-vacuum-cleaner-besprovodnoy-pylesos-dreame-1_600.jpg'/>
<OrderOperation key1="26" key2={key} price1="108" productName="Vacuum Cleaner KARCHER WD 3 V-17/20" imgRef='https://img.5element.by/import/images/ut/goods/good_8a15861d-0c41-11ef-8db4-005056012b6d/-2_600.jpg'/>
<OrderOperation key1="27" key2={key} price1="224" productName="Xiaomi Robot Vacuum S10 BHR5988EU " imgRef='https://img.5element.by/import/images/ut/goods/good_2adf8d9b-038d-11ee-bb91-005056012464/-1_600.jpg'/>
<OrderOperation key1="28" key2={key} price1="122" productName="Robot for cleaning windows Dadget W120" imgRef='https://img.5element.by/import/images/ut/goods/good_f1e2d64a-db72-11ec-bb95-0050560120e8/kit-fb0318-robot-moyschik-okon-dadzhet-w120-1_600.jpg'/>
<OrderOperation key1="29" key2={key} price1="102" productName="Wiper KARCHER WV 2 Premium (1.633-425.0)" imgRef='https://img.5element.by/import/images/ut/goods/good_d7c9a182-ec2f-11ea-80c1-005056844aec/wv-2-premium-1-633-425-0-stekloochistitel-karcher-1_600.jpg'/>
<OrderOperation key1="31" key2={key} price1="94" productName="Smart-watch Huawei Watch FIT 3  Green" imgRef='https://img.5element.by/import/images/ut/goods/good_0d2f90fd-14fa-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="32" key2={key} price1="516" productName="Smart-watch APPLE Watch S9 41mm" imgRef='https://img.5element.by/import/images/ut/goods/good_350f1d6d-2032-11ef-8db4-005056012b6d/mr8u3lw-a-smart-chasy-apple-watch-series-9-gps-41mm-starlight-aluminum-case-with-starlight-sport-band-silicone-1_600.jpg'/>
<OrderOperation key1="33" key2={key} price1="225" productName="Smart-watch Samsung Galaxy Watch 5 44 mm" imgRef='https://img.5element.by/import/images/ut/goods/good_39525f09-e044-11ed-bb92-005056012465/sm-r910nzbamea-smart-chasy-samsung-galaxy-watch-5-classic-44-mm-r910-sapphire-1_600.jpg'/>
<OrderOperation key1="34" key2={key} price1="161" productName="Smart-watch Honor Watch 4 (TMA-B19)" imgRef='https://img.5element.by/import/images/ut/goods/good_322b5e42-ed01-11ee-8db3-005056012b6d/tma-b19-gold-smart-chasy-honor-watch-4-1_600.jpg'/>
<OrderOperation key1="35" key2={key} price1="64" productName="Smart-watch Canyon Maverick SW-83" imgRef='https://img.5element.by/import/images/ut/goods/good_2154e1ae-12c3-11ef-8db4-005056012b6d/cns-sw83ss-siniy-umnye-chasy-canyon-1_600.jpg'/>
<OrderOperation key1="36" key2={key} price1="60" productName="Smart-watch Haylou RS4 Plus LS11" imgRef='https://img.5element.by/import/images/ut/goods/good_d4805c4f-f78f-11ec-bb95-0050560120e8/rs4-plus-black-magnetic-strap-ls11-umnye-chasy-haylou-1_600.jpg'/>
<OrderOperation key1="37" key2={key} price1="68" productName="Smart-watch Amazfit Pop 3R (A2319)" imgRef='https://img.5element.by/import/images/ut/goods/good_fd106abb-4cc1-11ee-bb95-005056012463/a2319-chernyy-umnye-chasy-amazfit-pop-3r-1_600.jpg'/>
<OrderOperation key1="38" key2={key} price1="468" productName="Smart-watch APPLE Watch Series 8 41mm" imgRef='https://img.5element.by/import/images/ut/goods/good_708e3489-84e8-11ed-bb97-0050560120e8/skit-aw841-nu83-komplekt-apple-watch-series-8-41mm-midnight-mnu83-a2770--plus-podpiska-ivi-3-mes-1_200.jpg'/>
<OrderOperation key1="39" key2={key} price1="900" productName="Fridge LG GC B4598SMUM" imgRef='https://img.5element.by/import/images/ut/goods/good_c24069e6-719c-11ee-8db3-005056012b6d/gc-b459smum-holodilnik-morozilnik-lg-1_600.jpg'/>
<OrderOperation key1="40" key2={key} price1="1049" productName="Fridge Haier C4F740CDBGU1" imgRef='https://img.5element.by/import/images/ut/goods/good_f288727c-bf0a-11ed-bb90-005056012464/c4f740cdbgu1-holodilnik-haier-1_600.jpg'/>
<OrderOperation key1="41" key2={key} price1="645" productName="Fridge Samsung RB33A3240WW/WT" imgRef='https://img.5element.by/import/images/ut/goods/good_6879e454-a2a5-11eb-bb92-0050560120e8/rb33a3240ww-wt-holodilnik-samsung-1_600.jpg'/>
<OrderOperation key1="42" key2={key} price1="294" productName="Fridge ATLANT MXM-2835-90" imgRef='https://img.5element.by/import/images/ut/goods/good_e3b9cbe4-047c-4e02-8d07-59d3567066d8/mxm-2835-90-holodilnik-atlant-1_600.jpg'/>
<OrderOperation key1="43" key2={key} price1="2670" productName="Fridge Hitachi R-W660PUC7 GBE" imgRef='https://img.5element.by/import/images/ut/goods/good_6b792b69-1db7-11ef-8db4-005056012b6d/r-w660puc7-gbe-holodilnik-hitachi-1_600.jpg'/>
<OrderOperation key1="44" key2={key} price1="10" productName="Electric kettle SCARLETT SC-EK21S25" imgRef='https://img.5element.by/import/images/ut/goods/good_4c7d0a09-857f-11e6-80df-005056842056/sc-ek21s25-elektrochaynik-scarlett-1_600.jpg'/>
<OrderOperation key1="45" key2={key} price1="35" productName=" Electric kettle Xiaomi 2 MJDSH04YM" imgRef='https://img.5element.by/import/images/ut/goods/good_d0485e2b-670a-11ed-bb95-0050560120e8/bhr5927eu-elektrochaynik-mjdsh04ym-xiaomi-1_600.jpg'/>
<OrderOperation key1="46" key2={key} price1="29" productName="Electric kettle MAUNFELD MGK-616D" imgRef='https://img.5element.by/import/images/ut/goods/good_11b02f13-ac68-11ed-bb90-005056012464/mgk-616dbk-chaynik-maunfeld-1_600.jpg'/>
<OrderOperation key1="47" key2={key} price1="106" productName="Electric kettle Braun WK1500BK" imgRef='https://img.5element.by/import/images/ut/goods/good_f79d09d8-3f0b-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="48" key2={key} price1="312" productName="Washing machine ATLANT СМА-60Y1010" imgRef='https://img.5element.by/import/images/ut/goods/good_fc8a84b6-7030-11e4-811b-00505684b891/sma-60u1010-00-stiralnaya-mashina-atlant-1_600.jpg'/>
<OrderOperation key1="49" key2={key} price1="503" productName="Washing machine LG F2J3HS4L" imgRef='https://img.5element.by/import/images/ut/goods/good_1e7eacf1-bdd3-11e9-80c7-005056840c70/f2j3hs4l-stiralnaya-mashina-lg-1_600.jpg'/>
<OrderOperation key1="50" key2={key} price1="449" productName="Washing machine Samsung WW60AG4S0" imgRef='https://img.5element.by/import/images/ut/goods/good_2e15ab02-806f-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="51" key2={key} price1="646" productName="Washing machine Bosch Serie 4 WAN2410KPL" imgRef='https://img.5element.by/import/images/ut/goods/good_343e78e9-3c24-11ee-bb93-005056012465/wan2410kpl-stiralnaya-mashina-bosch-1_600.jpg'/>
<OrderOperation key1="52" key2={key} price1="420" productName="Washing machine Haier HW60-BP12919B" imgRef='https://img.5element.by/import/images/ut/goods/good_cad36be7-2aa6-11ed-bb95-0050560120e8/hw60-bp12919b-stiralnaya-mashina-haier-1_600.jpg'/>
<OrderOperation key1="53" key2={key} price1="169" productName="Headphones Apple Airpods 2  (MV7N2/A)" imgRef='https://img.5element.by/import/images/ut/goods/good_e3433405-86b1-11ed-bb97-0050560120e8/-1_600.jpg'/>
<OrderOperation key1="54" key2={key} price1="79" productName="Headphones JBL Tune 720BT Black" imgRef='https://img.5element.by/import/images/ut/goods/good_c6c37768-d0c3-11ee-8db3-005056012b6d/tune-720bt-blk-naushniki-besprovodnye-jbl-1_600.jpg'/>
<OrderOperation key1="55" key2={key} price1="322" productName="Headphones Sony WH 1000XM4" imgRef='https://img.5element.by/import/images/ut/goods/good_4927a4f4-ec26-11ea-80c1-005056844aec/wh-1000xm4-chernyy-besprovodnye-naushniki-sony-1_600.jpg'/>
<OrderOperation key1="56" key2={key} price1="82" productName="Headphones HUAWEI FreeBuds 6i T0019" imgRef='https://img.5element.by/import/images/ut/goods/good_b958a32d-32ba-11ef-8db4-005056012b6d/t0019-chernyy-besprovodnye-naushniki-huawei-freebuds-6i-1_600.jpg'/>
<OrderOperation key1="57" key2={key} price1="210" productName="Headphones MARSHALL MAJOR V" imgRef='https://img.5element.by/import/images/ut/goods/good_20dfd866-4356-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="58" key2={key} price1="39" productName="Headphones Panasonic RB-HX220BEES" imgRef='https://img.5element.by/import/images/ut/goods/good_7d8b57eb-0e23-11eb-80c1-005056844aec/rb-hx220beek-naushniki-panasonic-1_600.jpg'/>
<OrderOperation key1="59" key2={key} price1="102" productName="Headphones Samsung Galaxy Buds FE SM-R400" imgRef='https://img.5element.by/import/images/ut/goods/good_1634bbc7-62a5-11ee-8db3-005056012b6d/sm-r400nzaacis-naushniki-samsung-galaxy-fe-r400n-gray-1_600.jpg'/>
<OrderOperation key1="60" key2={key} price1="24" productName="Headphones Niceboy HIVE PINS" imgRef='https://img.5element.by/import/images/ut/goods/good_710787c0-2a9f-11ec-bb96-00505683f369/hive-pins-naushniki-besprovodnye-niceboy-1_600.jpg'/>
<OrderOperation key1="61" key2={key} price1="43" productName="Headphones Xiaomi Redmi Buds 4 Black" imgRef='https://img.5element.by/import/images/ut/goods/good_52481e0b-31d7-11ee-bb93-005056012465/-1_600.jpg'/>
<OrderOperation key1="62" key2={key} price1="162" productName="Headphones SOUNDCORE Q45 A3040" imgRef='https://img.5element.by/import/images/ut/goods/good_8b8dad2c-ca4b-11ed-bb92-005056012465/sdc-a3040g11-bk-chernyy-naushniki-besprovodnye-soundcore-q45-2_600.jpg'/>
<OrderOperation key1="63" key2={key} price1="96" productName="Microwave BEKO MGC20130BFB" imgRef='https://img.5element.by/import/images/ut/goods/good_00dcc9bb-fbe9-11ee-8db4-005056012b6d/mgc20130bfb-mikrovolnovaya-pech-beko-1_600.jpg'/>
<OrderOperation key1="64" key2={key} price1="70" productName="Microwave Hyundai HYM-M2038" imgRef='https://img.5element.by/import/images/ut/goods/good_796d4be8-505b-11ed-bb95-0050560120e8/hym-m2038-belyy-mikrovolnovaya-pech-hyundai-1_600.jpg'/>
<OrderOperation key1="65" key2={key} price1="169" productName="Microwave Samsung MG23F302TQS/BW" imgRef='https://img.5element.by/import/images/ut/goods/good_ae7f9fcb-352a-11e5-813c-00505684b891/good_img_47a6f382-779f-11e7-80eb-005056842056_600.jpg'/>
<OrderOperation key1="66" key2={key} price1="142" productName="Microwave LG MW23R35GIH" imgRef='https://img.5element.by/import/images/ut/goods/good_672253eb-d5ff-11e9-80c7-005056840c70/good_img_a6bd30ce-d84e-11e9-80c7-005056840c70_600.jpg'/>
<OrderOperation key1="67" key2={key} price1="345" productName="Microwave Bosch FEL023MS2" imgRef='https://img.5element.by/import/images/ut/goods/good_918b492f-406c-11ec-bb94-0050560120e8/fel023ms2-mikrovolnovaya-pech-s-grilem-bosch-1_600.jpg'/>
<OrderOperation key1="68" key2={key} price1="48" productName="Hairdryer POLARIS PHD 2289AC" imgRef='https://img.5element.by/import/images/ut/goods/good_ec14b8fd-d6c1-11e8-80c4-005056840c70/phd-2289ac-temno-seryy-fen-polaris-2_600.jpg'/>
<OrderOperation key1="69" key2={key} price1="65" productName="Hairdryer Philips DryCare Pro BHD272/00" imgRef='https://img.5element.by/import/images/ut/goods/good_b308cbb8-ce2f-11e9-80c7-005056840c70/bhd272-00-fen-philips-1_600.jpg'/>
<OrderOperation key1="70" key2={key} price1="31" productName="Hairdryer Vitek VT 1324LP5" imgRef='https://img.5element.by/import/images/ut/goods/good_73e489ce-ef05-11ed-bb90-005056012464/vt-1324-fen-aquamarine-vitek-1_600.jpg'/>
<OrderOperation key1="71" key2={key} price1="89" productName="Hairdryer ROWENTA CV7461F" imgRef='https://img.5element.by/import/images/ut/goods/good_a2279203-6302-11e7-80eb-005056842056/cv7461f0-fen-rowenta-1_600.jpg'/>
<OrderOperation key1="72" key2={key} price1="68" productName="Hairdryer Panasonic EH-NE83-K865" imgRef='https://img.5element.by/import/images/ut/goods/good_f4f6f632-754d-11e9-80c7-005056840c70/eh-ne83-k865-fen-panasonic-2_600.jpg'/>
<OrderOperation key1="73" key2={key} price1="46" productName="Blender Polaris PHB 0848L" imgRef='https://img.5element.by/import/images/ut/goods/good_9ba00a2d-96ed-11ec-bb94-0050560120e8/phb-0848-ruchnoy-blender-polaris-1_600.jpg'/>
<OrderOperation key1="74" key2={key} price1="105" productName="Blender BRAUN MQ55307MBK" imgRef='https://img.5element.by/import/images/ut/goods/good_f903dae7-1831-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="75" key2={key} price1="27" productName="Blender Galaxy Line GL2133" imgRef='https://img.5element.by/import/images/ut/goods/good_01fb5ec2-fb36-11ee-8db4-005056012b6d/gl2133-blender-galaxy-line-1_600.jpg'/>
<OrderOperation key1="76" key2={key} price1="49" productName="Blender BQ HB1234SSH368" imgRef='https://img.5element.by/import/images/ut/goods/good_aeb797cc-b035-11ec-bb95-0050560120e8/bq-hb1234ss-black-steel-ruchnoy-blender-bq-1_600.jpg'/>
<OrderOperation key1="77" key2={key} price1="54" productName="Blender Gorenje HBX603RL" imgRef='https://img.5element.by/import/images/ut/goods/good_ab6e73e5-a533-11ec-bb95-0050560120e8/hbx603rl-pogruzhnoy-blender-gorenje-2_600.jpg'/>
<OrderOperation key1="78" key2={key} price1="30" productName="Iron Polaris PIR 2481KL23" imgRef='https://img.5element.by/import/images/ut/goods/good_eef69780-63a7-11ea-80c7-005056840c70/good_img_61d2b99a-644c-11ea-80c7-005056840c70_600.jpg'/>
<OrderOperation key1="79" key2={key} price1="92" productName="Iron Braun TexStyle 7 SI 7042GR" imgRef='https://img.5element.by/import/images/ut/goods/good_ab558af7-2fb9-11eb-bb92-0050560120e8/si5078gy-utyug-braun-1_600.jpg'/>
<OrderOperation key1="80" key2={key} price1="176" productName="Smart speaker Yandex Station Midi Black" imgRef='https://img.5element.by/import/images/ut/goods/good_69673106-7949-11ee-8db3-005056012b6d/yndx-00054blk-chernyy-umnaya-kolonka-yandeks-stanciya-midi-s-alisoy-s-zigbee-1_600.jpg'/>
<OrderOperation key1="81" key2={key} price1="702" productName="3D Printer Creality CRK10L" imgRef='https://img.5element.by/import/images/ut/goods/good_9a765ba7-62a5-11ee-8db3-005056012b6d/cr-k1-3d-printer-creality-1_600.jpg'/>
<OrderOperation key1="82" key2={key} price1="186" productName="Lawn mower ECO LG-43589" imgRef='https://img.5element.by/import/images/ut/goods/good_2c6d4a88-ae62-11eb-bb92-0050560120e8/lg-435-gazonokosilka-benzinovaya-eco-1_600.jpg'/>
<OrderOperation key1="83" key2={key} price1="805" productName="Electric scooter Ninebot Kickscooter F2 Plus" imgRef='https://img.5element.by/import/images/ut/goods/good_c922a17f-f036-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="84" key2={key} price1="93" productName="Electric shaver Braun Series 5 50-M1000s Mint" imgRef='https://img.5element.by/import/images/ut/goods/good_f0fd8648-55a9-11eb-bb92-0050560120e8/50-m1000s-elektricheskaya-britva-braun-1_600.jpg'/>
<OrderOperation key1="85" key2={key} price1="929" productName="Air conditioner LG Eco Smart 2021 PC09SQR" imgRef='https://img.5element.by/import/images/ut/goods/good_2ca8f269-a4a5-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="86" key2={key} price1="137" productName="Navigator NAVITEL E777 Truck" imgRef='https://img.5element.by/import/images/ut/goods/good_62c91dcb-a3cd-11ed-bb92-005056012465/-1_600.jpg'/>
<OrderOperation key1="87" key2={key} price1="28" productName="Ventilator HOLT HT-FN-002L" imgRef='https://img.5element.by/import/images/ut/goods/good_73d6da85-f134-11ec-bb95-0050560120e8/ht-fn-002-ventilyator-holt-1_600.jpg'/>
<OrderOperation key1="88" key2={key} price1="138" productName="Сonvector Electrolux ECH/B-2000 E" imgRef='https://img.5element.by/import/images/ut/goods/good_9866c035-531f-11ee-bb92-005056012464/-1_600.jpg'/>
<OrderOperation key1="89" key2={key} price1="562" productName="Game console Sony PlayStation 5 (PS5) Slim" imgRef='https://360shop.by/upload/cssinliner_webp/resize_cache/iblock/e11/500_500_140cd750bba9870f18aada2478b24840a/lxg3pu8uswheoy0ptbb1xz9nsgg8l0u8.webp'/>
<OrderOperation key1="90" key2={key} price1="94" productName="Gamepad Sony PS5 DualSense CFI-ZCT1J" imgRef='https://shop.mts.by/upload/resize_cache/webp/iblock/7c9/xyjsvwi7zmq7bs585qwfw3ecfo6mn8v3/270_500_1/DualSense_1.webp'/>
<OrderOperation key1="91" key2={key} price1="709" productName="Game console  Xbox Series X 1TB 1882" imgRef='https://cdn21vek.by/img/galleries/7600/835/preview_b/xboxseriesx1tb1882_microsoft_62c54c3f3def6.jpeg'/>
<OrderOperation key1="92" key2={key} price1="84" productName="Gamepad Microsoft Xbox Series X" imgRef='https://cdn21vek.by/img/galleries/8787/287/preview_b/xboxseriescarbonqat00005_microsoft_65c463f067401.jpeg'/>
<OrderOperation key1="93" key2={key} price1="15" productName="Night Light Yeelight Motion Sensor YLYD01YL" imgRef='https://img.5element.by/import/images/ut/goods/good_48ca0112-bf9a-11ea-80c8-005056840c70/good_img_838fb797-cb26-11ea-80c8-005056840c70_600.jpg'/>
<OrderOperation key1="94" key2={key} price1="420" productName="Coffee machine KRUPS ESSENTIAL EA810870" imgRef='https://img.5element.by/import/images/ut/goods/good_ababaf2c-9dba-11e5-813c-00505684b891/ea810870-kofemashina-krups-1_600.jpg'/>
<OrderOperation key1="95" key2={key} price1="97" productName="Web camera Razer Kiyo X RZ19-04170100-R3M1" imgRef='https://img.5element.by/import/images/ut/goods/good_8fafb4cf-8a5c-11ec-bb94-0050560120e8/rz19-04170100-r3m1-veb-kamera-razer-kiyo-x-1_600.jpg'/>
<OrderOperation key1="96" key2={key} price1="263" productName="Electric stove GEFEST EP N D 6140-02" imgRef='https://img.5element.by/import/images/ut/goods/good_2d19f60b-afa1-11e1-b8a5-005056af0003/ep-n-d-6140-02-elektroplity-bytovye-gefest-1_600.jpg'/>
<OrderOperation key1="97" key2={key} price1="12" productName="Microphone MIRU MIC002" imgRef='https://img.5element.by/import/images/ut/goods/good_ee3770b3-2f0e-11ef-8db4-005056012b6d/-1_600.jpg'/>
</div>
</div>
            )
          }

       
              
  return (
  < >
                <meta charSet="utf-8" />
                <title>SIGMA electricity shop</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />   
  <link rel="canonical" href="https://play-lh.googleusercontent.com/ZRwzMtXLgV5DaK_ExooQTxfXgg3UeK_e9xWmOjSUq6kyedjHk2NMk1zNRRdwqgCI8Kk=w240-h480-rw" />
<Header isThemeChanged={!isThemeChanged}/>
<button className={`${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} z-50 w-[4%] h-[30px] fixed top-[13px] outline-none rounded-xl ${isWide ? 'min-w-14' : 'min-w-[58px]'} ${isWide ? 'left-[52%]' : 'left-[61%]'}`} suppressHydrationWarning={true} onClick={themeChange}></button>
<button className={` ${isThemeChanged ? 'bg-zinc-200' : 'bg-black'} z-50 w-[1.4%] h-[25px] fixed top-[15px]  rounded-[50px] ${themeChanger} min-w-6`} suppressHydrationWarning={true} onClick={themeChange}></button>

<div className={`${isThemeChanged ? 'bg-gray-900' : 'bg-gray-300'} w-12/12 h-full min-h-[910px] bg-no-repeat bg-cover scroll-smooth flex flex-col `}>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-7xl' : 'text-5xl'} font-bold font-serif italic relative ${width > 1580 ? 'left-72': 'left-2'} top-[60px] ${isLoggedIn2 ? 'hidden' : 'block'}  `}>You don't logged in your account.</p>
<Link href="/sing-up"><div className={`${width > 1400 ? 'block' : 'hidden'} ${width > 750 ? 'text-5xl' : 'text-3xl'} ${width > 750 ? 'relative left-[32%] top-[77px]' : 'relative right-[100%] top-[78px]'} text-blue-600 hover:border-[2px] border-b-blue-600 ${isLoggedIn2 ? 'hidden' : 'block'} hover:border-l-0 hover:border-t-0 hover:border-r-0  hover:rounded-md ${width > 750  ? 'w-[165px]' : 'w-[96px]'} `}>Sing up</div> </Link>
<p className={`${width > 1400 ? 'block' : 'hidden'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'relative top-[28px] left-[44%]' : 'relative right-[3.1%] top-[43px]'} ${width > 750 ? 'text-5xl' : 'text-3xl'} font-bold font-sans italic relative top-[30px] right-[62px] ${isLoggedIn2 ? 'hidden' : 'block'}  `}>or</p>
  <Link href="/login"><div className={`${width > 1400 ? 'block' : 'hidden'}  ${width > 750 ? 'relative left-[50%] bottom-[20px]' : 'relative left-[76%] top-[8px]'} ${width > 750 ? 'text-5xl' : 'text-3xl'} text-blue-600 hover:border-[2px] border-b-blue-600 ${isLoggedIn2 ? 'hidden' : 'block'} hover:border-l-0 hover:border-t-0 hover:border-r-0  ${width > 750  ? 'w-[122px]' : 'w-[76px]'}  hover:rounded-md `}>Login </div> </Link> 
  <p className={`${width > 1400 ? 'block' : 'hidden'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'relative bottom-[70px] left-[60%]' : 'relative left-[1000%]'} ${width > 750 ? 'text-5xl' : 'text-3xl'} font-bold font-sans italic  ${isLoggedIn2 ? 'hidden' : 'block'}  `}>at first</p>
  <Link href="/sing-up"><div className={`${width > 1400 ? 'hidden' : 'block'} ${width > 900 ? 'text-5xl' : 'text-3xl'} ${width > 900 ? 'relative left-[20%] top-[77px]' : 'relative left-[13%] top-[74px]'} text-blue-600 hover:border-[2px] border-b-blue-600 ${isLoggedIn2 ? 'hidden' : 'block'} hover:border-l-0 hover:border-t-0 hover:border-r-0  hover:rounded-md ${width > 900  ? 'w-[165px]' : 'w-[106px]'} `}>Sing up</div> </Link>
<p className={`${width > 1400 ? 'hidden' : 'block'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 900 ? 'relative top-[30px] left-[40%]' : 'relative top-[38px] left-[40%]'} ${width > 900 ? 'text-5xl' : 'text-3xl'} font-bold font-sans italic relative top-[30px] right-[62px] ${isLoggedIn2 ? 'hidden' : 'block'}  `}>or</p>
  <Link href="/login"><div className={`${width > 1400 ? 'hidden' : 'block'}  ${width > 900 ? 'relative left-[50%] bottom-[20px]' : 'relative left-[50%] top-[2px]'} ${width > 900 ? 'text-5xl' : 'text-3xl'} text-blue-600 hover:border-[2px] border-b-blue-600 ${isLoggedIn2 ? 'hidden' : 'block'} hover:border-l-0 hover:border-t-0 hover:border-r-0  ${width > 900  ? 'w-[122px]' : 'w-[76px]'}  hover:rounded-md `}>Login </div> </Link> 
  <p className={`${width > 1400 ? 'hidden' : 'block'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 900 ? 'relative bottom-[70px] left-[65%]' : 'relative bottom-[35px] left-[72%]'} ${width > 900 ? 'text-5xl' : 'text-3xl'} font-bold font-sans italic  ${isLoggedIn2 ? 'hidden' : 'block'}  `}>at first</p>
<div className={`w-[60%]  h-[310px] relative ${width > 1120 ? 'left-[20%]' : 'left-[5%]'}  left-[20%] top-[50px] `}>
<img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className={`${width > 750 ? 'w-[300px]' : 'w-[150px]'} h-[300px]  rounded-lg ${isLoggedIn2 ? 'block' : 'hidden'}`}></img>
<div className={`${width > 750 ? 'text-5xl' : 'text-3xl'} relative bottom-[325px] ${width > 750 ? 'left-[326px]' : 'left-[176px]'}  font-sans font-medium  ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'} ${isLoggedIn2 ? 'block' : 'hidden'} my-16 break-all w-[75%]`}>Email:{EmailText}</div>
<div className={`${width > 750 ? 'text-5xl' : 'text-3xl'} relative bottom-[285px] ${width > 750 ? 'left-[326px]' : 'left-[176px]'}  font-sans font-medium  ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'}  ${isLoggedIn2 ? 'block' : 'hidden'}  break-all  w-[75%]`} >Password:{PasswordText}

</div>
</div>
<div className={`relative ${width > 1620 ? 'top-[100px]' : 'top-[80px]'} ${width > 1620 ? 'left-[18.3%]' : 'left-[15%]'}  ${isLoggedIn2 ? 'block' : 'hidden'}   w-[80%]`}>
<p className={`${width > 1620 ? 'text-4xl' : 'text-3xl'}  font-sans font-medium  ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'} ${isLoggedIn2 ? 'block' : 'hidden'} `} >{`Total money spend:${totalMoneySpend}$`}</p>
<p className={`${width > 1620 ? 'text-4xl' : 'text-3xl'} relative ${width > 1620 ? 'bottom-[39px]' : 'top-[20px]'} ${width > 1620 ? 'left-[52%]' : 'left-[1%]'} ${isLoggedIn2 ? 'block' : 'hidden'} font-sans font-medium  ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'}  `} >{`Total products purchased:${Quantity}`}</p>
</div>
<div className={`h-[4px] ${width > 750 ? 'w-[72%]' : 'w-[85%]'} relative ${width > 750 ? 'left-[18%]' : 'left-[12%]'} ${isLoggedIn2 ? 'block' : 'hidden'} top-[183px] ${isThemeChanged ? 'bg-slate-200' : 'bg-slate-800'}`}></div>
<p className={`text-4xl relative top-[125px] ${isLoggedIn2 ? 'block' : 'hidden'}  font-sans font-medium ${width > 750 ? 'left-[19.3%]' : 'left-[15.3%]'} ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'}  `} type="password">History of orders </p>
<p className={`text-3xl relative top-[160px]   ${isLoggedIn2 ? 'block' : 'hidden'} font-sans font-medium ${width > 750 ? 'left-[22%]' : 'left-[18%]'} ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'}  `} type="password">{`Orders:${OrderNumber} `} </p>
<p className={`${width > 750 ? 'text-7xl' : 'text-5xl'}  ${isLoggedIn2 ? 'block' : 'hidden'} relative top-[210px] ${width > 1000 ? 'left-[40%]' : 'left-[25%]'} font-sans font-medium  ${isThemeChanged ? 'text-slate-200' : 'text-slate-800'}  ${OrderNumber > 0 ? 'hidden' : 'block'}`} >No orders</p>
<AOrdersDecription key1="1"/> <AOrdersDecription key1="2" /> <AOrdersDecription key1="3" /> <AOrdersDecription key1="4" /> <AOrdersDecription key1="5" />  <AOrdersDecription key1="6"/> <AOrdersDecription key1="7" /> <AOrdersDecription key1="8" /> <AOrdersDecription key1="9" /> <AOrdersDecription key1="10" /> <AOrdersDecription key1="11" /> <AOrdersDecription key1="12" /><AOrdersDecription key1="13" /> <AOrdersDecription key1="14" /> <AOrdersDecription key1="15" /><AOrdersDecription key1="16" /> <AOrdersDecription key1="17" /> <AOrdersDecription key1="18" /> <AOrdersDecription key1="19" /> <AOrdersDecription key1="20" />

<button className={` z-0 cursor-pointer  ${isLoggedIn ? 'block' : 'hidden'} ${isLoggedIn2 ? 'block' : 'hidden'} absolute ${width > 600 ? 'left-[75%]' : 'left-[58%]'} my-2 text-emerald-500 ${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} text-xl h-[45px] w-[150px] ${(width > 750) || (width <= 475) ? 'top-[78px]' : 'top-[78px]'}  ${width > 390 ? 'block' : 'hidden'}  font-bold italic font-sans rounded-xl  border-[4px] border-emerald-500 `} onClick={() => Logouting()} >Logout</button> 

<button className={` z-0 cursor-pointer  ${isLoggedIn ? 'block' : 'hidden'} ${isLoggedIn2 ? 'block' : 'hidden'} relative ${width > 600 ? 'left-[75%]' : 'left-[58%]'} my-2 text-emerald-500 ${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} text-xl h-[45px] w-[150px] bottom-[548px] ${width > 390 ? 'hidden' : 'block'} bottom-[528px] font-bold italic font-sans rounded-xl  border-[4px] border-emerald-500 `} onClick={() => Logouting()} >Logout</button> 
</div>
<div className=" bg-slate-800 w-12/12 h-[130px]  ">
    <div className='relative top-[40px] left-[60px] text-4xl text-slate-100 font-sans font-semibold'>© SIGMA electicity company</div>
    </div>
</>
)
}