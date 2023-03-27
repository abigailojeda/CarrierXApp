import axios from 'axios';

//to do : use this API connection
class parcelsApi {
  BaseUrl = '';

  instance = axios.create({
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  getParcelsList = async () => {
    return await this.instance.get(this.BaseUrl);
  };

  isAxiosError = error => axios.isAxiosError(error);

  get = async path => {
    return await this.instance.get(`${path}`);
  };
}

export default parcelsApi;
