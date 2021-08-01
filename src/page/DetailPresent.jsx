import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'
import client from './../service/axios'
import moment from 'moment';

const Detail = () => {
    const history = useHistory()
    const [projects, setProjects] = useState([])
    const [listdonasi, setListDonasi] = useState([])

    const {id} = useParams()

    console.log(id)

    let [data, setData] = useState({
        name: '',
        amount: 0
    })

    // tangkap nilai input yang di dalam form
    const handleFunction = (e) => {
      console.log(e.target.value)
      setData({
          ...data,
          [e.target.name] : e.target.value
      })

      console.log(data)
  }

  const getListDonasi = () => {
    client.get(`/list/projects/${id}`)
    .then (function (response) {
        console.log(response.data)
       setListDonasi(response.data.data.donations)
     
    }).catch (function(error) {
         console.log(error);
         alert("data tidak ditemukan");

    })
   }
  
   // masukkan nilai ke dalam redux melalui dispatch
   const tambahDonasi = () => {
       console.log('data yang dikirim', data)

       // manggil dispatch
       client.post(`/transaction/donas/${id}`, data)
      .then (function (response) {
          console.log(response.data)
          alert('Berhasil Donasi')

          getListDonasi()
        
      }).catch (function(error) {
           console.log(error);
           alert("data tidak ditemukan");

      })
      
   }


    useEffect(() => {
      client.get(`/list/projects/${id}`)
      .then (function (response) {
          console.log(response.data)
         setProjects(response.data.data)
         setListDonasi(response.data.data.donations)
       
      }).catch (function(error) {
           console.log(error);
           alert("data tidak ditemukan");

      })
    }, [])

    


    console.log(projects)

    return (
      
        <>
        
            <section
    className="h-full w-full border-box bg-white shadow-lg  transition-all duration-500 linear bg-white"
    >

          <div>
        <header x-data="{ open: false }">
          <div className="mx-auto flex py-12 lg:px-24 md:px-16 sm:px-8 px-8  items-center justify-between lg:justify-start">
              <Link to='/Home'>
              <img style={{height: '40px'}} src="https://ik.imagekit.io/uqhk3wr7kix/backward_2_REXDSs0Wzo.png" alt="" />           
              </Link>
            <div className="flex mr-0 lg:hidden cursor-pointer">
              <svg className="w-6 h-6"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <div  className="bg-black fixed  w-full hidden h-full top-0 left-0 z-30 bg-opacity-60">
            </div>
            <nav className="navigation-header-2-2 lg:mr-auto hidden fixed lg:flex flex-col text-base justify-center z-50 fixed top-8 left-3 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none lg:bg-transparent lg:p-0 lg:items-center items-start">
              <a href="#">                 
                <img className="m-0 lg:hidden mb-3" style={{height: '30px'}} src="https://ik.imagekit.io/hiwbjdxpmw/logocekula_MIGJSeZtU.png" alt="" />
              </a>
             
              <svg  className="w-6 h-6 absolute top-4 right-4  lg:hidden cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </nav>
           
          </div>
        </header>
        {/* Hero-header-2-2 */}
        <div>
          <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8  lg:flex-row flex-col ">
            {/* Left Column */}
            <div className="lg:flex-grow flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center justify-center flex">
              <h1 className="lg:blocktitle-font sm:text-5xl lg:text-8xl text-4xl mb-8 font-semibold sm:leading-tight text-gray-800"><span className="text-pink-400">#Rangkul</span>Mereka<span></span>
              </h1>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-2/5 text-center justify-center flex pr-0 lg:ml-16">
              <img id="hero-header-2-2 " src="https://ik.imagekit.io/uqhk3wr7kix/education___student__man__person__lockers__school__highschool_1_cT3l737V1.png?updatedAt=1627560164728" alt="" />             
            </div>
          </div>
        </div>

      </div>
      </section>


      {/*  */}
        <section className='z-10 absolute ' style={{width: '100%', top: '600px'}}>
            <div className="container mx-auto mb-8" >
                <div className="flex lg:flex-row flex-col ">
                    <div className="px-14 md:px-0 lg:px-4 lg:w-4/4 md:w-4/6 sm:w-5/6">
                        <div className="bg-white border shadow-lg w-full border-box rounded-lg">
                        <div>
              <div class="rounded-lg overflow-hidden bg-white shadow-xl">
                <div class="relative overflow-hidden">
                  <img
                    class="h-full w-full object-cover object-center"
                    src={`${projects.image}`}
                    alt=""
                  />
                </div>
                <div class="relative ">
                  <div class="py-6 px-4">
                    <h1 class="text-4xl font-bold text-gray-800">{projects.project_name}</h1>
                   
                  
                    <div className="mt-2 mb-2">
                      <div className="">
                          <span className="text-2xl font-bold text-blue-400 ">Rp. {new Number(projects.current_amount).toLocaleString('id-ID')}</span>
                        <span className="px-2 text-grey-100 text-md font-light">Terkumpul Dari Rp. {new Number(projects.goal_amount).toLocaleString('id-ID')}</span>
                      </div>
                    
                    </div>

                    <div className="relative pt-2">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-lg bg-pink-200 h-4">
                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-400 h-4"></div>
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col -m-4 mt-3 mb-3">
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto">
                      <h3 class="text-3xl font-bold text-gray-800">{projects.donations ? projects.donations.length : 0}    <span className="text-sm font-light text-black-200 ">Donasi</span></h3>
                      </div>
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto text-right">
                      <h3 class="text-3xl font-bold text-gray-800">23  <span className="text-sm font-light text-black-200 ">Hari lagi</span></h3>
                      </div>
                    </div>



                    <p className="my-4 text-sm font-light">{projects.short_description ? projects.short_description : ''}</p>
                    

                  
                  
                   
                  </div>
                </div>
              </div>
            </div>
                        </div>
                        <div className="bg-white border shadow-lg  w-full border-box rounded-md mt-2 mb-2 "> 
                        
                        <div class="py-6 px-4">
                            <h1 class="text-2xl font-medium text-gray-800">Deksripsi</h1>
                            <p className="font-light text-sm my-4">
                              {projects.description}
                            </p>

                          
                        </div>
                        </div>

                        <div className="bg-white border shadow-lg  w-full border-box rounded-md mt-2 mb-2 "> 
                        
                        <div class="py-6 px-4">
                            <h1 class="text-2xl font-medium text-gray-800 mb-2 mt-2">Daftar Orang Baik</h1>
                            {listdonasi ? listdonasi.map((item, index) => {
                              return (
                                <div className="bg-white border shadow-lg w-full border-box rounded-md mt-2 mb-2 ">
                                <div class="py-6 px-4">
                                <div className="flex lg:flex-row flex-col ">
                                    <div className="md:px-0 lg:px-4 lg:w-2/4 md:w-6/6 sm:w-3/6 mx-auto">
                                    <h3 className="font-medium">
                                        {item.name ? item.name : 'uknown'}
                                        </h3>
                                        <p className="font-grey-300 text-sm">
                                        {moment(item.createdAt).format('DD MMM YYYY')}   
                                        </p>
                                   </div>
                                   <div className="md:px-0 lg:px-4 lg:w-2/4 md:w-3/6 sm:w-6/6 mx-auto text-right">
                                    <h1 className="font-medium text-2xl text-pink-400">
                                      Rp. {new Number(item.amount).toLocaleString('id-ID')}
                                        </h1>
                                   </div>
                                   </div>
                                </div>
                                
                            </div>
                              )
                            }) : ''}
                            

                           
                        </div>
                        </div>

                        
                    </div>

                    
                    <div className="px-14 md:px-0 lg:px-4 lg:w-2/6 md:w-2/6 sm:w-2/6">
                        <div className="bg-white border shadow-lg py-8 px-12 w-full border-box">
                            <h1 className="text-2xl font-semibold title-font mb-2.5 text-gray-800"><span className="text-pink-400">#Rangkul</span>Mereka</h1>
                            <p className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-gray-600">Untuk berdonasi silahkan isi form di bawah ini </p>

                            <div className="w-full mt-4">
                               
                                    <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Nama
                                    </label>
                                    <input 
                                    onChange={(e) => handleFunction(e)}
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nama lengkap" />
                                    </div>
                                    <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Nilai Donasi
                                    </label>
                                    <input 
                                    onChange={(e) => handleFunction(e)}
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="amount" name="amount" placeholder="Rp. 100.000" />
                                   
                                    </div>
                                    <div className="flex items-center justify-between">
                                    <button  
                                    onClick={() => tambahDonasi()}
                                    className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-3 px-4 w-full rounded-md focus:outline-none focus:shadow-outline" type="button">
                                       Kirim Donasi
                                    </button>
                                    
                                    </div>
                                
                                
                                </div>
                        
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default  Detail