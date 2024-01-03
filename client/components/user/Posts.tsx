import React from 'react'

const Posts = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 my-2 px-12">
                <div className=" h-60 inline-block cursor-pointer border p-2">
                    <div className="flex justify-center items-center">
                        <img
                            className="h-32 w-full object-center"
                            src=''
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="mt-2 text-lg font-bold">
                            &#x20B9; 23456
                        </p>
                        <span className="text-base">zxrtcfvgbn</span>
                        <p className="text-sm">zrxtcyvubinhvjbkn</p>
                    </div>
                    <div className="flex justify-end text-sm">
                        <span>zxrctvybuhn</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts