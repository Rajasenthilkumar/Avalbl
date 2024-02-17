import { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  _id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export const useFetchLatestMessage = (chat: any) => {

  const [latestMessage, setLatestMessage] = useState<Message | null>(null);

  useEffect(() => {
    const getMessages = async () => {
      const response = await axios.get(`http://192.168.101.189:5000/api/message/${chat?._id}`);
      
      console.log("getchatlist", response.data);
      

      if (response.data.error) {
        return console.log("Error getting messages....", response.data.error)
      }

      const lastMessage = response.data[response.data?.length - 1]
      setLatestMessage(lastMessage)
    };

    getMessages();
  }, []);

  return { latestMessage };
};