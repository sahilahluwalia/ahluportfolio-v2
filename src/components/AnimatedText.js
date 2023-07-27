import React from 'react';
import Typewriter from 'typewriter-effect';

function AnimatedText() {
    return (
        <Typewriter
            options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
                wrapperClassName:'animated-text primary-text display-4 font-bold text-black',
                cursorClassName:'display-4',
            }}
        />
    );
}

export default AnimatedText;