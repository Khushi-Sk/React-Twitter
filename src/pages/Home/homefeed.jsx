import img1 from '../../assets/User avatar.png'
import img2 from '../../assets/profiles/User avatar.png'
import img3 from '../../assets/profiles/User avatar2.png'
import img4 from '../../assets/profiles/User avatar cam.png'

import UserAvatar from '../../components/profile/Avatar'
import Tab from '../../components/homefeed/Tabs'
import Interactions from '../../components/interactions'
import PostComponent from '../../components/PostComponent'
import Tweet from '../../components/PostComponent'

import { TweetContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


function HomeFeed() {

    const tweets = useContext(TweetContext);
    const tweetsDetails = [...tweets.userTweets].reverse();
    const navigate = useNavigate()

    return (
      <>
        <div className="bg-black w-screen h-screen ">
          <div className="border-b-neutral-700 border-b flex w-screen  py-3 px-4 items-center gap-32 ">
            <a >
            <UserAvatar onClick={() => navigate("/profile")} image='img1' size='md' />
            </a>
            <div className="gap-0 flex justify-center items-end w-3/4 h-5">
              <img src="../../src/assets/login/100.png" width={56} className="flex justify-center items-center " />
              <img src="../../src/assets/login/Group 27162.png" width={18} className="flex justify-center items-center" />
            </div>
          </div>
    
          <div className="group border-b-neutral-700 border-b my-3 pt-5 pb-0 px-20 flex justify-center items-start self-stretch gap-40">
            <div className=" rounded h-9 w-14 flex justify-center items-start flex-col gap-4 "> 
              <Tab type='forYou' text='For you'/>
            </div>
            <Tab type='following' text='Following'/>
          </div>

          <section>
            {tweetsDetails.map((tweet, index) => (
              <Tweet key={index} {...tweet} />
            )) }
            {/* <Tweet time='10h' name='Name' handle="Handle" tweetcontent="Don't wish for it, work for it." /> */}
          </section>

          <a >
            <button onClick={() => navigate("/compose-tweet")} className="fixed bottom-20 right-4 items-start gap-2.5 rounded-full bg-twitter-blue p-4 shadow-3xl" fdprocessedid="p38c8">
              <img className="h-8 w-8 rounded-full" src="../../src/assets/Add.png" />
            </button>
          </a>
          <div className="fixed bottom-0 flex items-start gap-4 self-stretch border-b-neutral-700 border-b ">
            <footer className="bg-neutral-1000 border-t-neutral-800 flex w-screen py-5 px-6 justify-center items-center gap-10 border-t">
              <div>
                <a >    
                  <button onClick={() => navigate("/homefeed")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#F9F9F9" />
                    </svg>
                  </button>
                </a>
              </div>
              <div>
                <a >
                  <button onClick={() => navigate("/profile")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                      <path d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z" stroke="#F9F9F9" strokeWidth={2} strokeLinejoin="round" />
                      <path d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z" stroke="#F9F9F9" strokeWidth={2} />
                    </svg>
                  </button>
                </a>
              </div>
            </footer>
          </div>
        </div>

      </>
    )
  }
  
  
export default HomeFeed