import React from 'react';
import styled from 'styled-components';
export interface TweetProps {
    id: number;
    name: string;
    content: string;
    like: number;
    handleDelete: (id: number) => void;
    onLike: (id: number) => void
}

export function Tweet({ id, name, content, like, handleDelete, onLike }: TweetProps) {
    return (
        <TweetContainer>
            <TweetStyle>
                <DeleteButton onClick={() => handleDelete(id)}>&#x274C;</DeleteButton>
                <h3>{name}</h3>
                <p>{content}</p>
                <LikeButton onClick={() => onLike(id)}>{like} &#x1F49B;</LikeButton>
            </TweetStyle>
        </TweetContainer>
    );
}

const TweetContainer = styled.div`
    margin-bottom: 20px;
`;

const TweetStyle = styled.div`
    background: #81ecec;
    border: 2px solid #2980b9;
    padding: 8px;
    width: fit-content;
    min-width: 200px;
    position: relative;
`;

const DeleteButton = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
`;

const LikeButton = styled.button`
    margin-top: 10px;
    background: snow;
    border: none;
    cursor: pointer;
`;