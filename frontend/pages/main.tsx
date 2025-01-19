import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';
import AudioPlayer from '../components/AudioPlayer';
import parseUserPayload from '../utils/token';

interface Track {
  id: number;
  title: string;
  artist: string;
  url: string;
}

export default function MainPage() {
  const router = useRouter();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      const userPayload = parseUserPayload(token)
      if (userPayload) {
        setEmail(userPayload.email)
      }
      // Fetch tracks
      api.get('/tracks')
        .then(res => {
          setTracks(res.data);
        })
        .catch(() => {
          // If token is invalid, redirect to login
          localStorage.removeItem('token');
          router.push('/login');
        });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div style={{ margin: '2rem auto', maxWidth: 400 }}>
      <h1>Welcome to Audio Player, {email}</h1>
      <button onClick={handleLogout} style={{ marginBottom: '1rem' }}>
        Logout
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tracks.map(track => (
          <li
            key={track.id}
            style={{
              margin: '0.5rem 0',
              cursor: 'pointer',
              color: currentTrack?.id === track.id ? 'blue' : 'inherit'
            }}
            onClick={() => setCurrentTrack(track)}
          >
            {track.title} by {track.artist}
          </li>
        ))}
      </ul>

      {currentTrack && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Now Playing: {currentTrack.title} by {currentTrack.artist}</h2>
          <AudioPlayer url={currentTrack.url}/>
        </div>
      )}
    </div>
  );
}