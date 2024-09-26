import axiosInstance from '../utils/axiosInstance'; // Make sure the path is correct

export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};
export const loginUser = async (userData) => {
  console.log(userData)
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};
