import React from 'react'
import { useState, useEffect } from 'react';


import Link from 'next/link';


export default function CartPage(){
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
const UserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null
  const isLoggedIn= UserId ? true : false;
 
  
  let Counter=0;
  let isThemeCh;
 const localTheme=typeof window !== 'undefined' ? localStorage.getItem('theme') : null
  const Copy256A_ArrayOfCounters=Array(98).fill(0);
  
  if(typeof window !== undefined){
    
    for(let i=0; i < 98; i++){
      const CounterValue=typeof window !== 'undefined' ? localStorage.getItem(`${i}`) : null
      if(CounterValue){
   Copy256A_ArrayOfCounters[i]=parseInt(CounterValue)
      }
  }
  if(localTheme){
     Counter=parseInt(localTheme)
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
  
  
  const [productsCounters, setproductsCounters] = useState(JSON.parse(JSON.stringify(Copy256A_ArrayOfCounters)))

  const PriceArray=[209,149,304,899,79,299,329,239,1659,579,1249,379,345,239,2429,4499,859,609,644,1739,1329,774,1029,1451,959,450,108,224,122,102,45,94,516,225,161,64,60,68,468,900,1049,645,294,2670,10,35,29,106,312,503,449,646,420,169,79,322,82,210,39,102,24,43,162,96,70,169,142,345,48,65,31,89,68,46,105,27,49,54,30,92,176,702,186,805,93,929,137,28,138,562,94,709,84,15,420,97,263,12]
  const [isThemeChanged,setisThemeChanged]= useState(isThemeCh ? true : false)

  const [themeChanger,setthemeChanger] = useState(isThemeChanged ? 'left-[54.2%]' : `left-[52.2%]`)
    const [isOrdered, setisOrdered] =useState(false)
    
    const [width, setWidth] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0);
  const isWide=(width > 1050) ? true : false

const CopyproductsPrice=Array(98).fill(0)

for(let i=0; i < 98; i++){
  CopyproductsPrice[i]=PriceArray[i]*productsCounters[i];
}
const [productTotalPrice, setproductTotalPrice]=useState(JSON.parse(JSON.stringify(CopyproductsPrice)))
let sumCounter=0;
CopyproductsPrice.forEach((num) => sumCounter+=num)
const [totalCounter, settotalCounter]=useState(sumCounter)
  let OrderNumber;
  const localNumber=typeof window !== 'undefined' ? localStorage.getItem('OrderNumber') : null
if(typeof window !== undefined){
  if(localNumber){
     OrderNumber=parseInt(localNumber) + 1;
  }else if((OrderNumber === undefined || OrderNumber === null)){
     OrderNumber=1;
  }

}

const ProductsNames=['Smartphone Samsung Galaxy A15 8GB/256GB',
  'Smartphone Xiaomi Redmi 13C 8GB/256GB ',
  'Smartphone Honor 200 Lite',
   'Smartphone APPLE iPhone 14 128GB', 
   'Smartphone HONOR X5 plus 2GB/32GB', 
   'Smartphone Vivo V25 8GB/256GB',
   'Smartphone POCO X6 5G 8GB/256GB' ,
   'Smartphone Huawei nova 12  8GB/256GB',
   'Smartphone Samsung Galaxy S24 Ultra 512GB',
   'Smartphone APPLE iPhone 11 Pro Max 64GB',
   'TV Samsung QE55Q70CAUXRU',
   'TV Vityaz 5028ALULF1204',
   'TV Horizont 50LE7513DFG',
   'TV KIVI MR3286FD706BHT' ,
   'TV Sony Bravia A80L XR-55A80L', 
   'TV LG B60L OLED77C4RLAL',
   'TV Harper 65QR850TS/RU',
   'TV IFFALCON iFFR55Q73TG',
   'Laptop ASUS Vivobook Go 15 E1504FA-BQ831W',
   'Laptop Apple MacBook Air 15 M2 2023 8/256',
   'Laptop Lenovo LOQ 15APH8 82XTE1ES',
   'Laptop Acer Aspire 3 A315-58G-5683',
  'Laptop Huawei MateBook D 16 MCLG-X',
   'Laptop MSI Prestige 13 AI Evo MS-13Q2',
   'Laptop Tecno Megabook S1 i5/16/512/Grey/W',
   'Wireless Dreame Vacuum Cleaner H12S',
   'Vacuum Cleaner KARCHER WD 3 V-17/20',
   'Xiaomi Robot Vacuum S10 BHR5988EU',
   'Robot for cleaning windows Dadget W120',
  'Wiper KARCHER WV 2 Premium (1.633-425.0)',
   'Smart-watch Xiaomi Redmi Watch 3 Black',
   'Smart-watch Huawei Watch FIT 3  Green',
   'Smart-watch APPLE Watch S9 41mm',
   'Smart-watch Samsung Galaxy Watch 5 44 mm',
   'Smart-watch Honor Watch 4 (TMA-B19)',
   'Smart-watch Canyon Maverick SW-83',
   'Smart-watch Haylou RS4 Plus LS11',
   'Smart-watch Amazfit Pop 3R (A2319)',
   'Smart-watch APPLE Watch Series 8 41mm',
   'Fridge LG GC B4598SMUM',
   'Fridge Haier C4F740CDBGU1',
   'Fridge Samsung RB33A3240WW/WT',
  'Fridge ATLANT MXM-2835-90',
   'Fridge Hitachi R-W660PUC7 GBE',
   'Electric kettle SCARLETT SC-EK21S25',
   'Electric kettle Xiaomi 2 MJDSH04YM',
   'Electric kettle MAUNFELD MGK-616D',
   'Electric kettle Braun WK1500BK',
   'Washing machine ATLANT СМА-60Y1010',
  'Washing machine LG F2J3HS4L',
   'Washing machine Samsung WW60AG4S0',
   'Washing machine Bosch Serie 4 WAN2410KPL',
   'Washing machine Haier HW60-BP12919B',
   'Headphones Apple Airpods 2  (MV7N2/A)',
   'Headphones JBL Tune 720BT Black',
   'Headphones Sony WH 1000XM4',
   'Headphones HUAWEI FreeBuds 6i T0019',
   'Headphones MARSHALL MAJOR V',
   'Headphones Panasonic RB-HX220BEES',
   'Headphones Samsung Galaxy Buds FE SM-R400',
   'Headphones Niceboy HIVE PINS',
   'Headphones Xiaomi Redmi Buds 4 Black',
   'Headphones SOUNDCORE Q45 A3040',
   'Microwave BEKO MGC20130BFB',
   'Microwave Hyundai HYM-M2038',
   'Microwave Samsung MG23F302TQS/BW',
   'Microwave LG MW23R35GIH',
   'Microwave Bosch FEL023MS2',
   'Hairdryer POLARIS PHD 2289AC',
   'Hairdryer Philips DryCare Pro BHD272/00',
   'Hairdryer Vitek VT 1324LP5',
   'Hairdryer ROWENTA CV7461F',
   'Hairdryer Panasonic EH-NE83-K865',
   'Blender Polaris PHB 0848L',
   'Blender BRAUN MQ55307MBK',
   'Blender Galaxy Line GL2133',
   'Blender BQ HB1234SSH368',
   'Blender Gorenje HBX603RL',
   'Iron Polaris PIR 2481KL23',
   'Iron Braun TexStyle 7 SI 7042GR',
   'Smart speaker Yandex Station Midi Black',
   '3D Printer Creality CRK10L',
   'Lawn mower ECO LG-43589',
   'Electric scooter Ninebot Kickscooter F2 Plus',
   'Electric shaver Braun Series 5 50-M1000s Mint',
   'Air conditioner LG Eco Smart 2021 PC09SQR',
   'Navigator NAVITEL E777 Truck',
   'Ventilator HOLT HT-FN-002L',
   'Сonvector Electrolux ECH/B-2000 E',
   'Game console Sony PlayStation 5 (PS5) Slim',
  'Gamepad Sony PS5 DualSense CFI-ZCT1J',
   'Game console  Xbox Series X 1TB 1882',
   'Gamepad Microsoft Xbox Series X',
   'Night Light Yeelight Motion Sensor YLYD01YL',
   'Coffee machine KRUPS ESSENTIAL EA810870',
   'Web camera Razer Kiyo X RZ19-04170100-R3M1',
   'Electric stove GEFEST EP N D 6140-02',
   'Microphone MIRU MIC002']

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

   
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



const changeProductsCounter = (key,number) => {
  const CopyArrayOfCounters=productsCounters.slice()
  const CopytotalCounter=totalCounter + number*PriceArray[key];
 
   if(productsCounters[key] > 1){
    if(typeof window !== undefined){
      localStorage.setItem(`${key}`,productsCounters[key] + number)
    }
    setproductTotalPrice((productsCounters[key] + number)*PriceArray[key])
    CopyArrayOfCounters[key]=productsCounters[key] + number;
   }else if((productsCounters[key] === 1 || productsCounters[key] === 0) && (number > 0)){
    if(typeof window !== undefined){
      localStorage.setItem(`${key}`,productsCounters[key] + number)
    }
    setproductTotalPrice((productsCounters[key] + number)*PriceArray[key])
    CopyArrayOfCounters[key]=productsCounters[key] + number;
   }
   setproductsCounters(CopyArrayOfCounters);
   
settotalCounter(CopytotalCounter)
}
const deleteAllCounter=()=>{
  if(typeof window !== undefined){
  for(let i=0; i < 98; i++) {
    window.localStorage.removeItem(`${i}`)
  }
}
  const EmptyArray=Array(98).fill(0)
  console.log(EmptyArray)
setproductsCounters(EmptyArray)
settotalCounter(0);
}

const deleteCounter=(key)=>{

  if(typeof window !== undefined){
    
      window.localStorage.removeItem(`${key}`)
  }
  const CopyArrayOfCounters=productsCounters.slice()
  const CopytotalCounter=totalCounter;
  CopyArrayOfCounters[key]=productsCounters[key] - productsCounters[key];
  settotalCounter(Math.floor(CopytotalCounter-(PriceArray[key]*productsCounters[key]) ))

  setproductsCounters(CopyArrayOfCounters);
  
}
let CounterQuantity=0;
let totalMoneySpend=totalCounter;
 const Ordering = () => {
 setisOrdered(!isOrdered); 
 

 if (typeof window !== 'undefined') {
  localStorage.setItem(`OrderNumber`, OrderNumber)
  for(let i=0; i < 98; i++){
    if(localStorage.getItem(`${i}`) > 0){
      localStorage.setItem(`${i}_${OrderNumber}`,  localStorage.getItem(`${i}`));
      CounterQuantity++;
    }
  }
  if(localStorage.getItem(`Quantity`) > 0){
    CounterQuantity=CounterQuantity+parseInt(localStorage.getItem(`Quantity`));
    localStorage.setItem(`Quantity`,  CounterQuantity)
  }else{
    localStorage.setItem(`Quantity`,  CounterQuantity)
  }
  if(localStorage.getItem(`TotalMoneySpend`) > 0){
    totalMoneySpend=totalMoneySpend+parseInt(localStorage.getItem(`TotalMoneySpend`));
    localStorage.setItem(`TotalMoneySpend`,  totalMoneySpend)
  }else{
    localStorage.setItem(`TotalMoneySpend`,  totalMoneySpend)
  }
  for(let i=0; i < 98;i++){
    localStorage.setItem(`productCounters${OrderNumber}_${i}`, productsCounters[i])
   }
   
  let date = new Date();
  localStorage.setItem(`totalPrice_${OrderNumber}`, `${totalCounter}`)
  localStorage.setItem(`time_${OrderNumber}`, `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes()< 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`)
  localStorage.setItem(`day_${OrderNumber}`, `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth()+1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear() }`)
  for(let i=0; i < 98; i++){
    localStorage.setItem(`${i}`, 0)
  }

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
           


 function OrderOperation({key1 , price1, productName, imgRef}){
  const key=parseInt(key1)
  const price = parseInt(price1)
 

  return(
  <>
  <div className={`${productsCounters[key] > 0 ? 'block' : ' hidden'} ${isThemeChanged ? 'bg-gray-700' : 'bg-gray-100'} w-[90%] ${isLoggedIn ? 'block' : 'hidden'} h-[100px] ${isOrdered ? 'hidden' : 'block'} ${width > 540 ? 'h-[100px]' : 'h-[140px]'} relative bottom-[10px] my-4 rounded-2xl`}> 
  <img src={imgRef} className={`bg-transparent ${width > 540 ? 'h-[100px]' : 'h-[140px]'} w-[10%]   min-w-[80px]  rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`}></img>
  <div className={`${width > 540 ? 'block' : 'hidden'} relative ${width > 800 ? 'bottom-[78px]' : 'bottom-[70px]'} ${width > 900 ? 'left-[62%]' : 'left-[56%]'}  ${width > 800 ? ' text-4xl' : ' text-2xl'}   font-bold  font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price}$</div>
  <div className={`${width > 540 ? 'block' : 'hidden'} w-[125px] h-[50px] relative ${width > 800 ? 'bottom-[119px]' : 'bottom-[105px]'} ${width > 900 ? 'left-[76%]' : 'left-[70%]'}`}>
  <div  className={`  ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   font-sans font-bold ${width > 800 ? ' w-[125px]' : ' w-[85px]'}  ${width > 800 ? ' h-[50px]' : 'h-[38px]'} border-[2px] border-gray-600 rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  ${width > 800 ? ' text-4xl' : ' text-2xl'} text-center pl-px ` }>{productsCounters[key]}</div>
              <button  className={`relative ${width > 800 ? 'bottom-[49px]' : 'bottom-[37px]'} ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   ${width > 800 ? ' text-4xl' : ' text-2xl'} font-serif font-extrabold ${width > 800 ? ' w-[40px]' : ' w-[25px]'} border-[2px] border-gray-600 ${width > 800 ? ' h-[48px]' : 'h-[36px]'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl  ` } onClick={() => changeProductsCounter(key,-1)}>-</button>
              <button className={` relative ${width > 800 ? 'bottom-[49px]' : 'bottom-[37px]'} ${width > 800 ? 'left-11' : 'left-[34px]'}  ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}  ${width > 800 ? ' text-4xl' : ' text-2xl'} font-serif font-extrabold ${width > 800 ? ' w-[40px]' : ' w-[25px]'} border-[2px] border-gray-600 ${width > 800 ? ' h-[48px]' : 'h-[36px]'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl text-gray-900 ` } onClick={() => changeProductsCounter(key,1)}>+</button>
              </div>
              <div  className={`${width > 540 ? 'block' : 'hidden'} z-10 cursor-pointer ${width > 800 ? 'w-16' : 'w-10'}  bg-red-500 ${width > 800 ? 'h-[10px]' : 'h-[6px]'} rotate-[315deg] relative ${width > 800 ? 'bottom-[149px]' : 'bottom-[139px]'} ${width > 900 ? 'left-[93%]' : 'left-[88%]'}  rounded-xl  ` } onClick={() => deleteCounter(key)} ></div>
              <div   className={`${width > 540 ? 'block' : 'hidden'} z-10 cursor-pointer ${width > 800 ? 'w-16' : 'w-10'}  bg-red-500 ${width > 800 ? 'h-[10px]' : 'h-[6px]'}  rotate-[45deg] relative ${width > 800 ? 'bottom-[159px]' : 'bottom-[145px]'} ${width > 900 ? 'left-[93%]' : 'left-[88%]'} rounded-xl  `} onClick={() => deleteCounter(key)} ></div>
  <div className={` ${width > 540 ? 'block' : 'hidden'} relative  ${width > 1000  ? 'text-2xl' : 'text-lg'}  ${width > 850 ? 'w-[35%]' : 'w-[150px]'} ${width > 1000 ? 'left-[13%]' : 'left-[88px]'}  ${width > 850 ? 'bottom-[180px]' : 'bottom-[192px]'}`}>
  <div className={`  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`}>{productName}</div>
  </div>

  <div className={` ${width <= 540 ? 'block' : 'hidden'} relative left-[88px] bottom-[130px] w-[150px] `}>
  <div className={`  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`}>{productName}</div>
  </div>
  <div className={` ${width <= 540 ? 'block' : 'hidden'} relative  bottom-[120px]  left-[26%]   text-2xl   font-bold  font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price}$</div>
            
  <div className={` ${width <= 540 ? 'block' : 'hidden'} w-[125px] h-[50px] relative  bottom-[151px] left-[46%] `}>
  <div  className={`  ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   font-sans font-bold ${width > 800 ? ' w-[125px]' : ' w-[85px]'}  ${width > 800 ? ' h-[50px]' : 'h-[38px]'} border-[2px] border-gray-600 rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  ${width > 800 ? ' text-4xl' : ' text-2xl'} text-center pl-px ` }>{productsCounters[key]}</div>
              <button  className={`relative ${width > 800 ? 'bottom-[49px]' : 'bottom-[37px]'} ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   ${width > 800 ? ' text-4xl' : ' text-2xl'} font-serif font-extrabold ${width > 800 ? ' w-[40px]' : ' w-[25px]'} border-[2px] border-gray-600 ${width > 800 ? ' h-[48px]' : 'h-[36px]'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl  ` } onClick={() => changeProductsCounter(key,-1)}>-</button>
              <button className={` relative ${width > 800 ? 'bottom-[49px]' : 'bottom-[37px]'} ${width > 800 ? 'left-11' : 'left-[34px]'}  ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}  ${width > 800 ? ' text-4xl' : ' text-2xl'} font-serif font-extrabold ${width > 800 ? ' w-[40px]' : ' w-[25px]'} border-[2px] border-gray-600 ${width > 800 ? ' h-[48px]' : 'h-[36px]'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl text-gray-900 ` } onClick={() => changeProductsCounter(key,1)}>+</button>
              </div>
              <div  className={`${width <= 540 ? 'block' : 'hidden'} z-10 cursor-pointer  w-16   bg-red-500 h-[10px] rotate-[315deg] relative bottom-[235px]  left-[80%]  rounded-xl  ` } onClick={() => deleteCounter(key)} ></div>
              <div   className={`${width <= 540 ? 'block' : 'hidden'} z-10 cursor-pointer w-16  bg-red-500 h-[10px] rotate-[45deg] relative bottom-[245px] left-[80%] rounded-xl  `} onClick={() => deleteCounter(key)} ></div>
</div>

 </>
 )
 }
              
  return (
  < >
                <meta charSet="utf-8" />
                <title>SIGMA electricity shop</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />   
  <link rel="canonical" href="https://play-lh.googleusercontent.com/ZRwzMtXLgV5DaK_ExooQTxfXgg3UeK_e9xWmOjSUq6kyedjHk2NMk1zNRRdwqgCI8Kk=w240-h480-rw" />
<Header isThemeChanged={!isThemeChanged}/>
<button className={`${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} z-50 w-[4%] h-[30px] fixed top-[13px] outline-none rounded-xl ${isWide ? 'min-w-14' : 'min-w-[58px]'} ${isWide ? 'left-[52%]' : 'left-[61%]'}`} suppressHydrationWarning={true}  onClick={themeChange}></button>
<button className={` ${isThemeChanged ? 'bg-zinc-200' : 'bg-black'} z-50 w-[1.4%] h-[25px] fixed top-[15px]  rounded-[50px] ${themeChanger} min-w-6`} suppressHydrationWarning={true}  onClick={themeChange}></button>
<div className={`${isThemeChanged ? 'bg-gray-900' : 'bg-gray-300'} w-12/12 h-full min-h-[710px] bg-no-repeat bg-cover scroll-smooth flex flex-col items-center `}>
<p className={`${width > 1000 ? 'text-5xl' : 'text-4xl'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} font-bold font-sans italic relative ${width > 800 ? 'right-[40%]' : 'right-[31%]'} top-[20px] ${isLoggedIn ? 'block' : 'hidden'} ${totalCounter > 0 ? 'block' : 'hidden'} ${isOrdered ? 'hidden' : 'block'} `}>TOTAL:{totalCounter}$</p>
<button  className={` relative bottom-[20px]   ${totalCounter > 0 ? 'block ' : 'hidden'} ${width > 550 ? 'text-xl' : 'text-lg'} ${width > 630 ? 'left-[15%]' : 'left-[25%]'} font-serif font-extrabold ${width > 550 ? 'w-[155px]' : 'w-[100px]'}  ${isLoggedIn ? 'block' : 'hidden'} ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-100'} h-[50px] border-[3px] border-red-500 rounded-xl text-red-500 ${isOrdered ? 'hidden' : 'block'}`} onClick={() => deleteAllCounter()} >Delete All</button>
<Link href="/"><div className={`absolute  ${width > 730 ? 'right-[7%]' : 'right-[3%]'} ${width > 730 ? 'text-4xl' : 'text-2xl'} text-blue-800 ${width > 1000 ? 'top-[90px]' : 'top-[80px]'} ${width > 630 ? 'block' : 'hidden'} hover:border-[2px] ${isLoggedIn ? 'block' : 'hidden'} border-b-blue-800 hover:border-l-0 hover:border-t-0 hover:border-r-0  ${totalCounter > 0 ? 'block' : 'hidden'}  hover:rounded-md ${width > 730 ? 'w-[100px]' : 'w-[70px]'}`}>Home</div> </Link>
<Link href="/"><div className={`relative left-[19%] top-[282px] text-4xl text-blue-800 hover:border-[2px] border-b-blue-800 hover:border-l-0 hover:border-t-0 hover:border-r-0  ${totalCounter > 0 ? 'hidden' : 'block'} ${isLoggedIn ? 'block' : 'hidden'} ${isOrdered ? 'hidden' : 'block'} hover:rounded-md w-[100px]`}>Home</div> </Link>
<OrderOperation key1="0" price1="209" productName="Smartphone Samsung Galaxy A15 8GB/256GB" imgRef='https://img.5element.by/import/images/ut/goods/good_c21e7d2e-ae25-11ee-8db3-005056012b6d/sm-a155-goluboy-128gb-telefon-gsm-samsung-galaxy-a15-1_600.jpg'/>
<OrderOperation key1="1" price1="149" productName="Smartphone Xiaomi Redmi 13C 8GB/256GB " imgRef='https://img.5element.by/import/images/ut/goods/good_f858c95e-dc5d-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="2" price1="304" productName="Smartphone Honor 200 Lite" imgRef='https://img.5element.by/import/images/ut/goods/good_2460e313-2964-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="3" price1="899" productName="Smartphone APPLE iPhone 14 128GB " imgRef='https://img.5element.by/import/images/ut/goods/good_b1710876-9442-11ee-8db3-005056012b6d/iphone-14-128gb-midnight-telefon-gsm-apple-mvup3ch-a-1_600.jpg'/>
<OrderOperation key1="4" price1="79" productName="Smartphone HONOR X5 plus 2GB/32GB " imgRef='https://img.5element.by/import/images/ut/goods/good_2a03a205-4e30-11ee-bb94-005056012465/x5-plus-wod-lx1-4gb-64gb-cyan-lake-telefon-gsm-honor-1_600.jpg'/>
<OrderOperation key1="5" price1="299" productName="Smartphone Vivo V25 8GB/256GB" imgRef='https://img.5element.by/import/images/ut/goods/good_5f4ef522-3852-11ed-bb95-0050560120e8/v25-8gb-256gb-aquamarine-blue-telefon-gsm-vivo-1_600.jpg'/>
<OrderOperation key1="6" price1="329" productName="Smartphone POCO X6 5G 8GB/256GB " imgRef='https://img.5element.by/import/images/ut/goods/good_9175e137-3303-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="7" price1="239" productName="Smartphone Huawei nova 12  8GB/256GB  " imgRef='https://img.5element.by/import/images/ut/goods/good_7e6666a9-f286-11ee-8db3-005056012b6d/nova-12-se-256gb-bne-lx1-black-telefon-gsm-huawei-1_600.jpg'/>
<OrderOperation key1="8" price1="1659" productName="Smartphone Samsung Galaxy S24 Ultra 512GB" imgRef='https://img.5element.by/import/images/ut/goods/good_f2a2981e-b474-11ee-8db3-005056012b6d/sm-s928-zheltyy-titan-512gb-telefon-gsm-samsung-galaxy-s24-ultra-1_600.jpg'/>
<OrderOperation key1="9" price1="579" productName="Smartphone APPLE iPhone 11 Pro Max 64GB" imgRef='https://img.5element.by/import/images/ut/goods/good_b58146cd-828d-11ed-bb97-0050560120e8/-1_600.jpg'/>
<OrderOperation key1="10" price1="1249" productName="TV Samsung QE55Q70CAUXRU" imgRef='https://img.5element.by/import/images/ut/goods/good_ad7bd4f2-2ae4-11ee-bb93-005056012465/qe55q70cauxru-televizor-samsung-1_600.jpg'/>
<OrderOperation key1="11" price1="379" productName="TV Vityaz 5028ALULF1204 " imgRef='https://img.5element.by/import/images/ut/goods/good_355bf48e-f096-11ec-bb95-0050560120e8/32lh0212-televizor-vityaz-1_600.jpg'/>
<OrderOperation key1="12" price1="345" productName="ТV Horizont 50LE7513DFG" imgRef='https://img.5element.by/import/images/ut/goods/good_265a403c-16a1-11ea-80c7-005056840c70/good_img_5ef54fd5-172c-11ea-80c7-005056840c70_600.jpg'/>
<OrderOperation key1="13" price1="239" productName="ТV KIVI MR3286FD706BHT " imgRef='https://img.5element.by/import/images/ut/goods/good_4825c6ec-44cf-11ef-8db4-005056012b6d/m32fd70b-televizor-kivi-1_600.jpg'/>
<OrderOperation key1="14" price1="2429" productName="ТV Sony Bravia A80L XR-55A80L " imgRef='https://img.5element.by/import/images/ut/goods/good_f8f46b33-2759-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="15" price1="4499" productName="ТV LG B60L OLED77C4RLAL" imgRef='https://img.5element.by/import/images/ut/goods/good_22a1d6e5-f74e-11ee-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="16" price1="859" productName="ТV Harper 65QR850TS/RU" imgRef='https://img.5element.by/import/images/ut/goods/good_60ad82fa-3858-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="17" price1="609" productName="ТV IFFALCON iFFR55Q73TG" imgRef='https://img.5element.by/import/images/ut/goods/good_e2ecc293-2bc3-11ee-bb91-005056012464/iff55q73-televizor-iffalcon-1_600.jpg'/>
<OrderOperation key1="18" price1="644" productName="Laptop ASUS Vivobook Go 15 E1504FA-BQ831W" imgRef='https://img.5element.by/import/images/ut/goods/good_f19c2733-e135-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="19" price1="1739" productName="Laptop Apple MacBook Air 15 M2 2023 8/256" imgRef='https://img.5element.by/import/images/ut/goods/good_ef15f590-4d49-11ee-bb92-005056012464/-1_600.jpg'/>
<OrderOperation key1="20" price1="1329" productName="Laptop Lenovo LOQ 15APH8 82XTE1ES" imgRef='https://img.5element.by/import/images/ut/goods/good_64072d2e-025e-11ef-8db4-005056012b6d/-1_200.jpg'/>
<OrderOperation key1="21" price1="774" productName="Laptop Acer Aspire 3 A315-58G-5683" imgRef='https://img.5element.by/import/images/ut/goods/good_f4973714-3046-11ee-bb93-005056012465/nx-aduel-003-noutbuk-aspire-3-acer-1_600.jpg'/>
<OrderOperation key1="22" price1="1029" productName="Laptop Huawei MateBook D 16 MCLG-X" imgRef='https://img.5element.by/import/images/ut/goods/good_1e138c3f-a588-11ee-8db3-005056012b6d/mclg-x-53013wxa-matebook-d16-noutbuk-huawei-1_600.jpg'/>
<OrderOperation key1="23" price1="1451" productName="Laptop MSI Prestige 13 AI Evo MS-13Q2" imgRef='https://img.5element.by/import/images/ut/goods/good_1b2c8b51-2e15-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="24" price1="959" productName="Laptop Tecno Megabook S1 i5/16/512/Grey/W<" imgRef='https://img.5element.by/import/images/ut/goods/good_6dec0c31-8a00-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="25" price1="450" productName="Wireless Dreame Vacuum Cleaner H12S" imgRef='https://img.5element.by/import/images/ut/goods/good_ac31eb0a-be95-11ee-8db3-005056012b6d/hhr30b-h12s-wet-and-dry-vacuum-cleaner-besprovodnoy-pylesos-dreame-1_600.jpg'/>
<OrderOperation key1="26" price1="108" productName="Vacuum Cleaner KARCHER WD 3 V-17/20" imgRef='https://img.5element.by/import/images/ut/goods/good_8a15861d-0c41-11ef-8db4-005056012b6d/-2_600.jpg'/>
<OrderOperation key1="27" price1="224" productName="Xiaomi Robot Vacuum S10 BHR5988EU " imgRef='https://img.5element.by/import/images/ut/goods/good_2adf8d9b-038d-11ee-bb91-005056012464/-1_600.jpg'/>
<OrderOperation key1="28" price1="122" productName="Robot for cleaning windows Dadget W120" imgRef='https://img.5element.by/import/images/ut/goods/good_f1e2d64a-db72-11ec-bb95-0050560120e8/kit-fb0318-robot-moyschik-okon-dadzhet-w120-1_600.jpg'/>
<OrderOperation key1="29" price1="102" productName="Wiper KARCHER WV 2 Premium (1.633-425.0)" imgRef='https://img.5element.by/import/images/ut/goods/good_d7c9a182-ec2f-11ea-80c1-005056844aec/wv-2-premium-1-633-425-0-stekloochistitel-karcher-1_600.jpg'/>
<OrderOperation key1="30" price1="45" productName="Smart-watch Xiaomi Redmi Watch 3 Black" imgRef='https://img.5element.by/import/images/ut/goods/good_ff523d57-31d7-11ee-bb93-005056012465/-1_600.jpg'/>
<OrderOperation key1="31" price1="94" productName="Smart-watch Huawei Watch FIT 3  Green" imgRef='https://img.5element.by/import/images/ut/goods/good_0d2f90fd-14fa-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="32" price1="516" productName="Smart-watch APPLE Watch S9 41mm" imgRef='https://img.5element.by/import/images/ut/goods/good_350f1d6d-2032-11ef-8db4-005056012b6d/mr8u3lw-a-smart-chasy-apple-watch-series-9-gps-41mm-starlight-aluminum-case-with-starlight-sport-band-silicone-1_600.jpg'/>
<OrderOperation key1="33" price1="225" productName="Smart-watch Samsung Galaxy Watch 5 44 mm" imgRef='https://img.5element.by/import/images/ut/goods/good_39525f09-e044-11ed-bb92-005056012465/sm-r910nzbamea-smart-chasy-samsung-galaxy-watch-5-classic-44-mm-r910-sapphire-1_600.jpg'/>
<OrderOperation key1="34" price1="161" productName="Smart-watch Honor Watch 4 (TMA-B19)" imgRef='https://img.5element.by/import/images/ut/goods/good_322b5e42-ed01-11ee-8db3-005056012b6d/tma-b19-gold-smart-chasy-honor-watch-4-1_600.jpg'/>
<OrderOperation key1="35" price1="64" productName="Smart-watch Canyon Maverick SW-83" imgRef='https://img.5element.by/import/images/ut/goods/good_2154e1ae-12c3-11ef-8db4-005056012b6d/cns-sw83ss-siniy-umnye-chasy-canyon-1_600.jpg'/>
<OrderOperation key1="36" price1="60" productName="Smart-watch Haylou RS4 Plus LS11" imgRef='https://img.5element.by/import/images/ut/goods/good_d4805c4f-f78f-11ec-bb95-0050560120e8/rs4-plus-black-magnetic-strap-ls11-umnye-chasy-haylou-1_600.jpg'/>
<OrderOperation key1="37" price1="68" productName="Smart-watch Amazfit Pop 3R (A2319)" imgRef='https://img.5element.by/import/images/ut/goods/good_fd106abb-4cc1-11ee-bb95-005056012463/a2319-chernyy-umnye-chasy-amazfit-pop-3r-1_600.jpg'/>
<OrderOperation key1="38" price1="468" productName="Smart-watch APPLE Watch Series 8 41mm" imgRef='https://img.5element.by/import/images/ut/goods/good_708e3489-84e8-11ed-bb97-0050560120e8/skit-aw841-nu83-komplekt-apple-watch-series-8-41mm-midnight-mnu83-a2770--plus-podpiska-ivi-3-mes-1_200.jpg'/>
<OrderOperation key1="39" price1="900" productName="Fridge LG GC B4598SMUM" imgRef='https://img.5element.by/import/images/ut/goods/good_c24069e6-719c-11ee-8db3-005056012b6d/gc-b459smum-holodilnik-morozilnik-lg-1_600.jpg'/>
<OrderOperation key1="40" price1="1049" productName="Fridge Haier C4F740CDBGU1" imgRef='https://img.5element.by/import/images/ut/goods/good_f288727c-bf0a-11ed-bb90-005056012464/c4f740cdbgu1-holodilnik-haier-1_600.jpg'/>
<OrderOperation key1="41" price1="645" productName="Fridge Samsung RB33A3240WW/WT" imgRef='https://img.5element.by/import/images/ut/goods/good_6879e454-a2a5-11eb-bb92-0050560120e8/rb33a3240ww-wt-holodilnik-samsung-1_600.jpg'/>
<OrderOperation key1="42" price1="294" productName="Fridge ATLANT MXM-2835-90" imgRef='https://img.5element.by/import/images/ut/goods/good_e3b9cbe4-047c-4e02-8d07-59d3567066d8/mxm-2835-90-holodilnik-atlant-1_600.jpg'/>
<OrderOperation key1="43" price1="2670" productName="Fridge Hitachi R-W660PUC7 GBE" imgRef='https://img.5element.by/import/images/ut/goods/good_6b792b69-1db7-11ef-8db4-005056012b6d/r-w660puc7-gbe-holodilnik-hitachi-1_600.jpg'/>
<OrderOperation key1="44" price1="10" productName="Electric kettle SCARLETT SC-EK21S25" imgRef='https://img.5element.by/import/images/ut/goods/good_4c7d0a09-857f-11e6-80df-005056842056/sc-ek21s25-elektrochaynik-scarlett-1_600.jpg'/>
<OrderOperation key1="45" price1="35" productName=" Electric kettle Xiaomi 2 MJDSH04YM" imgRef='https://img.5element.by/import/images/ut/goods/good_d0485e2b-670a-11ed-bb95-0050560120e8/bhr5927eu-elektrochaynik-mjdsh04ym-xiaomi-1_600.jpg'/>
<OrderOperation key1="46" price1="29" productName="Electric kettle MAUNFELD MGK-616D" imgRef='https://img.5element.by/import/images/ut/goods/good_11b02f13-ac68-11ed-bb90-005056012464/mgk-616dbk-chaynik-maunfeld-1_600.jpg'/>
<OrderOperation key1="47" price1="106" productName="Electric kettle Braun WK1500BK" imgRef='https://img.5element.by/import/images/ut/goods/good_f79d09d8-3f0b-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="48" price1="312" productName="Washing machine ATLANT СМА-60Y1010" imgRef='https://img.5element.by/import/images/ut/goods/good_fc8a84b6-7030-11e4-811b-00505684b891/sma-60u1010-00-stiralnaya-mashina-atlant-1_600.jpg'/>
<OrderOperation key1="49" price1="503" productName="Washing machine LG F2J3HS4L" imgRef='https://img.5element.by/import/images/ut/goods/good_1e7eacf1-bdd3-11e9-80c7-005056840c70/f2j3hs4l-stiralnaya-mashina-lg-1_600.jpg'/>
<OrderOperation key1="50" price1="449" productName="Washing machine Samsung WW60AG4S0" imgRef='https://img.5element.by/import/images/ut/goods/good_2e15ab02-806f-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="51" price1="646" productName="Washing machine Bosch Serie 4 WAN2410KPL" imgRef='https://img.5element.by/import/images/ut/goods/good_343e78e9-3c24-11ee-bb93-005056012465/wan2410kpl-stiralnaya-mashina-bosch-1_600.jpg'/>
<OrderOperation key1="52" price1="420" productName="Washing machine Haier HW60-BP12919B" imgRef='https://img.5element.by/import/images/ut/goods/good_cad36be7-2aa6-11ed-bb95-0050560120e8/hw60-bp12919b-stiralnaya-mashina-haier-1_600.jpg'/>
<OrderOperation key1="53" price1="169" productName="Headphones Apple Airpods 2  (MV7N2/A)" imgRef='https://img.5element.by/import/images/ut/goods/good_e3433405-86b1-11ed-bb97-0050560120e8/-1_600.jpg'/>
<OrderOperation key1="54" price1="79" productName="Headphones JBL Tune 720BT Black" imgRef='https://img.5element.by/import/images/ut/goods/good_c6c37768-d0c3-11ee-8db3-005056012b6d/tune-720bt-blk-naushniki-besprovodnye-jbl-1_600.jpg'/>
<OrderOperation key1="55" price1="322" productName="Headphones Sony WH 1000XM4" imgRef='https://img.5element.by/import/images/ut/goods/good_4927a4f4-ec26-11ea-80c1-005056844aec/wh-1000xm4-chernyy-besprovodnye-naushniki-sony-1_600.jpg'/>
<OrderOperation key1="56" price1="82" productName="Headphones HUAWEI FreeBuds 6i T0019" imgRef='https://img.5element.by/import/images/ut/goods/good_b958a32d-32ba-11ef-8db4-005056012b6d/t0019-chernyy-besprovodnye-naushniki-huawei-freebuds-6i-1_600.jpg'/>
<OrderOperation key1="57" price1="210" productName="Headphones MARSHALL MAJOR V" imgRef='https://img.5element.by/import/images/ut/goods/good_20dfd866-4356-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="58" price1="39" productName="Headphones Panasonic RB-HX220BEES" imgRef='https://img.5element.by/import/images/ut/goods/good_7d8b57eb-0e23-11eb-80c1-005056844aec/rb-hx220beek-naushniki-panasonic-1_600.jpg'/>
<OrderOperation key1="59" price1="102" productName="Headphones Samsung Galaxy Buds FE SM-R400" imgRef='https://img.5element.by/import/images/ut/goods/good_1634bbc7-62a5-11ee-8db3-005056012b6d/sm-r400nzaacis-naushniki-samsung-galaxy-fe-r400n-gray-1_600.jpg'/>
<OrderOperation key1="60" price1="24" productName="Headphones Niceboy HIVE PINS" imgRef='https://img.5element.by/import/images/ut/goods/good_710787c0-2a9f-11ec-bb96-00505683f369/hive-pins-naushniki-besprovodnye-niceboy-1_600.jpg'/>
<OrderOperation key1="61" price1="43" productName="Headphones Xiaomi Redmi Buds 4 Black" imgRef='https://img.5element.by/import/images/ut/goods/good_52481e0b-31d7-11ee-bb93-005056012465/-1_600.jpg'/>
<OrderOperation key1="62" price1="162" productName="Headphones SOUNDCORE Q45 A3040" imgRef='https://img.5element.by/import/images/ut/goods/good_8b8dad2c-ca4b-11ed-bb92-005056012465/sdc-a3040g11-bk-chernyy-naushniki-besprovodnye-soundcore-q45-2_600.jpg'/>
<OrderOperation key1="63" price1="96" productName="Microwave BEKO MGC20130BFB" imgRef='https://img.5element.by/import/images/ut/goods/good_00dcc9bb-fbe9-11ee-8db4-005056012b6d/mgc20130bfb-mikrovolnovaya-pech-beko-1_600.jpg'/>
<OrderOperation key1="64" price1="70" productName="Microwave Hyundai HYM-M2038" imgRef='https://img.5element.by/import/images/ut/goods/good_796d4be8-505b-11ed-bb95-0050560120e8/hym-m2038-belyy-mikrovolnovaya-pech-hyundai-1_600.jpg'/>
<OrderOperation key1="65" price1="169" productName="Microwave Samsung MG23F302TQS/BW" imgRef='https://img.5element.by/import/images/ut/goods/good_ae7f9fcb-352a-11e5-813c-00505684b891/good_img_47a6f382-779f-11e7-80eb-005056842056_600.jpg'/>
<OrderOperation key1="66" price1="142" productName="Microwave LG MW23R35GIH" imgRef='https://img.5element.by/import/images/ut/goods/good_672253eb-d5ff-11e9-80c7-005056840c70/good_img_a6bd30ce-d84e-11e9-80c7-005056840c70_600.jpg'/>
<OrderOperation key1="67" price1="345" productName="Microwave Bosch FEL023MS2" imgRef='https://img.5element.by/import/images/ut/goods/good_918b492f-406c-11ec-bb94-0050560120e8/fel023ms2-mikrovolnovaya-pech-s-grilem-bosch-1_600.jpg'/>
<OrderOperation key1="68" price1="48" productName="Hairdryer POLARIS PHD 2289AC" imgRef='https://img.5element.by/import/images/ut/goods/good_ec14b8fd-d6c1-11e8-80c4-005056840c70/phd-2289ac-temno-seryy-fen-polaris-2_600.jpg'/>
<OrderOperation key1="69" price1="65" productName="Hairdryer Philips DryCare Pro BHD272/00" imgRef='https://img.5element.by/import/images/ut/goods/good_b308cbb8-ce2f-11e9-80c7-005056840c70/bhd272-00-fen-philips-1_600.jpg'/>
<OrderOperation key1="70" price1="31" productName="Hairdryer Vitek VT 1324LP5" imgRef='https://img.5element.by/import/images/ut/goods/good_73e489ce-ef05-11ed-bb90-005056012464/vt-1324-fen-aquamarine-vitek-1_600.jpg'/>
<OrderOperation key1="71" price1="89" productName="Hairdryer ROWENTA CV7461F" imgRef='https://img.5element.by/import/images/ut/goods/good_a2279203-6302-11e7-80eb-005056842056/cv7461f0-fen-rowenta-1_600.jpg'/>
<OrderOperation key1="72" price1="68" productName="Hairdryer Panasonic EH-NE83-K865" imgRef='https://img.5element.by/import/images/ut/goods/good_f4f6f632-754d-11e9-80c7-005056840c70/eh-ne83-k865-fen-panasonic-2_600.jpg'/>
<OrderOperation key1="73" price1="46" productName="Blender Polaris PHB 0848L" imgRef='https://img.5element.by/import/images/ut/goods/good_9ba00a2d-96ed-11ec-bb94-0050560120e8/phb-0848-ruchnoy-blender-polaris-1_600.jpg'/>
<OrderOperation key1="74" price1="105" productName="Blender BRAUN MQ55307MBK" imgRef='https://img.5element.by/import/images/ut/goods/good_f903dae7-1831-11ef-8db4-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="75" price1="27" productName="Blender Galaxy Line GL2133" imgRef='https://img.5element.by/import/images/ut/goods/good_01fb5ec2-fb36-11ee-8db4-005056012b6d/gl2133-blender-galaxy-line-1_600.jpg'/>
<OrderOperation key1="76" price1="49" productName="Blender BQ HB1234SSH368" imgRef='https://img.5element.by/import/images/ut/goods/good_aeb797cc-b035-11ec-bb95-0050560120e8/bq-hb1234ss-black-steel-ruchnoy-blender-bq-1_600.jpg'/>
<OrderOperation key1="77" price1="54" productName="Blender Gorenje HBX603RL" imgRef='https://img.5element.by/import/images/ut/goods/good_ab6e73e5-a533-11ec-bb95-0050560120e8/hbx603rl-pogruzhnoy-blender-gorenje-2_600.jpg'/>
<OrderOperation key1="78" price1="30" productName="Iron Polaris PIR 2481KL23" imgRef='https://img.5element.by/import/images/ut/goods/good_eef69780-63a7-11ea-80c7-005056840c70/good_img_61d2b99a-644c-11ea-80c7-005056840c70_600.jpg'/>
<OrderOperation key1="79" price1="92" productName="Iron Braun TexStyle 7 SI 7042GR" imgRef='https://img.5element.by/import/images/ut/goods/good_ab558af7-2fb9-11eb-bb92-0050560120e8/si5078gy-utyug-braun-1_600.jpg'/>
<OrderOperation key1="80" price1="176" productName="Smart speaker Yandex Station Midi Black" imgRef='https://img.5element.by/import/images/ut/goods/good_69673106-7949-11ee-8db3-005056012b6d/yndx-00054blk-chernyy-umnaya-kolonka-yandeks-stanciya-midi-s-alisoy-s-zigbee-1_600.jpg'/>
<OrderOperation key1="81" price1="702" productName="3D Printer Creality CRK10L" imgRef='https://img.5element.by/import/images/ut/goods/good_9a765ba7-62a5-11ee-8db3-005056012b6d/cr-k1-3d-printer-creality-1_600.jpg'/>
<OrderOperation key1="82" price1="186" productName="Lawn mower ECO LG-43589" imgRef='https://img.5element.by/import/images/ut/goods/good_2c6d4a88-ae62-11eb-bb92-0050560120e8/lg-435-gazonokosilka-benzinovaya-eco-1_600.jpg'/>
<OrderOperation key1="83" price1="805" productName="Electric scooter Ninebot Kickscooter F2 Plus" imgRef='https://img.5element.by/import/images/ut/goods/good_c922a17f-f036-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="84" price1="93" productName="Electric shaver Braun Series 5 50-M1000s Mint" imgRef='https://img.5element.by/import/images/ut/goods/good_f0fd8648-55a9-11eb-bb92-0050560120e8/50-m1000s-elektricheskaya-britva-braun-1_600.jpg'/>
<OrderOperation key1="85" price1="929" productName="Air conditioner LG Eco Smart 2021 PC09SQR" imgRef='https://img.5element.by/import/images/ut/goods/good_2ca8f269-a4a5-11ee-8db3-005056012b6d/-1_600.jpg'/>
<OrderOperation key1="86" price1="137" productName="Navigator NAVITEL E777 Truck" imgRef='https://img.5element.by/import/images/ut/goods/good_62c91dcb-a3cd-11ed-bb92-005056012465/-1_600.jpg'/>
<OrderOperation key1="87" price1="28" productName="Ventilator HOLT HT-FN-002L" imgRef='https://img.5element.by/import/images/ut/goods/good_73d6da85-f134-11ec-bb95-0050560120e8/ht-fn-002-ventilyator-holt-1_600.jpg'/>
<OrderOperation key1="88" price1="138" productName="Сonvector Electrolux ECH/B-2000 E" imgRef='https://img.5element.by/import/images/ut/goods/good_9866c035-531f-11ee-bb92-005056012464/-1_600.jpg'/>
<OrderOperation key1="89" price1="562" productName="Game console Sony PlayStation 5 (PS5) Slim" imgRef='https://360shop.by/upload/cssinliner_webp/resize_cache/iblock/e11/500_500_140cd750bba9870f18aada2478b24840a/lxg3pu8uswheoy0ptbb1xz9nsgg8l0u8.webp'/>
<OrderOperation key1="90" price1="94" productName="Gamepad Sony PS5 DualSense CFI-ZCT1J" imgRef='https://shop.mts.by/upload/resize_cache/webp/iblock/7c9/xyjsvwi7zmq7bs585qwfw3ecfo6mn8v3/270_500_1/DualSense_1.webp'/>
<OrderOperation key1="91" price1="709" productName="Game console  Xbox Series X 1TB 1882" imgRef='https://cdn21vek.by/img/galleries/7600/835/preview_b/xboxseriesx1tb1882_microsoft_62c54c3f3def6.jpeg'/>
<OrderOperation key1="92" price1="84" productName="Gamepad Microsoft Xbox Series X" imgRef='https://cdn21vek.by/img/galleries/8787/287/preview_b/xboxseriescarbonqat00005_microsoft_65c463f067401.jpeg'/>
<OrderOperation key1="93" price1="15" productName="Night Light Yeelight Motion Sensor YLYD01YL" imgRef='https://img.5element.by/import/images/ut/goods/good_48ca0112-bf9a-11ea-80c8-005056840c70/good_img_838fb797-cb26-11ea-80c8-005056840c70_600.jpg'/>
<OrderOperation key1="94" price1="420" productName="Coffee machine KRUPS ESSENTIAL EA810870" imgRef='https://img.5element.by/import/images/ut/goods/good_ababaf2c-9dba-11e5-813c-00505684b891/ea810870-kofemashina-krups-1_600.jpg'/>
<OrderOperation key1="95" price1="97" productName="Web camera Razer Kiyo X RZ19-04170100-R3M1" imgRef='https://img.5element.by/import/images/ut/goods/good_8fafb4cf-8a5c-11ec-bb94-0050560120e8/rz19-04170100-r3m1-veb-kamera-razer-kiyo-x-1_600.jpg'/>
<OrderOperation key1="96" price1="263" productName="Electric stove GEFEST EP N D 6140-02" imgRef='https://img.5element.by/import/images/ut/goods/good_2d19f60b-afa1-11e1-b8a5-005056af0003/ep-n-d-6140-02-elektroplity-bytovye-gefest-1_600.jpg'/>
<OrderOperation key1="97" price1="12" productName="Microphone MIRU MIC002" imgRef='https://img.5element.by/import/images/ut/goods/good_ee3770b3-2f0e-11ef-8db4-005056012b6d/-1_600.jpg'/>
<button className={` z-10  bg-red-600  text-3xl font-serif font-extrabold w-[350px] h-[60px] rounded-xl tracking-wider  text-slate-100 my-8 ${isLoggedIn ? 'block' : 'hidden'} ${isOrdered ? 'hidden' : 'block'} ${totalCounter > 0 ? 'block' : 'hidden'} `} onClick={Ordering} >Order</button>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-7xl' : 'text-5xl'} font-bold font-serif italic relative top-[60px] ${isLoggedIn ? 'hidden' : 'block'}  `}>You don't logged in your account.</p>
<Link href="/sing-up"><div className={` ${width > 750 ? 'text-5xl' : 'text-3xl'} ${width > 750 ? 'relative right-[122%] top-[77px]' : 'relative right-[100%] top-[78px]'} text-blue-600 hover:border-[2px] border-b-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0 ${isLoggedIn ? 'hidden' : 'block'} hover:rounded-md {width > 750  ? 'w-[165px]' : 'w-[96px]'}`}>Sing up</div> </Link>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'relative top-[30px] right-[62px]' : 'relative right-[3.1%] top-[43px]'} ${width > 750 ? 'text-5xl' : 'text-3xl'} font-bold font-sans italic relative top-[30px] right-[62px] ${isLoggedIn ? 'hidden' : 'block'}  `}>or</p>
  <Link href="/login"><div className={`  ${width > 750 ? 'relative left-[50%] bottom-[20px]' : 'relative left-[76%] top-[8px]'} ${width > 750 ? 'text-5xl' : 'text-3xl'} text-blue-600 hover:border-[2px] border-b-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0  ${width > 750  ? 'w-[122px]' : 'w-[76px]'} ${isLoggedIn ? 'hidden' : 'block'} hover:rounded-md `}>Login </div> </Link> 
  <p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'relative bottom-[70px] left-[220px]' : 'relative left-[1000%]'} ${width > 750 ? 'text-5xl' : 'text-3xl'} font-bold font-sans italic  ${isLoggedIn ? 'hidden' : 'block'}  `}>at first</p>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-7xl' : 'text-5xl'} font-bold font-serif italic relative top-[60px] ${isLoggedIn ? 'block' : 'hidden'} ${isOrdered ? 'hidden' : 'block'} ${totalCounter > 0 ? 'hidden' : 'block'} `}>Nothing in a cart</p>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-5xl' : 'text-3xl'} font-bold font-serif italic relative top-[80px] ${isLoggedIn ? 'block' : 'hidden'} ${isOrdered ? 'hidden' : 'block'} ${totalCounter > 0 ? 'hidden' : 'block'} `}>You haven't added any products yet</p>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-7xl' : 'text-5xl'} font-bold font-serif italic relative top-[60px] ${isLoggedIn ? 'block' : 'hidden'} ${isOrdered ? 'block' : 'hidden'}`}>You have successfully completed your order!</p>
<p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-5xl' : 'text-3xl'} font-bold font-serif italic relative top-[80px] ${isLoggedIn ? 'block' : 'hidden'} ${isOrdered ? 'block' : 'hidden'}`}>Your order has added to a history of orders </p>
<p className={`relative top-[100px] ${width > 750 ? 'right-[10%]' : 'right-[20%]'} text-4xl text-blue-800 hover:border-[2px] ${isLoggedIn ? 'block' : 'hidden'} border-b-blue-800 hover:border-l-0 hover:border-t-0 hover:border-r-0  hover:rounded-md  ${isOrdered ? 'block' : 'hidden'}`}><Link href='/'>Home</Link></p>
<p className={`relative top-[60px] ${width > 750 ? 'left-[5%]' : 'left-[15%]'} text-4xl text-blue-800 hover:border-[2px] ${isLoggedIn ? 'block' : 'hidden'} border-b-blue-800 hover:border-l-0 hover:border-t-0 hover:border-r-0  hover:rounded-md  ${isOrdered ? 'block' : 'hidden'}`}><Link href='/profile'>History</Link></p>
</div>
<Footer/>
</>
)
}
