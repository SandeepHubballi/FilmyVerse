import React, { useState , useEffect } from 'react'
import ReactStars from 'react-stars'
import { Audio , ThreeDots } from 'react-loader-spinner'
import {getDocs} from 'firebase/firestore'
import { moviesRef } from './firebase/firebase'
import { Link } from 'react-router-dom'

const Cards = () => {
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
      async function getData() {
        setLoading(true)
        const _data = await getDocs(moviesRef)
        _data.forEach((doc)=>{
            setData((prv)=>[...prv, {...(doc.data()), id:doc.id}])
        })
         
        setLoading(false)
      }
      getData()
    }, [])
    
    return (
        <div className='boxes flex-wrap w-90'>
            
            <div className='flex flex-wrap justify-center px-3 mt-2'>
        { loading ? <div className='w-full flex justify-center items-center h-96'> <ThreeDots height={40} color="white"/></div> :
            data.map((e, i) => {
                return (
                 <Link to={`/detail/${e.id}`}> <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer m-3 transition-all duration-500'>
                        <img className='h-60 md-72' src={e.image} />
                        <h1>
                            <span className='text-gray-500'> Name :</span>{e.title}
                        </h1>
                        <h1 className='flex items-center'>
                            <span className='text-gray-500 m-1'> Rating :</span>
                            <ReactStars 
                                size={20}
                                half={true}
                                value={e.rating/e.rated}
                                edit={false}
                            />
                        </h1>
                        <h1>
                            <span className='text-gray-500'> Year : </span>{e.year}
                        </h1>
                    </div></Link>
                )
            })
        }
        </div>
           
        </div>
    )
}

export default Cards    