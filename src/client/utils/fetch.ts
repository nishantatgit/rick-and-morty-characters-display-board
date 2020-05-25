import axios from 'axios';

const fetch = async (url: string, options?: any) => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      timeout: 10000,
    },
  };
  const fetchOptions = {
    ...defaultOptions,
    ...options,
    url,
  };

  console.log('fetchOptions', fetchOptions);
  const response = await axios(fetchOptions);
  return response;
};

export default fetch;
