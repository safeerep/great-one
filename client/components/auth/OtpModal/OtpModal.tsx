"use client"
import React from 'react';
import { MdClose } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import otpValidationSchema from '@/models/validationSchemas/user/otpSchema';
import { signUpCredentials } from '@/types/user';

interface ModalProps {
    isOpen: boolean;
    userData: signUpCredentials | null;
    onClose: () => void;
    onModalSubmit: (userData:signUpCredentials | null, otp: number) => void;
    modalError?: string; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onModalSubmit, userData, modalError}) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              <span className="text-xl flex justify-end pb-4 cursor-pointer" onClick={onClose}>
                <MdClose />
              </span>
              <Formik 
                initialValues={{ otp: '' }} 
                validationSchema={otpValidationSchema}
                onSubmit={(values) => {
                    onModalSubmit( userData, Number(values.otp));
                }}
              >
                <Form>
                {modalError && (
                  <div className="text-red-500 text-xs text-start w-full mb-2">{modalError}</div>
                )}
                  <label>
                    Enter OTP:
                    <Field
                      type="number"
                      name="otp"
                      className="w-full border border-gray-300 p-2 my-2 rounded-md"
                    />
                  </label>
                  <ErrorMessage name="otp" component="div" className="text-red-500 text-xs text-start w-full" />
  
                  <button
                    type="submit"
                    className="bg-gray-950 text-white px-4 py-2 my-4 rounded-md"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  

