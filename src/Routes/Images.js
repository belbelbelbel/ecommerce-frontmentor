import React, { useState } from 'react'
  export const imgArray = [
    {
      src: "/image-product-1.jpg",
      id: 1
    },
    {
      src: "/image-product-2.jpg",
      id: 2
    },
    {
      src: "/image-product-3.jpg",
      id: 3
    },
    {
      src: "/image-product-4.jpg",
      id: 4
    }
  ]
export const Images = () => {
  const [selectedimages, setSelectedimages] = useState()
  const handleclick = (images) => {
    setSelectedimages(images)
  }

  return (
    <div>
      <div className='container_women2'>
        <div className='container_women2a'>
          {
            !selectedimages ? (<div><img src="image-product-1.jpg" alt="" width="418px" height="450px" /></div>) : (<div><img src={selectedimages} alt="fswd" width="418px" height="450px" tabindex="0" /></div>)
          }
        </div>
        <div className='container_women2b'>
          {
            imgArray.map((imgArrays) => (
              <div>
                <img src={imgArrays.src} width="90px" alt={imgArrays.id + 1} onClick={() => handleclick(imgArrays.src)} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
<img src="image-product-1.jpg" alt="" width="418px" height="450px" />