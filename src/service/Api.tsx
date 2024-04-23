import rawData from './rawData.json';

const Api = {
  get: async () => {
    // const resp = await fetch(
    //   'https://k385gahq48.execute-api.ap-south-1.amazonaws.com/dev/market',
    // );
    // return resp.json();
    return Promise.resolve(rawData);
  },
};

export default Api;
