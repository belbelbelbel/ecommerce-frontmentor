import React, { useState } from 'react'
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
            !selectedimages ? (<div><img src="image-product-1.jpg" alt="" width="418px" height="450px" /></div>) : (<div><img src={selectedimages} alt="fswd" width="418px" height="450px" tabindex="0"/></div>)
          }
        </div>
        <div className='container_women2b'>
          <img src="image-product-1.jpg" alt="wefewf" width="90px" tabindex="0" onClick={()=>handleclick("image-product-1.jpg")}/>
          <img src="image-product-2.jpg" alt="wefeww" width="90px" tabindex="0"  onClick={()=>handleclick("image-product-2.jpg")}/>
          <img src="image-product-3.jpg" alt="wefewt" width="90px" tabindex="0" onClick={()=>handleclick("image-product-3.jpg")}/>
          <img src="image-product-4.jpg" alt="wefewy" width="90px" tabindex="0" onClick={()=>handleclick("image-product-4.jpg")}/>
        </div>
      </div>
    </div>
  )
}
<img src="image-product-1.jpg" alt="" width="418px" height="450px" />