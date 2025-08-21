import { StreamChat } from "stream-chat";

export const apiKey= process.env.STREAM_API_KEY as string;
export const apiSecretKey= process.env.STREAM_API_SECRET as string;

if(!apiKey || !apiSecretKey){
    throw new Error("Missign required environment variables for STREAM_API_KEY AND STREAM_API_SECRET")
}

export const serverClient= new StreamChat(apiKey, apiSecretKey);