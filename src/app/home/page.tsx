import { publicApiUrl } from '@/lib/apiUrl'
import { fetchData } from '@/lib/fetchData'
import React from 'react'
import Avvvatars from 'avvvatars-react'
import Link from 'next/link';
interface UserDto{
  id:number;
  name:string;
  albums:number;
  email:string;
}
const Page = async () => {
  let usersWithAlbums:UserDto[] = [];
  let isLoading = true;

  try {
    const usersData: UserDto[] = await fetchData(`${publicApiUrl}/users`, "GET") as UserDto[];
    usersWithAlbums = await Promise.all(
      usersData.map(async (userDto) => {
        const albums = await fetchData(`${publicApiUrl}/users/${userDto.id}/albums`, "GET") as [];
        return { ...userDto, albums: albums.length };
      })
    );
    isLoading = false;
  } catch (error) {
    console.error('Error fetching data:', error);
    isLoading = false;
  }

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }
  return (
    <div className="container mx-auto px-4">
      <h2 data-testid="user-head" className='font-semibold text-2xl '>Users</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Albums
              </th>
            </tr>
          </thead>
          <tbody>
            {
              usersWithAlbums.map((data, i)=>(

            <tr  key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <Avvvatars value={`${data.name}`} size={80} style='shape' />              <div className="ps-3">
                  <div className="text-base font-semibold">{data.name}</div>
                  <div className="font-normal text-gray-500">{data.email}</div>
                </div>
              </th>
             
              <td className="px-6 py-4">
                <Link href={`home/users/${data.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{data.albums}</Link>
              </td>
            </tr>
              ))
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Page