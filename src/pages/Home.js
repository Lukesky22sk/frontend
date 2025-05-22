import { useEffect, useState } from 'react';
import { fetchData, postForm } from '../api';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData).catch(console.error);
  }, []);

  const handleSubmit = async () => {
    const formData = { name: 'Luke', message: 'Hello' };
    const response = await postForm(formData);
    console.log('Form response:', response);
  };

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleSubmit}>Send Form</button>
    </div>
  );
}
