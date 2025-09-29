import React from 'react'
import { TriangleAlert } from 'lucide-react';

interface Colors {
  color : string
}

const Warning : React.FC<Colors>= ({color}) => {
  return (
    <div className={`bg-${color}-400 relative pl-2 rounded-2xl`}>
      <div className={`bg-${color}-50 p-6 rounded-2xl `}>
        <div className='flex flex-row gap-3 '><TriangleAlert fill='orange'/><h5>Traffic congestion detected</h5></div>
        <p>High traffic volume on Main Street and 5th Avenue intersection. Traffic lights adjusted to optimize flow.</p>
        <p>Today at 08:45 AM</p>
      </div>
      
    </div>
  )
}

export default Warning
