import React from "react";
interface TweetFormProps{
    handleSubmit: (newTweet: { name: string; content: string; like: number }) => void;
}
export function TweetForm({ handleSubmit }: TweetFormProps) {
    const handleFormSubmit = (event : any|null)=>{
        event.preventDefault();
        const name = event.currentTarget.name.value;
        const content = event.currentTarget.content.value;
        const newTweet = {
            name: name,
            content: content,
            like: 0
        };

        handleSubmit(newTweet);
        event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleFormSubmit} className={"tweet-form"}>
            <h4>New tweet</h4>
            <input placeholder="name" type="text" name="name"/>
            <input placeholder="content" type="text" name="content"/>
            <input type="submit"/>
        </form>
    );
}