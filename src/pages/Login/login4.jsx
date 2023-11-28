import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

function Login4() {

    const navigate = useNavigate()

    return (
      <>
    <div className="bg-neutral-1000 flex w-screen h-screen pt-0 pb-5 px-16 gap-3 flex-col items-start shrink-0">
    <div className="flex py-3 px-0 items-center gap-5 self-stretch">
        <svg onClick={() => navigate("/login3")} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-neutral-50 text-base not-italic font-bold leading-normal">Step 4 of 4</p>
    </div>
    <div className="flex flex-col items-start self-stretch gap-10">
        <div className="flex flex-col items-start  self-stretch gap-3">
        <div className="flex flex-col items-start self-stretch gap-3">
            <h1 className="text-neutral-50 text-2xl not-italic font-bold leading-normal">You’ll need a password</h1>
            <p className="text-neutral-500 font-normal text-base not-italic leading-normal">Make sure it’s 8 characters or more</p>
        </div>
        </div>
        <div className="flex flex-col items-end self-stretch gap-3">
        <fieldset className="group border-neutral-500 border flex py-4 px-3 justify-between items-center rounded self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover ">
            <legend className="text-neutral-500 group-focus:text-twitter-blue group-hover:text-twitter-blue-hover">Password</legend>
            <input type="password" className="bg-neutral-1000 text-neutral-50 text-xl font-normal leading-normal not-italic focus-within:outline-none" placeholder="Password" />
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#737373" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#737373" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </fieldset>
        </div>
        <footer className="pt-20 flex flex-col justify-end items-center self-stretch gap-5">           
        <div className="mt-60 flex justify-center items-center self-stretch">
            <a >
            <Button variant='default' wh='long' size='md' onClick={() => navigate("/homefeed")} >Next</Button>
            </a>
        </div>
        </footer>
    </div>
    </div>

      </>
    )
  }
  
  export default Login4 