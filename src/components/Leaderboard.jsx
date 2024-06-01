import React from 'react'

const Leaderboard = ({ users }) => {
  return (
    <div 
    className='absolute right-0 text-white p-4 rounded-lg shadow-lg'
    style={{bottom: '0px', width: '265px'}}
    >
      <h1 className='text-xl font-bold mb-4'>Most Active Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className='flex justify-between items-center mb-4'>
            <span className='font-medium'>{index + 1}. {user.name}</span>
            <span className='bg-blue-500 text-white py-2 px-3 rounded-lg'>{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Leaderboard
