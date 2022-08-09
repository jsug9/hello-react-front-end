import axios from 'axios';

const getGreeting = async () => {
  const response = await axios.get('http://localhost:3000/v1/greetings');
  return response.data;
};

export default getGreeting;