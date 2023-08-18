import React from 'react'

export default function Loading() {
  return (
      <div className='flex gap-2.5 mx-auto m-6'>
          <div className='w-3 h-3 bg-white rounded-full animate-highBounce '/>
          <div className='w-3 h-3 bg-white rounded-full animate-highBounce200'/>
          <div className='w-3 h-3 bg-white rounded-full animate-highBounce400'/>
    </div>
  )
}
