import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 

  const fetchData = async (endpoint, query) => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: endpoint,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', 
        'Access-Control-Allow-Headers': 'Content-Type, Authorization', 
        'Content-Type': 'application/json',
      },
      params: { ...query },
    }

    try {
      const response = await axios.request(options);

      const pages = response.data.query.pages;
      for (const id in pages) {
        if (pages[id]?.extract) {
          setData(pages[id]?.extract);
          break;
        }
      } 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return { data, loading, error, fetchData };
}

export default useFetch;
