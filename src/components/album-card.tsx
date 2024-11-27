import placeholder from '@/assets/placeholder.jpg'
import { AlbumDto } from '@/lib/types'
import { ArrowDownRight } from 'react-feather'
import AlbumImage from './album-photo'
import Link from 'next/link'

const AlbumCard = ({data, href}:{data:AlbumDto, href:string}) => {
  return (
    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <AlbumImage className="rounded-t-lg w-full h-56 object-cover" src={data.featuredPhoto} unoptimized alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </a>
        <Link href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           View photos
             <ArrowDownRight/>
        </Link>
    </div>
</div>

  )
}

export default AlbumCard