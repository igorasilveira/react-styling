import React from 'react'

export default function Card() {
    return (
        <div className="bg-white rounded-md w-1/3 shadow-xl px-3 py-5 m-4 flex flex-row">
            <div className="flex-none">
                <img src="avatar.png" className="h-28 w-28"/>
            </div>
            <div className="p-3">
                <p className="font-bold text-lg text-blue-500">Jhon Snow</p>
                <span className="font-normal text-base text-gray-700 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    )
}
