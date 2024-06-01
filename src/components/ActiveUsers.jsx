import React from 'react'
import Leaderboard from './Leaderboard'

const ActiveUsers = () => {
  const users = [
    { name: 'Alice', score: 150 },
    { name: 'Bob', score: 120 },
    { name: 'Charlie', score: 100 },
    { name: 'David', score: 90 },
    { name: 'Eve', score: 80 }
  ]

  return (
    <div className='absolute right-0 text-white'>
      <Leaderboard users={users} />
    </div>
  )
}

export default ActiveUsers
