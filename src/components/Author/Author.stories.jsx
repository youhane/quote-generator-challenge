import Author from "./Author";

export default {
    title: 'Author',
    component: Author,
}

export const Default = () => <Author 
    author="Author Name" 
    tag="Author Tag" 
    setShowMultipleQuotes={() => console.log("Clicked Author")}
/>;