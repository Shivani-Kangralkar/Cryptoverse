import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = { 
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};



const createRequest =(url) => ({ url , headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducePath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_CRYPTO_API_URL}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails : builder.query({
            query:(uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory : builder.query({
            query: ({ uuid, timeperiod }) => createRequest(`coin/${uuid}/history?timeperiod=${timeperiod}`),
        }),
    })
});

export const {useGetCryptosQuery , useGetCryptoDetailsQuery ,useGetCryptoHistoryQuery } =cryptoApi



// var options = {
//     method: 'GET',
//     url: 'https://coinuuiding1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinuuiding1.p.rapidapi.com',
//       'x-rapidapi-key': '3158b8c761msh631832310271f9ep140708jsncdfbb88edb39'
//     }
//   };