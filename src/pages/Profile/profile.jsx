import UserAvatarCam from "../../assets/profiles/User avatar cam.png"
import UserAvatarProfile from "../../assets/User avatar.png"
import Link from "../../assets/profiles/Link Icon.png"
import Add from "../../assets/Add.png"
import Cover from "../../assets/profiles/image 17.png"
import Interactions from "../../components/interactions"
import PostComponent from "../../components/PostComponent"
import Button from "../../components/Button"
import Tweet from "../../components/PostComponent"
import { useNavigate } from "react-router-dom"

function UserDetails({cover, userProfile, name, handle, bio, link, joinedAt, following, followers}) {
  
  const navigate = useNavigate()
  return(
        <>

<a >
    <img src={cover} className=" w-full h-2/3  relative shrink-0" alt="cover profile picture" />
  </a>
  <a>
    <img onClick={() => navigate("/profile-edit")} className="border-black bg-neutral-200 border-4 mx-4 p-2 w-20 h-20 top-28 left-2 rounded-full shrink-0" src={userProfile} alt="user profile picture" />
  </a>   
  <div className="flex flex-row items-end justify-end">
    
    <a>
      <Button size='md' wh='normal' variant='edit' onClick={() => navigate("/profile-edit")} >Edit profile</Button>
    </a>
  </div>
        
        <p className="text-neutral-50 mx-5 text-xl font-bold not-italic leading-normal">{name}</p>
    <p className="text-neutral-500 mx-5 text-base font-normal not-italic leading-normal">@{handle}</p>
    <p className="text-neutral-50 mx-5 py-5 text-lg font-normal not-italic leading-normal">{bio}</p>
    <span className=" flex flex-row gap-1 items-center justify-start">
      <img className="ml-5 w-4 h-4 " src={Link} />
      <a href='#' className="text-twitter-blue mt-0 text-base">{link}</a>
      <svg className="ml-7" xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
        <path d="M5.0542 5C5.0542 5.55225 4.60645 6 4.0542 6C3.50195 6 3.0542 5.55225 3.0542 5C3.0542 4.44775 3.50195 4 4.0542 4C4.60645 4 5.0542 4.44775 5.0542 5Z" fill="#737373" />
        <path d="M4.0542 9.25C4.60645 9.25 5.0542 8.80225 5.0542 8.25C5.0542 7.69775 4.60645 7.25 4.0542 7.25C3.50195 7.25 3.0542 7.69775 3.0542 8.25C3.0542 8.80225 3.50195 9.25 4.0542 9.25Z" fill="#737373" />
        <path d="M5.0542 11.25C5.0542 11.8022 4.60645 12.25 4.0542 12.25C3.50195 12.25 3.0542 11.8022 3.0542 11.25C3.0542 10.6978 3.50195 10.25 4.0542 10.25C4.60645 10.25 5.0542 10.6978 5.0542 11.25Z" fill="#737373" />
        <path d="M7.5542 6C8.10645 6 8.5542 5.55225 8.5542 5C8.5542 4.44775 8.10645 4 7.5542 4C7.00195 4 6.5542 4.44775 6.5542 5C6.5542 5.55225 7.00195 6 7.5542 6Z" fill="#737373" />
        <path d="M8.5542 8.25C8.5542 8.80225 8.10645 9.25 7.5542 9.25C7.00195 9.25 6.5542 8.80225 6.5542 8.25C6.5542 7.69775 7.00195 7.25 7.5542 7.25C8.10645 7.25 8.5542 7.69775 8.5542 8.25Z" fill="#737373" />
        <path d="M7.5542 12.25C8.10645 12.25 8.5542 11.8022 8.5542 11.25C8.5542 10.6978 8.10645 10.25 7.5542 10.25C7.00195 10.25 6.5542 10.6978 6.5542 11.25C6.5542 11.8022 7.00195 12.25 7.5542 12.25Z" fill="#737373" />
        <path d="M12.0542 5C12.0542 5.55225 11.6064 6 11.0542 6C10.502 6 10.0542 5.55225 10.0542 5C10.0542 4.44775 10.502 4 11.0542 4C11.6064 4 12.0542 4.44775 12.0542 5Z" fill="#737373" />
        <path d="M11.0542 9.25C11.6064 9.25 12.0542 8.80225 12.0542 8.25C12.0542 7.69775 11.6064 7.25 11.0542 7.25C10.502 7.25 10.0542 7.69775 10.0542 8.25C10.0542 8.80225 10.502 9.25 11.0542 9.25Z" fill="#737373" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.3042 0.25C1.19971 0.25 0.304199 1.14539 0.304199 2.25V12.75C0.304199 13.8546 1.19971 14.75 2.3042 14.75H12.8042C13.9087 14.75 14.8042 13.8546 14.8042 12.75V2.25C14.8042 1.14539 13.9087 0.25 12.8042 0.25H2.3042ZM12.8042 2.75H2.3042C2.10303 2.75 1.91992 2.82947 1.78516 2.95874C1.64258 3.09521 1.5542 3.28723 1.5542 3.5V12.75C1.5542 13.1642 1.89014 13.5 2.3042 13.5H12.8042C13.2183 13.5 13.5542 13.1642 13.5542 12.75V3.5C13.5542 3.08582 13.2183 2.75 12.8042 2.75Z" fill="#737373" />
      </svg>
      <p className="text-neutral-500 text-base font-medium not-italic leading-normal gap-3">Joined {joinedAt}</p>
    </span>
    <span className="flex flex-row items-center gap-1 justify-start">
      <p className="text-neutral-500 ml-5 gap-2.5">
        <span className="text-blue-100 font-bold">{following} </span>
        Following
      </p>
      <p className="text-neutral-500 ml-5 gap-2.5 my-3">
        <span className="text-blue-100 font-bold">{followers} </span>
        Followers
      </p>
    </span>
        </>
    )
}

