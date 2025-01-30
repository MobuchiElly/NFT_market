interface ComponentProps {
    classname?: string;
}

interface SocialIcons {
    id: string;
    name: string;
    src: string;
    alt: string;
}


interface CardProps {
    title: string;
    amount: number;
    timeLeft: string;
    src: string;
    bidders: string[];
    likes: number;
}


export {ComponentProps, SocialIcons,CardProps}