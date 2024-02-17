import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avalibility from '../Message/Avalibility';
import axios from 'axios';
import RecentChat from './RecentChat';
import io, { Socket } from 'socket.io-client';


interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilePic: string;
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

interface ResponsiveChatProps {
  user: UserType;
}

const ResponsiveChat: React.FC<ResponsiveChatProps> = ({ user }) => {
  const [userChats, setUserChats] = useState<any>([]);
  const [, setIsUserChatsLoading] = useState<boolean>(false);
  const [, setUserChatsError] = useState<any>(null);
 
  //new chat
  const [, setPotentialChats] = useState<any>([]);
 
 
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [, setAllUsers] = useState<any>([]);
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [, setOnlineUsers] = useState<any>([]);
  const [notifications, setNotifications] = useState<any>([]);
  const [, setMessages] = useState<Message[]>([]);

  

//Socket connection
  //initial socket
  useEffect(() => {
    const newSocket = io('http://192.168.101.189:3001');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  //add online users
  useEffect(() => {
    if (socket === null) return;
    socket.emit('addNewUser', user?._id);
    socket.on('getOnlineUsers', (res) => {
      setOnlineUsers(res);
    });

    return () => {
      socket.off('getOnlineUsers');
    };
  }, [socket]);


  //receive message and notification
  useEffect(() => {
    if (socket === null) return;

    socket.on('getMessage', (res) => {
      if (currentChat?._id !== res.chatId) return;
      
      setMessages((prev) => [...prev, res]);
    });

    socket.on('getNotification', (res) => {
      const isChatOpen = currentChat?.members.some((id: any) => id === res.senderId);

      if (isChatOpen) {
        setNotifications((prev: any) => [{ ...res, isRead: true }, ...prev]);
      } else {
        setNotifications((prev: any) => [res, ...prev]);
      }
    });

    return () => {
      socket.off('getMessage');
      socket.off('getNotification');
    };
  }, [socket, currentChat]);

  // console.log("trtytkytr", notifications);
  

  //users
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`http://192.168.101.189:5000/api/user`);

      if (response.data.error) {
        console.error('Error fetching users', response);
        return;
      }

      const pChats = response.data.filter((u: any) => {
        let isChatCreated = false;

        if (user?._id === u._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat: any) => {
            return chat.members[0] === u._id || chat.members[1] === u._id;
          });
        }

        return !isChatCreated;
      });

      setPotentialChats(pChats);
      setAllUsers(response.data);
    };

    getUsers();
  }, [userChats]);
  // console.log('jhbdshvbjdv', allUsers);
  // console.log('vsdhjvdjhvjhd', userChats);

  const updateCurrentChat = useCallback((selectedChat: any) => {
    setCurrentChat(selectedChat);
  }, []);

  // console.log('Currredc', currentChat);

  //create chat passing sender and receiver Id
  // const createChat = useCallback(async (firstId: any, secondId: any) => {
  //   const response = await axios.post(
  //     `http://192.168.101.189:5000/api/chat`,
  //     JSON.stringify({
  //       firstId,
  //       secondId,
  //     })
  //   );

  //   if (response.data.error) {
  //     return console.log('Error creating chat', response);
  //   }
  //   setUserChats((prev: any) => [...prev, response]);
  // }, []);

  //user chats
  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        try {
          setIsUserChatsLoading(true);
          setUserChatsError(null);

          const response = await axios.get(`http://192.168.101.189:5000/api/chat/${user._id}`);
          console.log('Chats', response.data);
          setIsUserChatsLoading(false);

          setUserChats(response.data);
        } catch (error) {
          setUserChatsError(error);
        } finally {
          setIsUserChatsLoading(false);
        }
      }
    };

    getUserChats();
  }, [user]);

  
  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };




  //show individual notification
  const markThisUserNotificationsAsRead = useCallback(
    (thisUserNotifications: any, notifications: any) => {
      //mark notifications as read

      const mNotifications= notifications.map((el: any) => {
        let notification

        thisUserNotifications.forEach((n: any) => {
          if(n.senderId === el.senderId) {
            notification = {...n, isRead: true}
          }
          else {
            notification = el
          }
        })
        return notification
      })

      setNotifications(mNotifications)
    }, [])


  return (
      <Grid container spacing={2} sx={{ backgroundColor: '#F7F8F8' }}>
        
        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: '2px solid #BEBAD2',padding: '10px', }}>
          <Typography variant="h5" textAlign="left" mr={2} sx={{ padding: '10px 0px 0px 10px' }}>
            Recent Chat
          </Typography>
          <Box sx={{ height: '83vh', overflowY: 'auto' }}>
  {userChats.map((item: any, index: any) => (
    <Grid container spacing={1} key={index} onClick={() => updateCurrentChat(item)} sx={{ marginTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
      <RecentChat
        chat={item}
        user={user}
        selectedItem={selectedItem}
        onItemClick={handleItemClick}
        index={index}
        notifications={notifications}
        markThisUserNotificationsAsRead={markThisUserNotificationsAsRead}
      />
    </Grid>
  ))}
</Box>

         
        </Grid>
       
        <Grid
          item
          xs={12}
          md={6}
          lg={9}
          sx={{
            width: '100%',
  
            overflowY: 'auto',
            padding: '20px',
            marginTop: '40px',
          }}>
           {selectedItem !== null && <Avalibility user={user} currentChat={currentChat} />}
          
        </Grid>
      </Grid>
    );
  };

export default ResponsiveChat;