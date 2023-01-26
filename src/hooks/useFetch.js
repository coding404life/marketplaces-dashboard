import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (method, url, body) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState('');
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxLVR5aEhQVDZiSHNnWlY2ZWFFc0ZIcWRUMlRsSHRmakRHaEREWWtoUnNiRmxvOVlNZVM4OENzSmtUTXBjRnFWREgrdWZPdkt2Y2wwQU9IYzNnbEtpdEFaSE9zNmlvQjA1MTBPczZOTDQ9IiwiaXNzIjoicGF5LWZsb3ctc3Vic2NyaXB0aW9ucyIsImV4cCI6MTY3NzI0MzMzOSwiaWF0IjoxNjc0NjUxMzM5LCJqdGkiOiJiMmYzYTg4OWEzZGJkYTg0MWI0NjI4Y2EyYjQxZWZkZDI1YmI4NTEyOWVmMDk0MDQ1NmY4OTYzN2FkYzdkZjgzOGFmZDk5ZTc2OTRkNWUyNjM1ZTZkNGZkNmQzYTg2YzFlZTAxMmNkOTFjM2VlODBmN2Y4Nzk3ODBjYzU5ZTY1Yjg5ZmVmNzI3ODc4NzAyYWE2MWJlOGExMmFjZDY5MGU1NjI1MjEzYWI0YTU1ZmFiY2MyMmNkOGZhNjIxYjYzZmYwMzVmNWIxYzc4YWVjYzNlNzk2NGM3MTk5YzgxOTI0N2MyMTcxMWJmMjU3OTlmMDQxZTA0ZjljNzEzMzU4YmE3In0.89Hvah7VeVCdiQpbnS1XUo-vV2A20ewvJ1H68KpuXCY';

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url,
          data: body,
          headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
        });
        const data = await response?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setApiError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, apiError };
};

export default useFetch;
