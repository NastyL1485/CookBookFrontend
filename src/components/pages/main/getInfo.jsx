import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data'); //Ссылка на конкретные данные (тип рецепт инфо)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Информация о пользователе: </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const app = ReactDOMClient.createRoot(document.getElementById("card1"))

app.render(<ExampleComponent />)

export default ExampleComponent;
