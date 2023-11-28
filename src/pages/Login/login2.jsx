import { useNavigate } from "react-router-dom";
import Button from "../../components/Button"
import { useState } from "react";


function Header() {
    return (
    <>
        <h1 className="text-neutral-50 w-60 h-7 font-px-regular text-2xl not-italic font-bold leading-normal">Create your account</h1>
    </>
    )
}

function Form() {

    const initialValues = { 
        username: '',
        email: '',
        date: new Date().toDateString(),
      };

      const [user, setUser] = useState(initialValues)
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name] : value})
        console.log(user)
      }
    
      function handleDate(e) {
        setUser({...user, date: e.target.value})
        console.log(user.date)
      }
    
    
      const handleSubmit = (e) => {
        e.preventDefault()
      }

      const navigate = useNavigate()

    return (
        <>
        <form className="w-full " autoComplete="off">
        <div className="flex flex-col items-center gap-8 self-stretch">
            
                    <fieldset className="group border-neutral-500 border py-4 px-3 flex justify-between items-center self-stretch rounded focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                        <legend className="text-neutral-500  w-12 py-0 px-1 gap-2.5 flex items-center justify-center group-focus-within:text-neutral-50 group-hover:text-twitter-blue-hover">
                            <div className="px-2">Name</div>
                        </legend>
                        <input className="bg-neutral-1000 text-neutral-50 text-xl border-none group-focus-within:text-neutral-50 focus:outline-none" value={user.username} onChange={handleChange} placeholder="Name" type="text" name="username" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#00BE74" />
                        </svg>
                    </fieldset>
                    <fieldset className="group border-neutral-500 border mt-2 py-4 px-3 flex items-center justify-between self-stretch rounded focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                        <legend className="text-neutral-500 py-0 px-1 gap-2.5 flex items-center justify-center group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover">Email</legend>
                            <input type="email" className="bg-neutral-1000 text-neutral-50 text-xl font-normal leading-normal not-italic group-focus-within:text-neutral-50 focus-within:outline-none " value={user.email} onChange={handleChange} name="email" placeholder="Email" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#00BE74" />
                        </svg>
                    </fieldset>
                    <fieldset className="group border-neutral-500 border flex py-4 px-3 justify-between items-center rounded self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover ">
                        <legend className="text-neutral-500 py-0 px-1 gap-2.5 flex items-center justify-center group-focus:text-twitter-blue group-hover:text-twitter-blue-hover">Date of Birth</legend>
                            <input className="bg-neutral-1000 text-neutral-50 text-xl font-normal leading-normal not-italic focus-within:outline-none" onChange={handleDate} value={user.date} placeholder="Date of Birth" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#00BE74" />
                        </svg>
                    </fieldset>
                </div>
                <footer className="flex flex-col justify-end items-center gap-5 self-stretch">
                    <div className="mt-40 mx-5 justify-center flex items-center self-stretch">
                        <a >
                        <Button variant='primary' text='Sign up' wh='medium' size='md' onClick={() => navigate("/login3")} >Sign up</Button>
                        </a>
                    </div>
                </footer>      
            </form>
        </>
    )

}

function Login2() {

    const navigate = useNavigate()
    return (
      <>
        <div className="bg-black w-screen h-screen pt-0 pb-5 px-4 gap-3 flex flex-col items-start shrink-0 ">
            <div className="flex py-3 px-0 items-center gap-5 self-stretch">
                <svg onClick={() => navigate("/login1")} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-neutral-50 text-base not-italic font-bold leading-normal">Step 2 of 4</p>
            </div>
            <div className="my-3 mx-4 flex flex-col items-start gap-5 self-stretch">
                <Header/>
                <Form/>
            </div>
        </div>
      </>
    )
}

export default Login2