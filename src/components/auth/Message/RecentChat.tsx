import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { useFetchRecipientUser } from './hook/useFetchReceipientUser';
import { useFetchLatestMessage } from './hook/useFetchLatestMessages';
import TimeAgo from './hook/notificationTime';
import { unreadMessages } from './hook/unreadMessages';

interface Chat {
  _id: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

interface ResponsiveChatProps {
  chat: Chat;
  user: UserType;
  notifications: any[];
  markThisUserNotificationsAsRead: any;
  selectedItem: number | null;
  onItemClick: (index: number) => void;
  index: number;
}

const RecentChat: React.FC<ResponsiveChatProps> = ({
  chat,
  user,
  notifications,
  selectedItem,
  onItemClick,
  index,
  markThisUserNotificationsAsRead,
}) => {
  const { recipientUser, error } = useFetchRecipientUser(chat, user);
  const [isLoading, setIsLoading] = useState(true);
  const [unreadNotifications, setUnreadNotifications] = useState<any[]>([]);

  const { latestMessage } = useFetchLatestMessage(chat);

  const allUnreadNotifications = unreadMessages(notifications);

  const thisUserNotifications = allUnreadNotifications?.filter((n: any) => n.senderId === recipientUser?._id);

  useEffect(() => {
    if (recipientUser) {
      setIsLoading(false);
      markThisUserNotificationsAsRead(thisUserNotifications, notifications);
      // Store unread notifications in state or local storage
      setUnreadNotifications(thisUserNotifications);
    }
  }, [recipientUser, thisUserNotifications]); // Call markThisUserNotificationsAsRead when recipientUser or notifications change

  useEffect(() => {
    // Update recent chats whenever a new notification arrives
    // Note: recentChats is not used in this implementation, so it's removed
  }, [notifications]); // Update recent chats when notifications change

  if (isLoading || !recipientUser) {
    return null;
  }

  if (error) {
    return <div>Error: {error.error}</div>;
  }

  const truncateText = (text: any) => {
    let shortText = text.substring(0, 20);
    if (text.length > 20) {
      shortText = shortText + '...';
    }
    return shortText;
  };

  return (
    <Grid
      container
      style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: selectedItem === index ? '0px' : '2px solid #d8d6e1',
        backgroundColor: selectedItem === index ? 'white' : '#F7F8F8',
        borderRadius: selectedItem === index ? '12px' : '0px',
      
      }}
      onClick={() => onItemClick(index)}>
      <Grid item xs={2}>
        <img
          src={recipientUser.profilePic}
          style={{
            width: '50px',
            height: '50px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '50%',
          }}
        />
      </Grid>
      <Grid item xs={4} style={{ margin: '8px' }}>
        <Typography variant="h6">{recipientUser.name}</Typography>
        <Typography>{latestMessage ? truncateText(latestMessage.text) : ''}</Typography>
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {unreadNotifications?.length > 0 && (
            <Badge
              badgeContent={unreadNotifications?.length}
              classes={{ badge: 'customBadge' }}
              style={{ marginBottom: '8px' }}
            />
          )}
          {latestMessage && (
            <Typography sx={{ fontSize: '13px' }}>
              {unreadNotifications?.length > 0 ? (
                <TimeAgo timestamp={unreadNotifications[0].timestamp} />
              ) : (
                <TimeAgo timestamp={latestMessage.createdAt} />
              )}
            </Typography>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default RecentChat;
