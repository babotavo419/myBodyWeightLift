declare module '*.mp4' {
    const src: string;
    export default src;
}
declare module '*.jpg' {
    const src: any;
    export default src;
  }

  export interface BlogPost {
    id: string;
    imageUrl: string;
    title: string;
    shortDescription: string;
    category: string;
    author: string;
    date: string;
    longDescription: string;
  }

type WorkOutTemplete = {
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
}