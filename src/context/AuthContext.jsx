import React, { useContext, useState } from "react";

export const TweetContext = React.createContext()

const tweetData = [{
    id :1,
    name: 'khushi sukar',
    handle:'khushisukar',
    time: '3h',
    tweetText: "All is well",
    comments: 0,
    likes: 0,
    retweets: 0,
    views: 0,
    isLiked: false,
    isRetweeted: false
,
    id :2,
    name: 'khushi sukar',
    handle:'khushisukar',
    time: '53s',
    tweetText: "I'm not addicted to coffee. It's just my way of life",
    comments: 0,
    likes: 0,
    retweets: 0,
    views: 0,
    isLiked: false,
    isRetweeted: false
}]


export function TweetProvider({ children }) {

    const [userTweets, setUserTweets] = useState(tweetData)

    return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }} >
        { children }
    </TweetContext.Provider>
    )

}

