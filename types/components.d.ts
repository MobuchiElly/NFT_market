interface ImageSrc {
    lg: string;
    md: string;
    sm: string;
}
  
interface CardProps {
    id: string;
    title: string;
    amount: number;
    timeLeft: string;
    src: ImageSrc[];
    bidders: string[];
    likes: number;
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