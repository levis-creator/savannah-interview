import AlbumCard from "@/components/album-card";
import { publicApiUrl } from "@/lib/apiUrl";
import { fetchData } from "@/lib/fetchData"
import { AlbumDto, PhotoDto } from '@/lib/types';
import Link from "next/link";
import { ArrowLeft } from "react-feather";

const Page = async({
    params,
  }: {
    params: Promise<{ id: string }>
 } ) => {
    const {id}=await params
    const userData:AlbumDto[] = await fetchData(`${publicApiUrl}/users/${id}/albums`, "GET") as AlbumDto[]
    const albumDto = await Promise.all(
        userData.map(async (album) => {
          // Fetch photos for each album
          const photos:PhotoDto[] = await fetchData(`${publicApiUrl}/albums/${album.id}/photos`, "GET") as PhotoDto[]
         
          // Return the album with the featured photo URL
          return { ...album, featuredPhoto: photos[0]?.url ?? '' } as AlbumDto;
        })
      );
  return (
    <div className="container mx-auto px-4 md:px-24 pt-10">
        <div className="flex gap-2 pb-4">
            <Link href="/home"><ArrowLeft/></Link>
        <h2 className="font-bold text-xl">Albums</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {
                albumDto.map((data, i)=>(
                    <AlbumCard href={`/home/users/${id}/${data.id}`} key={i} data={data}/>
                ))
            }
        </div>
    </div>
  )
}

export default Page