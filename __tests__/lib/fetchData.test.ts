import { fetchData } from '@/lib/fetchData';


global.fetch = jest.fn();  // Mock the global fetch function

describe('fetchData', () => {
  afterEach(() => {
    jest.clearAllMocks();  // Clear mock data after each test to prevent test interference
  });

  it('should make a GET request and return data', async () => {
    // Mock the fetch response for a successful GET request
    const mockResponse = { data: 'test' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchData('https://api.example.com/data', 'GET');

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', expect.objectContaining({
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }));
    expect(result).toEqual(mockResponse);
  });

  it('should make a POST request with params and return data', async () => {
    // Mock the fetch response for a successful POST request
    const mockResponse = { success: true };
    const params = { name: 'Test' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchData('https://api.example.com/data', 'POST', params);

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' },
    }));
    expect(result).toEqual(mockResponse);
  });

  it('should handle errors from the fetch call', async () => {
    // Mock the fetch response for a failed request (non-OK response)
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Internal Server Error' }),
    });

    try {
      await fetchData('https://api.example.com/data', 'GET');
    } catch (error: unknown) {
      // Type assertion to `Error`
      const typedError = error as Error;
      expect(typedError.message).toBe('HTTP error! status: 500');
    }
  });

  it('should throw an error if fetch fails', async () => {
    // Mock the fetch to throw an error (e.g., network failure)
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    try {
      await fetchData('https://api.example.com/data', 'GET');
    } catch (error: unknown) {
      // Type assertion to `Error`
      const typedError = error as Error;
      expect(typedError.message).toBe('Network error');
    }
  });

  it('should pass custom headers with the request', async () => {
    const mockResponse = { success: true };
    const customHeaders = { Authorization: 'Bearer token' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchData('https://api.example.com/data', 'GET', {}, customHeaders);

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', expect.objectContaining({
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...customHeaders },
    }));
    expect(result).toEqual(mockResponse);
  });
});
