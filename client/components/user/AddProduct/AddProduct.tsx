import Navbar from '@/components/shared/userSide/Navbar'
import React from 'react'

const AddProduct = () => {
    return (
        <>
            <Navbar />
            <div className="w-full justify-between px-12 bg-slate-50 mt-2 min-h-screen">
                <div className="sm:w-full lg:w-1/2">
                    <label htmlFor="CategoryName" className="block text-md font-semibold text-gray-600">Product name:</label>
                    <input
                        type="text"
                        name="CategoryName"
                        className="p-2 border mt-1 block w-full rounded-md bg-light"
                        placeholder="Enter new category name"
                    />
                </div>
                <div className="sm:w-full md:w-1/2 lg:w-1/2">
                    <label htmlFor="CategoryName" className="text-md font-semibold text-gray-600">Select category:</label>
                    <input
                        type="text"
                        name="CategoryName"
                        className="p-2 border mt-1 w-full rounded-md bg-light"
                        placeholder="Enter new category name"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="CategoryName" className="block text-md font-semibold text-gray-600">Write Discription:</label>
                    <input
                        type="text"
                        name="CategoryName"
                        className="p-2 border mt-1 block w-full rounded-md bg-light"
                        placeholder="Enter new category name"
                    />
                </div>
            </div>
        </>
    )
}

export default AddProduct