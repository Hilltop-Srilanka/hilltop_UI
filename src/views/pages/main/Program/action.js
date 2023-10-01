import Axios from 'axios';

export const fetchPrograms = async () => {
  try {
    const response = await Axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/programs?sort=Date:DESC`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
