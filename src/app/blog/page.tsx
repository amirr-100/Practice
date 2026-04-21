import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "My Blog",
    }
}


export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("International Dely");
        }, 3000);        
    });{
        }
    return <h1>My Blog</h1>;

    
} 