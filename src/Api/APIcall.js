import axios from 'axios';

const greetingRequest = async () => {
  const response = await axios.get('http://localhost:3000/v1/greetings');
  return response.data;
};

export default greetingRequest;
