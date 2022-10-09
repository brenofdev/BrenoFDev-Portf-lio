import axios from 'axios';

export const sendContactMail = async (name, email, content) => {
  const data = {
    name,
    email,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}