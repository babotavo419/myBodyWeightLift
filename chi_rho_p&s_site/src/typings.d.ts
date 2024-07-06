declare module '*.mp4' {
    const src: string;
    export default src;
}
declare module '*.jpg' {
    const src: any;
    export default src;
  }

type BlogPost = {
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    modified: string;
}

type WorkOutTemplete = {
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
}