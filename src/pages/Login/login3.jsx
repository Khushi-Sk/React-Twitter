import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

function Login3() {

    const navigate = useNavigate()

    return (
      <>
        <div className="bg-neutral-1000 flex w-screen h-screen pt-0 pb-5 px-16 gap-3 flex-col items-start shrink-0">
            <div className="flex py-3 px-0 items-center gap-5 self-stretch">
                <svg onClick={() => navigate("/login2")} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-neutral-50 text-base not-italic font-bold leading-normal">Step 3 of 4</p>
            </div>

            <div className="flex flex-col items-start self-stretch gap-10">
                <div className="flex flex-col items-start  self-stretch gap-3">
                    <div className="flex flex-col items-start self-stretch gap-3">
                        <h1 className="text-neutral-50 text-2xl not-italic font-bold leading-normal">We sent you a code</h1>
                        <p className="text-neutral-500 font-normal text-base not-italic leading-normal">Enter it below to verify janedoe@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-end self-stretch gap-3">
                    <fieldset className="group border-neutral-500 border flex py-4 px-3 justify-between items-center rounded self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover ">
                        <legend className="text-neutral-500 group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover">Verification code</legend>
                        <input className="bg-neutral-1000 text-neutral-50 text-xl font-normal leading-normal not-italic focus-within:outline-none" placeholder="Verification code" />
                    </fieldset>
                    <p className="text-twitter-blue text-right text-base not-italic font-normal leading-normal">Didn’t receive a code?</p>
                </div>

                <footer className="mt-20 flex flex-col justify-end items-center self-stretch gap-5">
                <div className="mt-60 flex justify-center items-center">
                    <Button variant='default' size='md' wh='long' onClick={() => navigate("/login4")} >Next</Button>
                </div>
                </footer>
            </div>
        </div>
      </>
    )
}

export default Login3