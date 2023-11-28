import { useEffect } from 'react';
import Button from '../../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { func } from 'prop-types';

function LoginStep() {

    const navigate = useNavigate()
  
    return (
    <>
      <div className="flex py-3 px-0 items-center gap-5 self-stretch">
          <svg onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        <p className="text-neutral-50 text-base not-italic font-bold leading-normal">Step 1 of 4</p>
      </div>

    </>
    )
  
}

function Header() {

return(
  <>
    <h1 className="text-neutral-50 w-60 h-7 font-px-regular text-2xl not-italic font-bold leading-normal">Create your account</h1>
  </>
)
}

function Date({handleInputChange}) {
  return (<>
    <div  className="flex items-center gap-3 self-stretch">
              <fieldset className="group border-neutral-500 border flex py-4 px-3 justify-between items-center self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                <legend className="text-neutral-500 px-2 text-sm not-italic font-medium leading-normal group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover">Month</legend>
              
                <select onChange={handleInputChange} name='month' className="bg-neutral-1000 text-neutral-50 text-xl not-italic font-normal leading-normal focus-within:outline-none">
                  <option value="January"  >January</option>
                  <option value='February' >February</option>
                  <option value='March' >March</option>
                  <option value='April' >April</option>
                  <option value='May' >May</option>
                  <option value='June' >June</option>
                  <option value='July' >July</option>
                  <option value='August' >August</option>
                  <option value='September' >September</option>
                  <option value='October' >October</option>
                  <option value='November' >November</option>
                  <option value='December' >December</option>
                </select>
              </fieldset>
              <fieldset className="group border-neutral-500 border flex py-4 px-3 justify-between items-center self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                <legend className="text-neutral-500 px-2  text-sm not-italic font-medium leading-normal group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover ">Day</legend>
                <select  onChange={handleInputChange} name='day' className="bg-neutral-1000 text-neutral-50 text-xl not-italic font-normal leading-normal focus-within:outline-none">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
              </fieldset>
              <fieldset className="group border-neutral-500 border flex py-4 px-3 justify-between items-center self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                <legend className="text-neutral-500 px-2 text-sm not-italic font-medium leading-normal group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover ">Year</legend>
                <select  onChange={handleInputChange} name='year' className="bg-neutral-1000 text-neutral-50 text-xl not-italic font-normal leading-normal focus-within:outline-none">
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                  <option>1996</option>
                  <option>1995</option>
                </select>
              </fieldset>
            </div>
  </>)
}

function Form() {


  const initialValues = { 
    username: '',
    email: '',
    day: 1,
    month: '',
    year: 2023
  };
  const [user, setUser] = useState(initialValues);
  // const [userError, setUserError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name] : value})
    console.log(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setUserError(validate(user));
    // setIsSubmit(true)
  }

  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(userError)
  //   if (Object.keys(userError).length === 0 && isSubmit) {
  //     console.log(user)
  //   }
  // }, [user])

  // const validate = (values) => {
  //   const error = {}
  //   const regex = /^[^\s@]+ @[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.name) {
  //     error.username = "Username is required";
  //   } 
  //   if (!values.email) {
  //     error.email = "Email is required";
  //   }
  //   return error;
  // };

  return (
    <>
    <div >
        <form className="flex flex-col items-center gap-8 self-stretch" 
        onSubmit={(e) => {
          e.preventDefault();
          handleChange;
          navigate
        }} autoComplete='off'  >

            <fieldset className="group border-neutral-500 border py-4 px-3 flex justify-between items-center self-stretch rounded focus-within:border-twitter-blue hover:border-twitter-blue-hover">
              <legend className="text-neutral-500  w-12 py-0 px-1 gap-2.5 flex items-center justify-center group-focus-within:text-neutral-50 group-hover:text-twitter-blue-hover">
                <div className="px-2">Name</div>
              </legend>
              <input className="bg-neutral-1000 text-neutral-50 text-xl border-none group-focus-within:text-neutral-50 focus:outline-none" value={user.username} onChange={handleChange} placeholder="Name" type="text" name="username" />
            </fieldset>

            <fieldset className="bg-neutral-1000 group border-neutral-500 border mt-2 py-4 px-3 flex items-center justify-between self-stretch rounded focus-within:border-twitter-blue hover:border-twitter-blue-hover">
              <legend className="text-neutral-500 px-2 group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover">Email</legend>
              <input type="email" className="bg-neutral-1000 text-neutral-50 text-xl font-normal leading-normal not-italic group group-focus-within:text-neutral-50 group-focus-within:outline-none " value={user.email} name='email' onChange={handleChange} placeholder="Email" />
          </fieldset>
          
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="text-neutral-50 text-base not-italic font-bold leading-normal">Date of birth</div>
              <p className=" text-neutral-500 self-stretch text-base not-italic font-normal leading-normal">
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
              </p>
            </div>
            {/* Select your Date of Birth */}
            <Date handleInputChange={handleChange}/>
            

          <footer className="flex flex-col justify-center justify-items-center items-center place-content-center gap-5 self-stretch">
            <a>
              <Button size='md' variant='default' wh="medium" text='Create Account' onClick={() => navigate("/login2")} disabled={!user.name || !user.email} >Create Account</Button>
            </a>
          </footer>
        </form>
            

    </div>
    </>
  )
}

function Login() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black w-screen h-screen pt-0 pb-5 px-4 gap-3 flex flex-col items-center justify-center shrink-0 ">
        
        <LoginStep  />
        <div className="my-3 mx-4 flex flex-col items-center justify-center gap-5 self-stretch">
          <Header/>
          <Form/>         
        </div>

      </div>
    </>
  )
}

export default Login;