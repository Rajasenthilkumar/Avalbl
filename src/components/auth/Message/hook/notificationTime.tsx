import React from 'react';

interface TimeAgoProps {
  timestamp: string; // Adjust the type according to the actual type of the timestamp
}

const getTimeDifference = (timestamp: any) => {
  const currentTime = new Date();
  const messageTime = new Date(timestamp);
  const difference = Math.abs(currentTime.getTime() - messageTime.getTime()) / 1000; // in seconds

  const intervals: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const interval in intervals) {
    const value = Math.floor(difference / intervals[interval as keyof typeof intervals]);
    if (value > 0) {
      return `${value} ${interval}${value !== 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
};

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  return <span>{getTimeDifference(timestamp)}</span>;
};

export default TimeAgo;
