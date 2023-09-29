/**
 *  @file operator_factory.js
 */ 
import { useState, useEffect } from 'react';
import dataOperatorFunctions from './data_operator_functions';

/**
 * Custom hook to fetch and manage data operators based on the provided data type.
 * @param {string} dataType - The type of data operators to fetch.
 * @returns {object} - An object containing data operators, loading state, and error state.
 */
const useDataOperators = (dataType) => {
  // State variables to hold data operators, loading state, and error state
  const [dataOperators, setDataOperators] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Factory function to create the appropriate data operator based on the data type.
   * @returns {function} - The data operator function.
   * @throws {Error} - If the provided data type is invalid.
   */
  const operatorFactory = () => {
    const dataRetriever = dataOperatorFunctions[dataType]; // Use dataOperatorFunctions here
    
    if (dataRetriever) {
      return dataRetriever;
    } else {
      throw new Error(`Invalid data type: ${dataType}`);
    }
  };

  /**
   * Fetch data operators and update state accordingly.
   * @returns {void}
   */
  const fetchDataOperators = async () => {
    setIsLoading(true);

    try {
      const dataRetriever = operatorFactory();
      const result = await dataRetriever();
      setDataOperators(result);
      setError(null);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  // Fetch data operators when dataType changes
  useEffect(() => {
    fetchDataOperators();
  }, [dataType]);

  // Return an object containing data operators, loading state, and error state
  return {
    data: dataOperators,
    isLoading,
    error
  };
};

export default React.memo(useDataOperators);
