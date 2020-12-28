import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_item/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCENqcI3uk8D6zgAjjCFhGTeUxEnCo2eIM',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));

    console.log('useEffect');
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