function Profile() {
  const navigate = useNavigate()
    return (
        <>
    <div className="bg-neutral-1000">
      {/* <div>
          <a href="../src/edit-profile.html">
            <img src={Cover} className=" w-full h-2/3  relative shrink-0" alt="cover profile picture" />
          </a>
          <a href="../src/edit-profile.html">
            <img className="border-black bg-neutral-200 border-4 mx-4 p-2 w-20 h-20 absolute top-28 left-2 rounded-full shrink-0" src={UserAvatarProfile} alt="user profile picture" />
          </a>   
          <div className="flex flex-row items-end justify-end">
            <a href="../src/edit-profile.html">
              <button className="bg-black text-neutral-50 border-twitter-blue border rounded-full w-32 h-9  mx-3 my-2 py-2 px-5 inline-flex items-center justify-center gap-2.5 ">Edit profile</button>
            </a>
          </div>
      </div> */}
  <div id="profile-bio" className="bg-black lex w-screen flex-col justify-end items-start gap-4">
    <UserDetails cover={Cover} userProfile={UserAvatarProfile} name='Khushi Sukar' handle='khushi_sukar' joinedAt=' september 2018 '
    bio=' Digital Goodies Team - Web &amp; Mobile UI/UX development; Graphics; Illustrations' 
    link=' pixsellz.io' followers='118' following='217' />

    <Tweet name='Khushi Sukar' handle='khushi_sukar' time='23h' tweetcontent='All is well !!'/>
    <Tweet name='khusshi' handle='Khuhsish' time='23h' tweetcontent='All is well !!'/>
    <Tweet name='khusshi' handle='Khuhsish' time='23h' tweetcontent='All is well !!'/>
    <Tweet name='khusshi' handle='Khuhsish' time='23h' tweetcontent='All is well !!'/>

    <a>
      <button onClick={() => navigate("/compose-tweet")} className="fixed bottom-20 right-4 items-start gap-2.5 rounded-full bg-twitter-blue p-4 shadow-3xl" fdprocessedid="p38c8">
        <img  className="h-8 w-8 rounded-full" src={Add} />
      </button>
    </a>
  </div>
  </div>

        </>
    )
}


export default Profile