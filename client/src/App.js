import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const endpoint = 'http://localhost:1337';
const socket = socketIOClient(endpoint);

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    socket.on('FromAPI',data=>
    {
      console.log(data);
      setData(data);
    });
  }, [data])
  return (
    <div style={{ textAlign: "center" }}>
      {data
        ? <p>
          The temperature in Florence is: {data} °F
            </p>
        : <p>Loading...</p>}
    </div>
  );
}

export default App;
