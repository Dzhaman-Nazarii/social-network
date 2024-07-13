import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { FC, MouseEvent, useEffect, useState } from 'react';
import { IMessage } from '../../../types';
import { db } from '../../..';
import { useAuth } from '../../providers/useAuth';
import { Box, Button, Container, List, ListItem, TextField, Typography } from '@mui/material';

export const Messages: FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      const updatedMessages: IMessage[] = [];
      snapshot.forEach((doc) => {
        updatedMessages.unshift(doc.data() as IMessage);
      });
      setMessages(updatedMessages);
    });

    return () => {
      unsub();
    };
  }, []);

  const addMessageHandler = async (evt: MouseEvent<HTMLButtonElement>) => {
    if (user && message.trim()) {
      try {
        await addDoc(collection(db, "messages"), {
          user,
          message,
          createdAt: new Date(),
        });
        setMessage('');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Messages
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <List sx={{ maxHeight: '400px', overflow: 'auto', marginBottom: 2 }}>
        {messages.map((item, index) => (
          <ListItem key={index}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                <strong>{item.user.name}:</strong> {item.message}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button sx={{width: '70px', height: '55px'}} variant="contained" color="primary" onClick={addMessageHandler}>
          Send
        </Button>
      </Box>
    </Container>
  );
};
