import React from 'react';

interface TweetProps {
    id: number;
    name: string;
    content: string;
    like: number;
    handleDelete: (id: number) => void;
    onLike: (id: number) => void
}

export function Tweet({ id, name, content, like, handleDelete,onLike }: TweetProps) {


    return (
        <div className={"tweet"}>
            <button onClick={() => handleDelete(id)} className={'delete'}>&#x274C;</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={()=> onLike(id)}>{like} &#x1F49B;</button>
        </div>
    );
}
