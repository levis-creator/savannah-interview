"use client"
import React, { useState } from 'react'
import { Edit, X } from 'react-feather'
import AlbumImage from './album-photo';
import Input from './forms/input';
import { PhotoDto } from '@/lib/types';
import Alert from './alert';

const EditModal = ({ data }: { data: PhotoDto }) => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert]=useState<{ message: string, open:boolean}>({
        message:"",
        open:false
    })
    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSubmit=()=>{
        setAlert((data)=>({...data,message:"Unfortunately the Api does not supply with PUT/PATCH request for this to work", open:true }))
    }

    return (
        <>
            <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={openModal}>
                    <Edit />
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <form
                    id="static-modal"
                    data-modal-backdrop="static"
                    tabIndex={-1}
                    aria-hidden={!isModalOpen}
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full bg-white dark:bg-gray-700 rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Editing photo
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={closeModal}
                            >
                                <X />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4">
                            {alert.open&&(
                            <Alert message={alert.message} />
                            )}
                            <div className="flex flex-col justify-center items-center">
                                <AlbumImage className="rounded-t-lg w-full h-56 object-cover" src={data.url} alt=''/>
                            </div>
                            <div>
                                <Input name='title' id='title' value={data.title} label='Edit title' />
                            </div>
                        </div>

                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Save
                            </button>
                            <button
                                onClick={closeModal}
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            )}

        </>
    )
}

export default EditModal
