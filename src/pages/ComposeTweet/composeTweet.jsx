// import ComposeTweetHeader from "../../components/CreatePost";
import UserAvatar from "../../components/profile/Avatar";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import LikeLogo from '../../assets/interactions/heart.png'
import RetweetLogo from '../../assets/interactions/retweet.png'
import TweetInput from "../../components/ComposeTweet/TweetInput";

import { TweetContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4} from "uuid";
 

export default function ComposeTweet() {

    const { userTweets, setUserTweets} = useContext(TweetContext);

    const [tweetText, setTweetText] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
   

    const handleTweet = async () => {

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUserTweets([...userTweets, {
            id: 4,
            time: Date.now(),
            name: username,
            handle: userData.name ,
            tweetcontent: 'im not wellllll',
            comments: 0, 
            likes: 0,
            retweets: 0,
            views: 0
        }
        ]);
        
        setIsLoading(false);
        setTweetText("");
        navigate("/homefeed")
        // const newTweetObject = { text: tweetText, id: tweets.length + 1, likes: 0, retweets: 0};
        // console.log(newTweetObject)
        // setTweets([...tweets, newTweetObject]);
        // setTweetText('');
        // console.log(setTweets)
        // console.log(setTweetText)
    }

    const handleLike = (tweetId) => {
        const updatedTweets = tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                return {...tweet, likes: tweet.likes + 1}
            }
            return tweet;
        })
        setTweets(updatedTweets);      
    }

    const handleRetweet =(tweetId) => {
        const newRetweets = tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                return {...tweet, retweets: tweet.retweets + 1}
            }
            return tweet;
        })
        setTweets(newRetweets)
    }

    return (
    
        <>
       <div className="bg-black shrink-0 w-screen h-screen"> 
            <main>
            <div className=" w-screen py-3 px-4 flex justify-between items-center">
                <a>
                    <svg onClick={() => navigate("/homefeed")} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                {/* <a href="../home-feed/index.html"> */}
                    <Button wh='xSmall' size='md' variant='primary' onClick={handleTweet}>{isLoading ? 'Posting' : "Post"}</Button>
                {/* </a> */}
            </div>  
                <div className=" bg-black rounded py-3 px-4 w-96 flex justify-center items-center gap-3">
                    {/* <div className="w-18 h-14">
                    <a href="../user-profile/index.html">
                        <button>
                        <UserAvatar image='img1' size='md' />
                        </button>
                    </a>
                    </div> */}
                    {/* <textarea className=" bg-black text-neutral-600 pl-3 flex items-center font-Inter text-xl not-italic font-normal overflow-hidden  resize-none focus:outline-none" cols={0} rows={2} placeholder="What's happening?!" /> */}
                    <TweetInput tweetText={tweetText} setTweetText={setTweetText} />
                    
                    {/* <label className="border-2 rounded w-72 p-2 font-semibold my-6 text-lg  text-blue-50" onClick={tweetText}>{tweetText}</label> */}
                    
                    
                </div>
            </main>

            <footer className="border-t-neutral-800 border-t fixed bottom-20 w-screen py-3 px-4 flex items-center gap-5">
                <p className="text-neutral-500 font-normal text-base not-italic leading-normal">0/280</p>
            </footer>
        </div>
        </>
    )

}
