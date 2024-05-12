import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tweet } from "./components/Tweet";
import { TweetForm } from "./components/TweetForm";

const DefaultTweet = [
    { id: 0, name: 'Melvyn', content: 'Je vais bien', like: 200 },
    { id: 1, name: 'Marie', content: 'cool', like: 0 },
    { id: 2, name: 'Mouna', content: 'FUN', like: 1200 },
    { id: 3, name: 'Jean', content: 'super', like: 50 },
    { id: 4, name: 'Maria', content: 'nice', like: 570 }
];

function App() {
    const [tweets, setTweets] = useState(DefaultTweet);

    const handleDelete = (id:number) => {
        const updatedTweets = tweets.filter(tweet => tweet.id !== id);
        setTweets(updatedTweets);
    };

    const onLike = (tweetId:number) => {
        const likedTweet = tweets.find(tweet => tweet.id === tweetId);
        if (likedTweet) {
            likedTweet.like += 1;
            setTweets([...tweets]);
        }
    };

    const handleSubmit = (newTweet: { name: string; content: string }) => {
        const tweet = {
            id: tweets.length,
            name: newTweet.name,
            content: newTweet.content,
            like: 0
        };
        setTweets([...tweets, tweet]);
    };

    const tweetList = tweets.map((tweet) => {
        return (
            <div key={tweet.id}>
                <Tweet
                    id={tweet.id}
                    name={tweet.name}
                    content={tweet.content}
                    like={tweet.like}
                    handleDelete={handleDelete}
                    onLike={onLike}
                />
            </div>
        );
    });

    return (
        <div>
            <TweetForm handleSubmit={handleSubmit}/>
            <div className={"tweet-container"}>
                {tweetList}
            </div>
        </div>
    );
}

export default App;

