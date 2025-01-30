interface ImageSrc {
    lg: string;
    md: string;
    sm: string;
}

interface Creator {
    name: string;
    src: string;
}

interface Collections{
    name: string;
    src: string;
}

interface CardProps {
    id: string;
    title: string;
    amount: number;
    timeLeft: string;
    src: ImageSrc[];
    bidders: string[];
    likes: number;
    creator: Creator[];
    collection: Collections[];
}

interface ComponentProps {
    classname?: string;
}

interface SocialIcons {
    id: string;
    name: string;
    src: string;
    alt: string;
}


export {ComponentProps, SocialIcons,CardProps}