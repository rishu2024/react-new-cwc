import React from 'react'

function Cards({ username, btntxt = 'visit me' }) {
    console.log(username, btntxt);

    return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
            <h1 className="bg-green-400 text-black p-4 rounded-xl text-center mb-4">tailwind test</h1>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
                <img
                    src="https://images.pexels.com/photos/36333018/pexels-photo-36333018.jpeg"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
                            tempora ipsum soluta amet corporis accusantium aliquid consectetur
                            eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                        {btntxt}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
