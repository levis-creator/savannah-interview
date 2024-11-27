/**
 * fetchData function to handle versatile HTTP requests.
 * @param {string} url - The URL for the request.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE, etc.).
 * @param {object} params - Optional parameters or body data for the request (only for POST, PUT, DELETE).
 * @param {Record<string, string>} headers - Optional headers for the request.
 * @returns {Promise<unknown>} - A promise that resolves to the response data of an unknown type.
 */
export async function fetchData(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    params: Record<string, any> = {},
    headers: Record<string, string> = {}
  ): Promise<unknown> {
    const options: RequestInit = {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        ...headers,  // Merge custom headers if provided
      },
    };
  
    // Add body data for POST, PUT, DELETE methods
    if (['POST', 'PUT', 'DELETE'].includes(options.method as string) && Object.keys(params).length > 0) {
      options.body = JSON.stringify(params);  // Convert params to JSON string
    }
  
    try {
      const response = await fetch(url, options);
  
      // Check for HTTP success
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse and return the JSON response
      const data = await response.json();
      return data;  // Return the data (of unknown type)
    } catch (error) {
      console.error('Fetch error: ', error);
      throw error;  // Re-throw the error
    }
  }
  