declare module '*.mp4' {
    const src: string;
    export default src;
}
declare module '*.jpg' {
    const src: any;
    export default src;
  }
 
  type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}