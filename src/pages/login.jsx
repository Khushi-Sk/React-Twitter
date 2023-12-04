

import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


// import { AuthContext } from '../context/AuthContext'

function StatusBar() {
  return (
    <>
    <div className=" w-screen h-10 pt-3.5 pr-3.5 pb-3 pl-5 flex justify-center items-center gap-60 shrink-0">
        <div className="text-neutral-50 w-14 text-center not-italic text-xs font-bold leading-4 tracking-tight">9:41</div>
        <div className="w-16 h-3 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width={68} height={12} viewBox="0 0 68 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.5894 0.159912H61.4106C62.6587 0.159912 63.1113 0.289868 63.5676 0.533898C64.0239 0.777928 64.382 1.13603 64.626 1.59233C64.87 2.04862 65 2.50122 65 3.74935V8.07047C65 9.3186 64.87 9.7712 64.626 10.2275C64.382 10.6838 64.0239 11.0419 63.5676 11.2859C63.1113 11.53 62.6587 11.6599 61.4106 11.6599H46.5894C45.3413 11.6599 44.8887 11.53 44.4324 11.2859C43.9761 11.0419 43.618 10.6838 43.374 10.2275C43.13 9.7712 43 9.3186 43 8.07047V3.74935C43 2.50122 43.13 2.04862 43.374 1.59233C43.618 1.13603 43.9761 0.777928 44.4324 0.533898C44.8887 0.289868 45.3413 0.159912 46.5894 0.159912ZM46.5894 1.15991C45.6025 1.15991 45.2579 1.22645 44.904 1.41571C44.622 1.56654 44.4066 1.7819 44.2558 2.06393C44.0665 2.41782 44 2.76237 44 3.74935V8.07047C44 9.05745 44.0665 9.40201 44.2558 9.7559C44.4066 10.0379 44.622 10.2533 44.904 10.4041C45.2579 10.5934 45.6025 10.6599 46.5894 10.6599H61.4106C62.3975 10.6599 62.7421 10.5934 63.096 10.4041C63.378 10.2533 63.5934 10.0379 63.7442 9.7559C63.9335 9.40201 64 9.05745 64 8.07047V3.74935C64 2.76237 63.9335 2.41782 63.7442 2.06393C63.5934 1.7819 63.378 1.56654 63.096 1.41571C62.7421 1.22645 62.3975 1.15991 61.4106 1.15991H46.5894ZM67.5 5.84991C67.5 7.08649 66 7.84991 66 7.84991V3.84991C66 3.84991 67.5 4.61334 67.5 5.84991Z" fill="#404040" />
            <rect x={45} y="2.07666" width={18} height="7.66667" rx="1.6" fill="#F9F9F9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.623 1.56575C14.6 1.68166 14.6 1.82106 14.6 2.09985V9.79985C14.6 10.0786 14.6 10.218 14.623 10.334C14.7177 10.81 15.0898 11.1821 15.5659 11.2768C15.6818 11.2999 15.8212 11.2999 16.1 11.2999C16.3788 11.2999 16.5182 11.2999 16.6341 11.2768C17.1101 11.1821 17.4822 10.81 17.5769 10.334C17.6 10.218 17.6 10.0786 17.6 9.79985V2.09985C17.6 1.82106 17.6 1.68166 17.5769 1.56575C17.4822 1.08972 17.1101 0.717599 16.6341 0.622911C16.5182 0.599854 16.3788 0.599854 16.1 0.599854C15.8212 0.599854 15.6818 0.599854 15.5659 0.622911C15.0898 0.717599 14.7177 1.08972 14.623 1.56575ZM9.89999 4.49986C9.89999 4.22106 9.89999 4.08167 9.92305 3.96575C10.0177 3.48972 10.3899 3.1176 10.8659 3.02291C10.9818 2.99986 11.1212 2.99986 11.4 2.99986C11.6788 2.99986 11.8182 2.99986 11.9341 3.02291C12.4101 3.1176 12.7822 3.48972 12.8769 3.96575C12.9 4.08167 12.9 4.22106 12.9 4.49985V9.79986C12.9 10.0787 12.9 10.218 12.8769 10.334C12.7822 10.81 12.4101 11.1821 11.9341 11.2768C11.8182 11.2999 11.6788 11.2999 11.4 11.2999C11.1212 11.2999 10.9818 11.2999 10.8659 11.2768C10.3899 11.1821 10.0177 10.81 9.92305 10.334C9.89999 10.218 9.89999 10.0787 9.89999 9.79986V4.49986ZM5.32305 6.26575C5.29999 6.38167 5.29999 6.52107 5.29999 6.79986V9.79986C5.29999 10.0787 5.29999 10.218 5.32305 10.334C5.41773 10.81 5.78985 11.1821 6.26588 11.2768C6.3818 11.2999 6.52119 11.2999 6.79999 11.2999C7.07878 11.2999 7.21818 11.2999 7.3341 11.2768C7.81012 11.1821 8.18224 10.81 8.27693 10.334C8.29999 10.218 8.29999 10.0787 8.29999 9.79986V6.79986C8.29999 6.52106 8.29999 6.38167 8.27693 6.26575C8.18224 5.78972 7.81012 5.4176 7.3341 5.32292C7.21818 5.29986 7.07878 5.29986 6.79999 5.29986C6.52119 5.29986 6.3818 5.29986 6.26588 5.32292C5.78985 5.4176 5.41773 5.78972 5.32305 6.26575ZM0.523058 8.26575C0.5 8.38167 0.5 8.52107 0.5 8.79986V9.79986C0.5 10.0787 0.5 10.218 0.523058 10.334C0.617746 10.81 0.989863 11.1821 1.46589 11.2768C1.58181 11.2999 1.72121 11.2999 2 11.2999C2.27879 11.2999 2.41819 11.2999 2.53411 11.2768C3.01014 11.1821 3.38225 10.81 3.47694 10.334C3.5 10.218 3.5 10.0787 3.5 9.79986V8.79986C3.5 8.52106 3.5 8.38167 3.47694 8.26575C3.38225 7.78972 3.01014 7.4176 2.53411 7.32292C2.41819 7.29986 2.27879 7.29986 2 7.29986C1.72121 7.29986 1.58181 7.29986 1.46589 7.32292C0.989863 7.4176 0.617746 7.78972 0.523058 8.26575Z" fill="#F9F9F9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M30.3005 2.69626C32.5349 2.69636 34.6839 3.55491 36.3033 5.09447C36.4252 5.21333 36.6201 5.21183 36.7402 5.09111L37.9059 3.91469C37.9667 3.85346 38.0006 3.77053 38.0001 3.68423C37.9996 3.59793 37.9647 3.5154 37.9032 3.45488C33.6529 -0.618425 26.9475 -0.618425 22.6972 3.45488C22.6356 3.51535 22.6007 3.59786 22.6001 3.68416C22.5995 3.77046 22.6334 3.85342 22.6941 3.91469L23.8601 5.09111C23.9802 5.21201 24.1752 5.21351 24.2971 5.09447C25.9167 3.55481 28.0659 2.69626 30.3005 2.69626ZM30.3005 6.52365C31.5282 6.52357 32.712 6.97989 33.622 7.80393C33.7451 7.92088 33.939 7.91834 34.059 7.79821L35.2233 6.6218C35.2846 6.56009 35.3187 6.47638 35.3178 6.38939C35.3169 6.30241 35.2812 6.21941 35.2186 6.15896C32.4474 3.58121 28.1559 3.58121 25.3848 6.15896C25.3222 6.21941 25.2865 6.30245 25.2857 6.38946C25.2848 6.47648 25.319 6.56018 25.3804 6.6218L26.5444 7.79821C26.6644 7.91834 26.8583 7.92088 26.9813 7.80393C27.8908 6.98043 29.0737 6.52416 30.3005 6.52365ZM32.5381 9.33125C32.6003 9.27014 32.6346 9.18604 32.6328 9.09881C32.6311 9.01158 32.5934 8.92895 32.5286 8.87043C31.2424 7.78253 29.3586 7.78253 28.0724 8.87043C28.0076 8.9289 27.9699 9.01151 27.968 9.09874C27.9662 9.18597 28.0004 9.27009 28.0626 9.33125L30.077 11.3638C30.136 11.4235 30.2165 11.4571 30.3005 11.4571C30.3845 11.4571 30.465 11.4235 30.524 11.3638L32.5381 9.33125Z" fill="#F9F9F9" />
          </svg>
        </div>
      </div>
    </>
  )
}

