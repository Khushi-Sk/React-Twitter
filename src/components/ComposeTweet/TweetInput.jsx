import PropType from "prop-types";
import UserAvatar from "../profile/Avatar";

export default function TweetInput({tweetText, setTweetText}) {
    return (<>
        <div className="w-18 h-14">
            <a href="../user-profile/index.html">
                <button>
                  <UserAvatar image='img1' size='md' />
                </button>
            </a>
        </div>
        <textarea cols={30} rows={2} name="postContent" 
        className=" bg-black text-neutral-600 pl-3 flex items-center font-Inter text-xl not-italic font-normal overflow-hidden  resize-none focus:text-neutral-50 focus:outline-none" 
        placeholder="What's happening?!"
        type="text" value={tweetText} onChange={(e) => {setTweetText(e.target.value)}} />
    </>    )}


TweetInput.propType = {
    tweetText: PropType.string.isRequired,
    setTweetText: PropType.string.isRequired,
}