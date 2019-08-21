import React from 'react';
import { Emoji } from './Emoji';


export const EmojiCollection = () => {

    const emojis: { src: string, alt: string }[] = [
        {
            src: 'images/red_emoji.PNG',
            alt: "red emoji",
        },
        {
            src: 'images/orange_emoji.PNG',
            alt: "orange emoji",
        },
        {
            src: 'images/yellow_emoji.PNG',
            alt: "yellow emoji",
        },
        {
            src: 'images/lt_green_emoji.PNG',
            alt: "light green emoji",
        },
        {
            src: 'images/dk_green_emoji.PNG',
            alt: "dark green emoji",
        },
    ];

    const emojiComponents = emojis.map((emoji, i) => {
        return (
            <Emoji key={i} src={emoji.src} alt={emoji.alt} />
        );
    });

    return (
        <div>
            { emojiComponents }
        </div>
    );

};
