import { apiUrl } from "@/lib/apiUrl";
import { fetchData } from "@/lib/fetchData";
import { NextResponse } from "next/server";
const urlApi = `${apiUrl}/users`;
export async function GET(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Access the dynamic `id` from the route params

  const url = `${urlApi}/${id}`; // Build the URL using the dynamic `id`
  try {
    const data = await fetchData(url, "GET"); // Call fetchData to get user data
    return NextResponse.json(data); // Return the data as a JSON response
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { message: "Error fetching user data" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Access the dynamic `id` from the URL
  const url = `${urlApi}/${id}`; // URL to create a post for the user

  try {
    const body = await request.json(); // Parse the incoming request body (e.g., post data)
    const response = await fetchData(url, "POST", body); // Send POST request to create the post
    return NextResponse.json(response); // Return the response as JSON
  } catch (error) {
    console.error("Error creating post for user:", error);
    return NextResponse.json(
      { message: "Error creating post for user" },
      { status: 500 }
    );
  }
}
// Handle PUT request to update user by ID
export async function PUT(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Access the dynamic `id`
  const url = `${urlApi}/${id}`; // Build the URL using the dynamic `id`

  try {
    const body = await request.json(); // Parse the incoming request body
    const response = await fetchData(url, "PUT", body); // Send PUT request with body data
    return NextResponse.json(response); // Return the response as JSON
  } catch (error) {
    console.error("Error updating user data:", error);
    return NextResponse.json(
      { message: "Error updating user data" },
      { status: 500 }
    );
  }
}

// Handle DELETE request to delete user by ID
export async function DELETE(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Access the dynamic `id`
  const url = `${urlApi}/${id}`; // Build the URL using the dynamic `id`

  try {
    const response = await fetchData(url, "DELETE"); // Send DELETE request
    return NextResponse.json(response); // Return the response as JSON
  } catch (error) {
    console.error("Error deleting user data:", error);
    return NextResponse.json(
      { message: "Error deleting user data" },
      { status: 500 }
    );
  }
}
