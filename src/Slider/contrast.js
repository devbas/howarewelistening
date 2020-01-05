import React from 'react'

const Contrast = ({ 
  danceability, 
  acousticness 
}) => {

  const totalPolygonWidth = 1000 
  const maxPoints = 200
  const pointAmount = danceability.length 
  const pointRatio = pointAmount / maxPoints
  let j = 0 

  let danceabilityPointBucket = []
  let danceabilityPolygonPoints = []
  let acousticnessPointBucket = []
  let acousticnessPolygonPoints = []

  for(let i = 0; i < pointAmount; i++) {
    if(j > pointRatio) {

      const danceabilitySum = danceabilityPointBucket.reduce((previous, current) => current += previous)
      const danceabilityAvg = danceabilitySum / danceabilityPointBucket.length

      danceabilityPolygonPoints.push(
        (danceabilityPolygonPoints.length * totalPolygonWidth) / maxPoints,  // X
        danceabilityAvg * 100 // Y
      )
      danceabilityPointBucket = []

      const acousticnessSum = acousticnessPointBucket.reduce((previous, current) => current += previous)
      const acousticnessAvg = acousticnessSum / acousticnessPointBucket.length

      acousticnessPolygonPoints.push(
        (acousticnessPolygonPoints.length * totalPolygonWidth) / maxPoints,  // X
        acousticnessAvg * 100 // Y
      )
      acousticnessPointBucket = []

      i++
      j = 0
    } else {
      acousticnessPointBucket.push(acousticness[i])
      danceabilityPointBucket.push(danceability[i])
      i++ 
      j++
    } 
  }

  return (
    <svg width="1000px" height="100px" viewBox="0 0 1000 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.2">
        <g id="Artboard" transform="translate(-162.000000, -17.000000)">
          <g id="Group" transform="translate(162.000000, 17.000000)">
            <polygon id="acousticness" fill="#C84B54" points={`0 100 ${acousticnessPolygonPoints.join(' ')} 1000 100`}></polygon>
            <polygon id="danceability" fill="#CD9339" points={`0 100 ${danceabilityPolygonPoints.join(' ')} 1000 100`}></polygon>
            {/* <polygon id="danceability" fill="#CD9339" points="
              0 0 
              530.626525 0 
              1000 0 
              1000 1 
              0 1
            "></polygon> */}
            {/* <polygon id="energy" fill="#CD9339" points="0 99 465.2345 99 612.565577 99 1115 99 1115 335 0 335"></polygon> */}
            {/* <polygon id="instrumentalness" fill="#B3D5E1" points="0 156 466.276612 156 1115 156 1115 335 0 335"></polygon> */}
            {/* <polygon id="liveness" fill="#E49A4A" points="0 217 489.517682 217 1115 217 1115 335 0 335"></polygon> */}
            {/* <polygon id="loudness" fill="#49ACD0" points="0 276 509.868364 276 1115 276 1115 335 0 335"></polygon> */}
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Contrast