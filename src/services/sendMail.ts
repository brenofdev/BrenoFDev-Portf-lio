import axios from 'axios';

export const sendContactMail = async (name, email, content, number) => {
  const data = {
    name,
    email,
    content,
    number
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}