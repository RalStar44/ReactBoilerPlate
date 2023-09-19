import { useState, useEffect } from 'react';

const useData = (dataType) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    // Data retrieval functions for different types
    const retrieveDataA = async () => {
      // Data retrieval logic for type A
      // Make API calls, retrieve data, etc.
      // Return the fetched data
    };
  
    const retrieveDataB = async () => {
      // Data retrieval logic for type B
      // Make API calls, retrieve data, etc.
      // Return the fetched data
    };
  
    const retrieveDataC = async () => {
      // Data retrieval logic for type C
      // Make API calls, retrieve data, etc.
      // Return the fetched data
    };
  
    const dataRetrievalFunctions = {
      dataTypeA: retrieveDataA,
      dataTypeB: retrieveDataB,
      dataTypeC: retrieveDataC,
    };
    
    const dataFactory = () => {
      const dataRetriever = dataRetrievalFunctions[dataType];
    
      if (dataRetriever) {
        return dataRetriever;
      } else {
        throw new Error(`Invalid data type: ${dataType}`);
      }
    };
    

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const dataRetriever = dataFactory();
      const result = await dataRetriever();
      setData(result);
      setError(null);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [dataType]);

  return { data, isLoading, error };
};

export default useData;