function Header() {
  return (
    <>
      <header className="text-neutral-50 flex w-screen py-3 px-4 justify-center items-center gap-32">
        <div className="gap-0 flex justify-center items-end w-14 h-5">
          <img src="../src/assets/login/100.png"/>
          <img src="../src/assets/login/Group 27162.png" width={12} /> 
        </div>
      </header>
    </>
  )
}


function Main() {
  
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex flex-col  items-center justify-center self-stretch gap-1">
        <h1 className="text-neutral-50 font-Inter text-3xl not-italic font-extrabold leading-normal">
          Happening now
        </h1>
        <p className="text-neutral-50 font-medium leading-normal not-italic text-base">
          Join today.
        </p>
        <div className="my-10 mx-10 flex justify-center items-center">
            <Button variant='default' wh='medium' size='lg' onClick={() => navigate('/login1')} >Create Account</Button> 
        </div>
        <div className="flex items-center justify-center gap-1 self-stretch">
          <hr className="border-neutral-700 flex-grow border-t-2 ml-2" />
          <span className="text-neutral-50">or</span>
          <hr className="border-neutral-700 flex-grow border-t-2 mr-2" />
        </div>
      </div>
    </>
  )
}

function HomePage() {
  // const { setIsLoggedIn} = useContext(AuthContext)
  const navigate= useNavigate()
  
  const onSignIn = async () => {
  const BaseUrl = 'https://one00x-react-backend.onrender.com'
  const Endpoint = 'login'
    const response = await fetch(`${BaseUrl}/${Endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      email:"batman@example.com",
      password: "gothamrocks",
      })
    })

    if (!response.ok) {
      alert("Login failed! Invalid credentials");
      throw new Error(response.statusText);
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse);  
    navigate("/homefeed")
  }
  

  return (
      <>
        <div className="bg-black h-screen items-center">
          <StatusBar />
          <Header />

          <div className="w-screen py-0 px-7 inline-flex flex-col items-center justify-center gap-10 ">
            <Main/>
            <footer className="text-neutral-50 flex flex-col items-center justify-center self-stretch gap-1">
              <p>Already have an account?</p>
              <div className="my-10 mx-10 flex justify-center items-center">
                <Button variant='outline' wh='medium' size='md' onClick={onSignIn} >Sign Up</Button>
              </div>
            </footer> 
           </div>
        </div>
      </>
  )
}

export default HomePage;

