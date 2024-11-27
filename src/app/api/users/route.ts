import { apiUrl } from "@/lib/apiUrl";
import { fetchData } from "@/lib/fetchData";
import { NextResponse } from "next/server";
const url= `${apiUrl}/users`
export async function GET(request: Request) {
  try {
    const data = await fetchData(url, 'GET');  // Call fetchData without explicit type, since it is unknown
    return NextResponse.json(data);  // Return the data as JSON response
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
  }
}


// Handle POST requests
export async function POST(request: Request) {

  try {
    // Parse the request body (make sure it's valid JSON)
    const body = await request.json();
    
    // Call fetchData to send the POST request
    const response = await fetchData(url, 'POST', body); 
    
    return NextResponse.json(response);  // Return the response as JSON
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}
// Handle PUT requests (to update user data)
export async function PUT(request: Request) {

  try {
    // Parse the request body (ensure it's valid JSON)
    const body = await request.json();
    
    // Call fetchData to send the PUT request
    const response = await fetchData(url, 'PUT', body);
    
    return NextResponse.json(response);  // Return the response as JSON
  } catch (error) {
    console.error('Error updating user data:', error);
    return NextResponse.json({ message: 'Error updating user data' }, { status: 500 });
  }
}

// Handle DELETE requests (to delete a user)
export async function DELETE(request: Request) {

  try {
    // Optionally, you might extract parameters (e.g., user ID) from the request URL.
    // For example: const userId = new URL(request.url).searchParams.get('id');
    // Let's assume that the request body contains user info to delete (e.g., ID).
    
    const body = await request.json();  // Extract data from the request body
    
    // Call fetchData to send the DELETE request
    const response = await fetchData(url, 'DELETE', body);
    
    return NextResponse.json(response);  // Return the response as JSON
  } catch (error) {
    console.error('Error deleting user data:', error);
    return NextResponse.json({ message: 'Error deleting user data' }, { status: 500 });
  }
}