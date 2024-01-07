"use client"
import AdminNavbar from '@/components/shared/adminSide/AdminNavbar'
import AdminSidebar from '@/components/shared/adminSide/AdminSidebar';
import { authRequired } from '@/store/actions/adminActions/adminActions';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConfimationModal from '@/components/Modals/ConfimationModal';

const AddCategory = () => {
    const dispatch: any = useDispatch();
    const router = useRouter()

    useEffect(() => {
        dispatch(authRequired(router))
    }, [])

    type checkBoxData = {
        label: string;
        options: string;
    }
    type radioButtonData = {
        label: string;
        options: string;
    }

    const [inputFields, setInputFields] = useState<string[]>([]);
    const [checkBoxFields, setCheckBoxFields] = useState<checkBoxData[]>([]);
    const [radioButtonFields, setRadioButtonFields] = useState<radioButtonData[]>([]);

    const addInputField = () => {
        setInputFields([...inputFields, '']);
    };

    const addCheckBoxField = () => {
        setCheckBoxFields([...checkBoxFields, { label: '', options: '' }])
    }

    const addRadioButtonField = () => {
        setRadioButtonFields([...radioButtonFields, { label: '', options: '' }])
    }

    const handleInputFieldChange = (index: number, value: any) => {
        const updatedInputFields: any = [...inputFields];
        updatedInputFields[index] = value;
        setInputFields(updatedInputFields);
    };

    const handleCheckBoxFieldChange = (index: number, fieldKey: keyof checkBoxData, value: string) => {
        const updatedCheckBoxFields = [...checkBoxFields];

        if (fieldKey === 'options') {
            updatedCheckBoxFields[index][fieldKey] = value;
        } else {
            updatedCheckBoxFields[index][fieldKey] = value;
        }

        setCheckBoxFields(updatedCheckBoxFields);
    };

    const handleRadioButtonFieldChange = (index: number, fieldKey: keyof radioButtonData, value: string) => {
        const updatedRadioButtonFields = [...radioButtonFields];

        if (fieldKey === 'options') {
            updatedRadioButtonFields[index][fieldKey] = value;
        } else {
            updatedRadioButtonFields[index][fieldKey] = value;
        }

        setRadioButtonFields(updatedRadioButtonFields);
    };

    return (
        <>
            <button type="button" onClick={() => {
                console.log(radioButtonFields)
                console.log(checkBoxFields)
                console.log(inputFields);

            }}>yes it</button>
            <div className="flex justify-between w-full">
                <h1 className='text-xl p-3'>Categories</h1>
            </div>
            <div className="lg:w-1/2 md:w-full p-3">
                {/* <form action="/admin/add-category" method="post"> */}
                <div className="mb-4">
                    <div className="flex justify-between">
                        <label htmlFor="CategoryName" className="block text-center text-sm font-semibold text-gray-600">New Category name:</label>
                        <button type="submit" className="bg-slate-950 text-white py-1 px-4 rounded">
                            Add Category
                        </button>
                    </div>
                    <input
                        type="text"
                        name="CategoryName"
                        className="p-2 border mt-1 block w-full rounded-md bg-light"
                        placeholder="Enter new category name"
                    />
                </div>
                <label htmlFor="CategoryName"
                    className="block text-center text-md mb-2 font-semibold text-slate-600">
                    Add special fields required for this category
                </label>
                <div className="w-full flex justify-between">
                    <button
                        type="button"
                        className="bg-slate-600 rounded-md p-2 text-white"
                        onClick={addInputField}>
                        Add Input Field
                    </button>
                    <button
                        type='button'
                        className='bg-slate-600 rounded-md p-2 text-white'
                        onClick={addCheckBoxField}>
                        Add Check box Field
                    </button>
                    <button
                        type='button'
                        className='bg-slate-600 rounded-md p-2 text-white'
                        onClick={addRadioButtonField}>
                        Add Radio button Field
                    </button>
                </div>
                {inputFields.length > 0 && <h1 className='text-xl mt-4'>Input Field names</h1>}
                {inputFields.map((field, index) => (
                    <div key={index}>
                        <h1 className='text-xl mt-4'>{index + 1}.</h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                name={`inputField${index}`}
                                value={field}
                                onChange={(e) => handleInputFieldChange(index, e.target.value)}
                                className="p-2 border mt-1 block w-full rounded-md bg-light"
                                placeholder={`Enter input field name`}
                            />
                        </div>
                    </div>
                ))}
                {checkBoxFields.length > 0 && <h1 className='text-xl mt-4'>Check box fields</h1>}
                {checkBoxFields.map((field, index) => (
                    <div key={index}>
                        <h1 className='text-xl mt-4'>{index + 1}.</h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                name={`checkboxlabel${index}`}
                                value={field.label}
                                onChange={(e) => handleCheckBoxFieldChange(index, 'label', e.target.value)}
                                className="p-2 border mt-1 block w-full rounded-md bg-light"
                                placeholder={`Enter label name for checkbox field`}
                            />
                            <input
                                type="text"
                                name={`checkboxoptions${index}`}
                                value={field.options}
                                onChange={(e) => handleCheckBoxFieldChange(index, 'options', e.target.value)}
                                className="p-2 border mt-1 block w-full rounded-md bg-light"
                                placeholder={`Enter checkbox field options separated by comma`}
                            />
                        </div>
                    </div>
                ))}
                {radioButtonFields.length > 0 && <h1 className='text-xl mt-4'>Radio Button fields</h1>}
                {radioButtonFields.map((field, index) => (
                    <div key={index}>
                        <h1 className='text-xl mt-4'>{index + 1}.</h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                name={`checkboxlabel${index}`}
                                value={field.label}
                                onChange={(e) => handleRadioButtonFieldChange(index, 'label', e.target.value)}
                                className="p-2 border mt-1 block w-full rounded-md bg-light"
                                placeholder={`Enter label name for radio button field`}
                            />
                            <input
                                type="text"
                                name={`checkboxoptions${index}`}
                                value={field.options}
                                onChange={(e) => handleRadioButtonFieldChange(index, 'options', e.target.value)}
                                className="p-2 border mt-1 block w-full rounded-md bg-light"
                                placeholder={`Enter radio field options separated by comma`}
                            />
                        </div>
                    </div>
                ))}
                {/* </form> */}
            </div>
            <ConfimationModal
                afterConfirmation={'blockOneUser'}
                isModalOpen={false}
                setModalOpen={'setModalOpen'}
            />
        </>
    )
}

export default AddCategory;