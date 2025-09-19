import React from 'react'

function InfoBox() {
  return (
    <div>
        <div className="grid grid-cols-3 w-50% gap-6 mb-12 mt-12" >
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            {/* <h3 className="text-gray-400 mb-2">Total Claimed</h3>
            <p className="text-2xl font-bold">1,234,567 TKN</p> */}
            <img src='https://www.newsbtc.com/wp-content/uploads/2025/02/sol_69ab3a.jpg?fit=860%2C573'></img>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            {/* <h3 className="text-gray-400 mb-2">Participants</h3>
            <p className="text-2xl font-bold">45,678</p> */}
                <h3 className="text-gray-400 mb-2">Total Claimed</h3>
                <p className="text-2xl font-bold">1,234,567 TKN</p>
     
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            {/* <h3 className="text-gray-400 mb-2">Time Remaining</h3>
            <p className="text-2xl font-bold flex items-center gap-2"> */}
            <img src='https://tse2.mm.bing.net/th/id/OIP.jVSPW8k40-X2TVDgFdpVkgHaEd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'></img>
              {/* <Clock size={24} /> */}
              {/* 48h 32m */}
            {/* </p> */}
          </div>
        </div>
    </div>
  )
}

export default InfoBox
