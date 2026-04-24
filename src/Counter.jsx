import { useState } from 'react';

const Count = () => {

    const [count, setCount] = useState(2);
    return (
        <div className='p-5 max-w-md mx-auto bg-gray-300 rounded-lg shadow-xl'>
            <h2 className='text-2xl font-bold mb-4 text-center'>カウンター</h2>
            <div className='text-4xl font-bold text-center mb-6 text-blue-600'>{count}</div>
            <div className='flex gap-4 justify-center'>
                <button className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700' onClick = {() => setCount(count+1)}>梅よ</button>
                <button className='bg-red-500 text-white px-6 py-3 rounded hover:bg-red-700' onClick = {() => setCount(count-1)}>少子</button>
            </div>
        </div>
    )
}

export default Count;