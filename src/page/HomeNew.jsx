import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from './../axios/axios'


const Homenew = () => {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        client.get('/list/projects').then(function (response) {
            console.log(response.data)
            setProjects(response.data.data)
            }).catch (function(error) {
             console.log(error);
             alert("data tidak ditemukan");
    
        })
    }, [])


    console.log('ini adalah data dari be', projects)

    


    return (
    <>
        <div>
            <div className="lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto  mb-6">
            
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-4xl font-semibold title-font mb-2.5 text-gray-800"><span className="text-pink-400">#Rangkul</span>Mereka</h1>
                    <p className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-gray-600">Bantu Mereka agar bisa sekolah dan meraih cita cita nya</p>
                </div>


                <div className="flex lg:flex-row flex-col -m-4 mt-12">

                    {projects ? 
                        projects.map((item, index) => {
                            return (
                            <>
                            <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
                        <div>
                            <div class="rounded-lg overflow-hidden bg-white shadow-xl">
                                <div className="relative overflow-hidden pb-60">
                                    <img
                                        className="absolute h-full w-full object-cover object-center"
                                        src={`${item.image}`}
                                        alt=""
                                    />
                                </div>

                                <div class="relative ">
                                    <div class="py-6 px-4">
                                        <h1 class="text-2xl font-bold text-grey-800">{item ? item.project_name : ''}</h1>
                                        <div className="mt-2 mb-2">
                                            <div className="">
                                                <span className="text-2xl font-bold text-blue-400 ">Rp. {new Number(item.current_amount).toLocaleString('id-ID')}</span>
                                                <span className="px-2 text-grey-100 text-md font-light">Terkumpul Dari {new Number(item.goal_amount).toLocaleString('id-ID')}</span>
                                            </div>
                                        </div>

                                        <div className="relative pt-2">
                                            <div className="overflow-hidden  mb-4 text-xs flex rounded-lg bg-gray-200 h-2">
                                                <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-400 h-4"></div>
                                            </div>
                                        </div>

                                        <div className="flex lg:flex-row flex-col -m-4 mt-2 mb-2">
                                            <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto">
                                            <h3 class="text-2xl font-bold text-gray-800">100  <span className="text-sm font-light text-black-200 ">Donasi</span></h3>
                                            </div>
                                            <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto text-right">
                                            <h3 className="text-2xl font-bold text-gray-800">23  <span className="text-sm font-light text-black-200 ">Hari lagi</span></h3>
                                            </div>
                                        </div>

                                        <button className="font-semibold text-white text-base w-full rounded-lg py-3 my-6 px-8 mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-pink-400">Donasi Sekarang!</button>
                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </>
                            )
                        })
                     : 'Data tidak ada'}
                    
                    
                   
                    
                    
                </div>
            </div>
        </div> 
    </>
    )
}

export default Homenew // bisa dipake diluar