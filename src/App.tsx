import React, { useState, useEffect } from 'react';
import './App.css';
import { Tweet, TweetProps } from "./components/Tweet";
import { TweetForm } from "./components/TweetForm";
import styled from 'styled-components';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import {Amplify} from "aws-amplify";
Amplify.configure(config);


const DefaultTweet = [
    { id: 0, name: 'Melvyn', content: 'Je vais bien', like: 200 },
    { id: 1, name: 'Marie', content: 'cool', like: 0 },
    { id: 2, name: 'Mouna', content: 'FUN', like: 1200 },
    { id: 3, name: 'Jean', content: 'super', like: 50 },
    { id: 4, name: 'Maria', content: 'nice', like: 570 }
];

function App() {
    const [tweets, setTweets] = useState(() => {
        const savedTweetsJSON = localStorage.getItem('tweets');
        return savedTweetsJSON ? JSON.parse(savedTweetsJSON) : DefaultTweet;
    });

    useEffect(() => {
        console.log("test")
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }, [tweets]);



    const handleDelete = (id:number) => {
        const updatedTweets = tweets.filter((tweet:TweetProps) => tweet.id !== id);
        setTweets(updatedTweets);
    };

    const onLike = (tweetId:number) => {
        const likedTweet = tweets.find((tweet:TweetProps)=> tweet.id === tweetId);
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


    const tweetList = tweets.map((tweet:TweetProps) => {
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
            <Authenticator>
            <TweetForm handleSubmit={handleSubmit}/>
            <div className={"tweet-container"}>
                <TweetContainer>
                {tweetList}
                </TweetContainer>
            </div>
            </Authenticator>
        </div>
    );
}

export default App;

const TweetContainer=styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 16px;

`


