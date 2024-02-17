import { useEffect, useState } from 'react';
import axios from 'axios';

interface ErrorResponse {
  error: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

interface HookResponse {
  recipientUser: UserData | null;
  error: ErrorResponse | null;
}

export const useFetchRecipientUser = (chat: any, user: any): HookResponse => {
  const [recipientUser, setRecipientUser] = useState<UserData | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);

  const recipientId = chat?.members?.find((id: any) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return;

      try {
        const response = await axios.get(`http://192.168.101.189:5000/api/user/find/${recipientId}`);
        setRecipientUser(response.data);
      } catch (error: any) {
        // Explicitly specify the type of 'error'
        setError(error.response ? error.response.data : { error: 'An unknown error occurred' } as ErrorResponse);
      }
    };

    getUser();
  }, [recipientId, chat, user]);

  return { recipientUser, error };
};
