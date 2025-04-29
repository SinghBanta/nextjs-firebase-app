"use client";

import { Button, Typography, Box } from '@mui/material';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <Typography variant="h5">Welcome {user.displayName}</Typography>
      ) : (
        <>
          <Typography variant="h4">Login</Typography>
          <Button variant="contained" onClick={signInWithGoogle} sx={{ mt: 2 }}>
            Sign in with Google
          </Button>
        </>
      )}
    </Box>
  );
}
