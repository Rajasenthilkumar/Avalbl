import React, { useState, useRef, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useFetchRecipientUser } from './hook/useFetchReceipientUser';
import io, { Socket } from 'socket.io-client';

interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

interface AvalibilityProps {
  user: UserType;
  currentChat: any;
}

interface Message {
  _id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ChatApp: React.FC<AvalibilityProps> = ({ user, currentChat }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [textMessage, setTextMessage] = useState<string>('');
// Remove declaration of newMessage from useState
const [, setNewMessage] = useState<Message | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSocket = io('http://192.168.101.189:3001');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(`http://192.168.101.189:5000/api/message/${currentChat?._id}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    getMessages();
  }, [currentChat]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (textMessage.trim() !== '') {
      try {
        const response = await axios.post(
          `http://192.168.101.189:5000/api/message`,
          JSON.stringify({
            chatId: currentChat._id,
            senderId: user._id,
            text: textMessage,
          }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (socket) {
          const recipientId = currentChat.members.find((id: any) => id !== user?._id);
          const messageData = {
            content: textMessage,
            senderId: user._id,
            recipientId,
          };
          socket.emit('sendMessage', messageData);
        } else {
          console.error('Socket is not available.');
        }

        setNewMessage(response.data);
        setMessages((prev) => [...prev, response.data]);
        setTextMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  return (
    <Grid container spacing={2} style={{ height: 'auto', width: '100%' }}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ position: 'relative', height: '82vh', overflow: 'hidden', width: '100%', margin: 'auto' }}>
          <div
            style={{
              width: '100%',
              position: 'absolute',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
              overflow: 'hidden',
              borderBottom: '2px solid #C3BFD7',
            }}
          >
            <img src={recipientUser?.profilePic} alt='profile' style={{ width: '50px', maxWidth: '100%', height: '50px', borderRadius: '50px' }} />
            <Typography variant="h6" style={{ marginLeft: '8px', marginTop: '10px' }}>
              {recipientUser?.name}
            </Typography>
          </div>

          <div
            style={{
              overflowY: 'auto',
              height: '63vh',
              marginTop: '90px',
              paddingTop: '10px',
            }}
          >
            {messages.map((message, index) => (
              <Grid
                key={index}
                item
                xs={12}
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  overflow: 'hidden',
                  textAlign: message.senderId === user?._id ? 'right' : 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: message.senderId === user?._id ? 'row-reverse' : 'row' }}>
                  <img
                    src={message.senderId === user._id ? user.profilePic : recipientUser?.profilePic}
                    alt={`profile-${index}`}
                    style={{ width: '50px', maxWidth: '100%', height: '50px', borderRadius: '50%' }}
                  />
                  <Typography
                    variant="h6"
                    style={{
                      marginLeft: '8px',
                      marginRight: '8px',
                      backgroundColor: message.senderId === user?._id ? '#424866' : '#69C1AC',
                      color: message.senderId === user?._id ? 'white' : 'black',
                      borderRadius: message.senderId === user?._id ? '12px 0px 12px 12px' : '0px 12px 12px 12px',
                      padding: '5px',
                    }}
                  >
                    {message.text}
                  </Typography>
                </div>
              </Grid>
            ))}
            <div ref={messagesEndRef}></div> {/* Dummy element for scrolling to bottom */}
          </div>

          <div style={{ position: 'absolute', bottom: '2vh', left: '1%', right: '1%', display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Type a message"
              variant="outlined"
              fullWidth
              multiline
              rows={1}
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              InputProps={{ style: { overflow: 'hidden' } }}
              style={{ position: 'absolute', bottom: 0, width: '90%' }}
              onKeyDown={handleKeyPress}
            />
            <Button
              variant="contained"
              onClick={handleSendMessage}
              style={{ position: 'absolute', bottom: 10, left: '93%', backgroundColor: '#2CB512' }}
            >
              Send
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChatApp;