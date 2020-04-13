import axios from 'axios';
const API_URL = 'https://type.fit/api/quotes';

/*
 * Method: POST
 * Desc: Get Quotes
 * Params:
 * */
export const GetQuoteList = async () =>
  axios({
    method: 'GET',
    url: `${API_URL}`,
  });
