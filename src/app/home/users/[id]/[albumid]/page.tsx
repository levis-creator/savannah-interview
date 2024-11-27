import AlbumImage from '@/components/album-photo';
import { publicApiUrl } from '@/lib/apiUrl';
import { fetchData } from '@/lib/fetchData'
import { AlbumDto, PhotoDto } from '@/lib/types';
import Link from 'next/link';
import React from 'react'
import { ArrowLeft } from 'react-feather';

const Page = async ({
  params,
}: {
  params: Promise<{ albumid: string; id: string; }>
}) => {
  const { albumid, id } = await params
  const albumInfo: AlbumDto = await fetchData(`${publicApiUrl}/albums/${albumid}`, "GET") as AlbumDto;
  const albumPhotos: PhotoDto[] = await fetchData(`${publicApiUrl}/albums/${albumid}/photos`, "GET") as PhotoDto[]
  return (
    <div className='container mx-auto px-4 md:px-24 pt-10'>
      <div className="flex gap-2 pb-4">
        <Link href={`/home/users/${id}`}><ArrowLeft /></Link>
        <h2 className="font-bold text-xl">{albumInfo.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {
          albumPhotos.map((data, i) => (
            <div key={i}>
              <AlbumImage data={data} edit className="rounded-t-lg w-full h-56 object-cover" src={data.url} key={i} alt={data.title} priority={i < 5} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page