"use client"
import { authRequired, changeCategoryStatus } from '@/store/actions/adminActions/adminActions';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiUnlock, FiLock } from 'react-icons/fi';
import { FaSlidersH } from 'react-icons/fa';
import ConfimationModal from '@/components/Modals/ConfimationModal';
import Link from 'next/link';

const Categories = () => {
  const dispatch: any = useDispatch();
  const router = useRouter()
  const [modalState, setModalState] = useState(false);
  const [categoryId, setCategoryId] = useState<string>('');

  useEffect(() => {
    dispatch(authRequired(router))
  }, [])

  const changeStatus = () => {
    console.log('called for change status');
    dispatch(changeCategoryStatus({ categoryId, setModalState }))
  }

  return (
    <>
      <div className="flex justify-between w-full">
        <h1 className='text-xl p-3'>Categories</h1>
        <Link
          href={'/admin/categories/add-category'}
          className='bg-slate-950 flex justify-center items-center text-white rounded-md px-3 h-10'>
          Add Category
        </Link>
      </div>
      {/*  */}
      <div className="w-full flex justify-end px-3">

        {/* dropdown button */}
        <div>
          <button
            // onClick={}
            type="button"
            className="inline-flex"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <FaSlidersH className='flex items-center' />
          </button>
        </div>
        {/* dropdown button end */}
        {/* dropdown item one */}
        {/* <div
              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="cursor-pointer">
                <button
                  // onClick={}
                  className="block px-4 py-2 text-sm text-red-600">
                  
                </button>
              </div>
            </div> */}
        {/* item one ends here */}
      </div>
      <table className="table border w-full overflow-scroll ms-2 ps-2">
        <thead>
          <tr>
            <th className="border text-center">Category Name</th>
            <th className="border text-center">Active Status</th>
            <th className="border text-center">Edit Category</th>
            <th className="border text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {categori} */}
          <tr key='l'>
            <td className="border text-center"></td>
            <td className="border text-center"></td>
            <td className="border text-center"></td>
            <td className="border flex justify-center items-center p-2">
              <button
                onClick={() => {
                  setModalState(true)
                  setCategoryId('categoryId')
                }}
              >
                <FiLock
                />
              </button>
              <button
                onClick={() => {
                  setModalState(true)
                  setCategoryId('helloo')
                }}
              >
                <FiUnlock />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <ConfimationModal
        afterConfirmation={changeStatus}
        isModalOpen={modalState}
        setModalOpen={setModalState}
      />
    </>
  )
}

export default Categories;