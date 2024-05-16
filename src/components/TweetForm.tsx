import React from "react";
import styled from 'styled-components';
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
        <TweetStyledForm onSubmit={handleFormSubmit} className={"tweet-form"}>
            <h4>New tweet</h4>
            <input placeholder="name" type="text" name="name" />
            <input placeholder="content" type="text" name="content" />
            <input type="submit" />
        </TweetStyledForm>
    );
}

const TweetStyledForm = styled.form`
    display:flex;
    flex-direction: column ;
    width: fit-content;
    gap: 8px;
    margin-bottom: 32px;
`;