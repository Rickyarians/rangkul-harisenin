import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Home = () => {
    const history = useHistory()


    return (
        <>
         <section
    class="h-full w-full border-box  transition-all duration-500 linear bg-white"
    >

          <div>
        <header x-data="{ open: false }">
          <div className="mx-auto flex py-12 lg:px-24 md:px-16 sm:px-8 px-8  items-center justify-between lg:justify-start">
            <a href="#">
              <img style={{height: '40px'}} src="https://ik.imagekit.io/uqhk3wr7kix/Group_w3Z4zE6zP.png?updatedAt=1627561821890" alt="" />           
            </a>
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
              <a className=" text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative text-blueGray-400"  href="#">Beranda</a>
              <a className=" text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative text-blueGray-400"  href="/detail/1">Program</a>
              <a className=" text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative text-blueGray-400" href="#">Kontak</a>
            
              <div className="flex items-center justify-center w-full lg:hidden mt-3">
               
             
              </div>
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
            <div className="lg:flex-grow lg:w-3/5 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center justify-center flex">
              <h1 className="lg:block hidden title-font sm:text-5xl lg:text-8xl text-4xl mb-8 font-semibold sm:leading-tight text-gray-800">Rangkul
              </h1>
              
              <p className="mb-8 leading-relaxed font-semibold text-md w-50 sm:text-5xl lg:text-2xl text-4xl text-pink-400">
                  Fundraising Platform untuk mereka yang membutuhkan biaya
              </p>
              <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2  sm:space-x-3 space-x-0">
                <button className="btn-fill-header-2-2 inline-flex font-semibold text-white  text-base rounded-full py-3 px-8 mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-pink-400">Lihat Program</button>
             
              </div>
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
      <div>
        <div className="lg:px-32 md:px-8  sm:px-12 px-5 pt-20 pb-12 mx-auto  mb-6">
          
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-4xl font-semibold title-font mb-2.5 text-gray-800"><span className="text-pink-400">#Rangkul</span>Mereka</h1>
            <p className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-gray-600">Bantu Mereka agar bisa sekolah dan meraih cita cita nya</p>
          </div>
       
          <div className="flex lg:flex-row flex-col -m-4 mt-12">
          <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
                  <div>
              <div class="rounded-lg overflow-hidden bg-white shadow-xl">
                <div class="relative overflow-hidden pb-60">
                  <img
                    class="absolute h-full w-full object-cover object-center"
                    src="https://ik.imagekit.io/uqhk3wr7kix/image_9_W5okuV2nW.png?updatedAt=1627561823080"
                    alt=""
                  />
                </div>
                <div class="relative ">
                  <div class="py-6 px-4">
                    <h2 class="text-3xl font-bold text-gray-800">Bantu irfan kuliah</h2>
                    <p className="my-2 text-xs font-light  text-gray-600 ">CTO doang tapi nggak sarjana, KENTANG !</p>
                  
                    <div className="mt-2 mb-2">
                      <div className="">
                          <span className="text-xl font-bold text-blue-400 ">Rp. 100.000 </span>
                        <span className="px-2 text-grey-100 text-xs font-light">Terkumpul Dari Rp 400.0000</span>
                      </div>
                    
                    </div>

                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col -m-4 mt-2 mb-2">
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto">
                      <h3 class="text-2xl font-bold text-gray-800">100  <span className="text-sm font-light text-black-200 ">Donasi</span></h3>
                      </div>
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto text-right">
                      <h3 class="text-2xl font-bold text-gray-800">23  <span className="text-sm font-light text-black-200 ">Hari lagi</span></h3>
                      </div>
                    </div>

                    

                  
                  
                    <button className=" font-semibold text-white text-base w-full rounded-lg py-3 my-6 px-8 mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-pink-400">Donasi Sekarang!</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
                  <div>
              <div class="rounded-lg overflow-hidden bg-white shadow-xl">
                <div class="relative overflow-hidden pb-60">
                  <img
                    class="absolute h-full w-full object-cover object-center"
                    src="https://ik.imagekit.io/uqhk3wr7kix/image_9_W5okuV2nW.png?updatedAt=1627561823080"
                    alt=""
                  />
                </div>
                <div class="relative ">
                  <div class="py-6 px-4">
                    <h2 class="text-3xl font-bold text-gray-800">Bantu irfan kuliah</h2>
                    <p className="my-2 text-xs font-light  text-gray-600 ">CTO doang tapi nggak sarjana, KENTANG !</p>
                  
                    <div className="mt-2 mb-2">
                      <div className="">
                          <span className="text-xl font-bold text-blue-400 ">Rp. 100.000 </span>
                        <span className="px-2 text-grey-100 text-xs font-light">Terkumpul Dari Rp 400.0000</span>
                      </div>
                    
                    </div>

                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col -m-4 mt-2 mb-2">
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto">
                      <h3 class="text-2xl font-bold text-gray-800">100  <span className="text-sm font-light text-black-200 ">Donasi</span></h3>
                      </div>
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto text-right">
                      <h3 class="text-2xl font-bold text-gray-800">23  <span className="text-sm font-light text-black-200 ">Hari lagi</span></h3>
                      </div>
                    </div>

                    

                  
                  
                    <button className=" font-semibold text-white text-base w-full rounded-lg py-3 my-6 px-8 mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-pink-400">Donasi Sekarang!</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
                  <div>
              <div class="rounded-lg overflow-hidden bg-white shadow-xl">
                <div class="relative overflow-hidden pb-60">
                  <img
                    class="absolute h-full w-full object-cover object-center"
                    src="https://ik.imagekit.io/uqhk3wr7kix/image_9_W5okuV2nW.png?updatedAt=1627561823080"
                    alt=""
                  />
                </div>
                <div class="relative ">
                  <div class="py-6 px-4">
                    <h2 class="text-3xl font-bold text-gray-800">Bantu irfan kuliah</h2>
                    <p className="my-2 text-xs font-light  text-gray-600 ">CTO doang tapi nggak sarjana, KENTANG !</p>
                  
                    <div className="mt-2 mb-2">
                      <div className="">
                          <span className="text-xl font-bold text-blue-400 ">Rp. 100.000 </span>
                        <span className="px-2 text-grey-100 text-xs font-light">Terkumpul Dari Rp 400.0000</span>
                      </div>
                    
                    </div>

                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col -m-4 mt-2 mb-2">
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto">
                      <h3 class="text-2xl font-bold text-gray-800">100  <span className="text-sm font-light text-black-200 ">Donasi</span></h3>
                      </div>
                      <div className="md:px-0 lg:px-4 lg:w-1/2 md:w-1/2 sm:w-3/6 mx-auto text-right">
                      <h3 class="text-2xl font-bold text-gray-800">23  <span className="text-sm font-light text-black-200 ">Hari lagi</span></h3>
                      </div>
                    </div>

                    

                  
                  
                    <button className=" font-semibold text-white text-base w-full rounded-lg py-3 my-6 px-8 mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg bg-pink-400">Donasi Sekarang!</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
   
        </div>
      </div>
      {/*  */}

      {/*  */}
      <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 bg-white">
      <footer className="h-full" >
        <div className="pb-24 mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className>
              <div className="mb-5">
                <img style={{height: '50px'}} src="https://ik.imagekit.io/uqhk3wr7kix/Group_w3Z4zE6zP.png?updatedAt=1627561821890" alt="" />                   
              </div>
              <p className="w-4/5">
                    Fundraising platform untuk mereka yang membutuhkan biaya pendidikan
              </p>
            
            </div>
            <div className>
              <h2 className="title-font font-semibold text-2xl mb-5">Tentang</h2>
              <nav className="list-none list-footer-2-2">
                <li className="mb-5">
                  <a>Beranda</a>
                </li>
                <li className="mb-5">
                  <a>Mitra</a>
                </li>
               
                <li className="mb-5">
                  <a>Testimonial</a>
                </li>
             
              </nav>
            </div>
            <div className>
              <h2 className="title-font font-semibold text-2xl mb-5">Program</h2>
              <nav className="list-none list-footer-2-2">
                <li className="mb-5">
                  <a>program 1</a>
                </li>
              </nav>
            </div>
            <div className>
              <h2 className="title-font font-semibold text-2xl mb-5">Dukungan</h2>
              <nav className="list-none list-footer-2-2">
                <li className="mb-5">
                  <a>FAQ</a>
                </li>
                
              </nav>
            </div>  
          </div>
        </div>
        <div className="border-color-footer-2-2 mx-auto">
          <div className>              
            <hr />
          </div>
          <div className="mx-auto flex pt-8 flex-col lg:flex-row items-center space-y-5 lg:space-y-0">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 lg:mb-0 md:mb-0 space-x-5" style={{cursor: 'pointer'}}>
              <svg className="social-media-c-footer-2-2" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={15} cy={15} r={15} fill="#C7C7C7" />
                <g clipPath="url(#clip0)">
                  <path d="M17.6648 9.65667H19.1254V7.11267C18.8734 7.078 18.0068 7 16.9974 7C14.8914 7 13.4488 8.32467 13.4488 10.7593V13H11.1248V15.844H13.4488V23H16.2981V15.8447H18.5281L18.8821 13.0007H16.2974V11.0413C16.2981 10.2193 16.5194 9.65667 17.6648 9.65667V9.65667Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width={16} height={16} fill="white" transform="translate(7 7)" />
                  </clipPath>
                </defs>
              </svg>
              <svg className="social-media-c-footer-2-2" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={15} cy={15} r={15} fill="#C7C7C7" />
                <g clipPath="url(#clip0)">
                  <path d="M23 10.039C22.405 10.3 21.771 10.473 21.11 10.557C21.79 10.151 22.309 9.513 22.553 8.744C21.919 9.122 21.219 9.389 20.473 9.538C19.871 8.897 19.013 8.5 18.077 8.5C16.261 8.5 14.799 9.974 14.799 11.781C14.799 12.041 14.821 12.291 14.875 12.529C12.148 12.396 9.735 11.089 8.114 9.098C7.831 9.589 7.665 10.151 7.665 10.756C7.665 11.892 8.25 12.899 9.122 13.482C8.595 13.472 8.078 13.319 7.64 13.078C7.64 13.088 7.64 13.101 7.64 13.114C7.64 14.708 8.777 16.032 10.268 16.337C10.001 16.41 9.71 16.445 9.408 16.445C9.198 16.445 8.986 16.433 8.787 16.389C9.212 17.688 10.418 18.643 11.852 18.674C10.736 19.547 9.319 20.073 7.785 20.073C7.516 20.073 7.258 20.061 7 20.028C8.453 20.965 10.175 21.5 12.032 21.5C18.068 21.5 21.368 16.5 21.368 12.166C21.368 12.021 21.363 11.881 21.356 11.742C22.007 11.28 22.554 10.703 23 10.039Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width={16} height={16} fill="white" transform="translate(7 7)" />
                  </clipPath>
                </defs>
              </svg>
              <svg className="social-media-p-footer-2-2" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8711 15C17.8711 16.5857 16.5857 17.8711 15 17.8711C13.4143 17.8711 12.1289 16.5857 12.1289 15C12.1289 13.4143 13.4143 12.1289 15 12.1289C16.5857 12.1289 17.8711 13.4143 17.8711 15Z" fill="#C7C7C7" />
                <path d="M21.7144 9.92039C21.5764 9.5464 21.3562 9.20789 21.0701 8.93002C20.7923 8.64392 20.454 8.42374 20.0797 8.28572C19.7762 8.16785 19.3203 8.02754 18.4805 7.98932C17.5721 7.94789 17.2997 7.93896 14.9999 7.93896C12.6999 7.93896 12.4275 7.94766 11.5193 7.98909C10.6796 8.02754 10.2234 8.16785 9.92014 8.28572C9.54591 8.42374 9.2074 8.64392 8.92976 8.93002C8.64366 9.20789 8.42348 9.54617 8.28523 9.92039C8.16736 10.2239 8.02705 10.6801 7.98883 11.5198C7.9474 12.428 7.93848 12.7004 7.93848 15.0004C7.93848 17.3002 7.9474 17.5726 7.98883 18.481C8.02705 19.3208 8.16736 19.7767 8.28523 20.0802C8.42348 20.4545 8.64343 20.7927 8.92953 21.0706C9.2074 21.3567 9.54568 21.5769 9.91991 21.7149C10.2234 21.833 10.6796 21.9733 11.5193 22.0115C12.4275 22.053 12.6997 22.0617 14.9997 22.0617C17.3 22.0617 17.5723 22.053 18.4803 22.0115C19.3201 21.9733 19.7762 21.833 20.0797 21.7149C20.8309 21.4251 21.4247 20.8314 21.7144 20.0802C21.8323 19.7767 21.9726 19.3208 22.011 18.481C22.0525 17.5726 22.0612 17.3002 22.0612 15.0004C22.0612 12.7004 22.0525 12.428 22.011 11.5198C21.9728 10.6801 21.8325 10.2239 21.7144 9.92039V9.92039ZM14.9999 19.4231C12.5571 19.4231 10.5768 17.4431 10.5768 15.0002C10.5768 12.5573 12.5571 10.5773 14.9999 10.5773C17.4426 10.5773 19.4229 12.5573 19.4229 15.0002C19.4229 17.4431 17.4426 19.4231 14.9999 19.4231ZM19.5977 11.4361C19.0269 11.4361 18.5641 10.9733 18.5641 10.4024C18.5641 9.83159 19.0269 9.36879 19.5977 9.36879C20.1685 9.36879 20.6313 9.83159 20.6313 10.4024C20.6311 10.9733 20.1685 11.4361 19.5977 11.4361Z" fill="#C7C7C7" />
                <path d="M15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C23.283 30 30 23.283 30 15C30 6.717 23.283 0 15 0ZM23.5613 18.5511C23.5197 19.468 23.3739 20.094 23.161 20.6419C22.7135 21.7989 21.7989 22.7135 20.6419 23.161C20.0942 23.3739 19.468 23.5194 18.5513 23.5613C17.6328 23.6032 17.3394 23.6133 15.0002 23.6133C12.6608 23.6133 12.3676 23.6032 11.4489 23.5613C10.5322 23.5194 9.90601 23.3739 9.35829 23.161C8.78334 22.9447 8.26286 22.6057 7.83257 22.1674C7.39449 21.7374 7.05551 21.2167 6.83922 20.6419C6.62636 20.0942 6.48056 19.468 6.4389 18.5513C6.39656 17.6326 6.38672 17.3392 6.38672 15C6.38672 12.6608 6.39656 12.3674 6.43867 11.4489C6.48033 10.532 6.6259 9.90601 6.83876 9.35806C7.05505 8.78334 7.39426 8.26263 7.83257 7.83257C8.26263 7.39426 8.78334 7.05528 9.35806 6.83899C9.90601 6.62613 10.532 6.48056 11.4489 6.43867C12.3674 6.39679 12.6608 6.38672 15 6.38672C17.3392 6.38672 17.6326 6.39679 18.5511 6.4389C19.468 6.48056 20.094 6.62613 20.6419 6.83876C21.2167 7.05505 21.7374 7.39426 22.1677 7.83257C22.6057 8.26286 22.9449 8.78334 23.161 9.35806C23.3741 9.90601 23.5197 10.532 23.5616 11.4489C23.6034 12.3674 23.6133 12.6608 23.6133 15C23.6133 17.3392 23.6034 17.6326 23.5613 18.5511V18.5511Z" fill="#C7C7C7" />
              </svg>
              <svg className="social-media-c-footer-2-2" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={15} cy={15} r={15} fill="#C7C7C7" />
                <g clipPath="url(#clip0)">
                  <path d="M17.9027 22.4467C17.916 22.4427 17.9287 22.4373 17.942 22.4327C26.0853 19.1973 23.8327 7 15 7C10.5673 7 7 10.6133 7 15C7 20.5513 12.6227 24.5127 17.9027 22.4467ZM10.5207 20.3727C11.0887 19.418 12.9267 16.7247 16.064 15.7953C16.72 17.468 17.18 19.4193 17.2253 21.632C14.848 22.4313 12.3407 21.8933 10.5207 20.3727V20.3727ZM18.2087 21.2147C18.1213 19.0887 17.6873 17.2033 17.0687 15.57C18.4567 15.3533 20.0633 15.498 21.8853 16.228C21.498 18.402 20.108 20.2293 18.2087 21.2147V21.2147ZM21.99 15.194C19.9833 14.44 18.2147 14.346 16.684 14.638C16.4473 14.1047 16.1987 13.592 15.9353 13.12C18.284 12.182 19.672 11.0387 20.2933 10.4333C21.39 11.7027 22.0413 13.346 21.99 15.194V15.194ZM19.5833 9.72133C19.018 10.2593 17.6867 11.346 15.41 12.2347C14.294 10.4693 13.1007 9.224 12.3447 8.52667C14.7633 7.53067 17.5527 7.956 19.5833 9.72133V9.72133ZM11.3887 9.01533C11.9593 9.51733 13.212 10.7227 14.4207 12.5867C12.7607 13.1213 10.6793 13.514 8.148 13.5693C8.55067 11.64 9.75333 10.0053 11.3887 9.01533V9.01533ZM8.02133 14.5733C10.8547 14.5273 13.148 14.08 14.9607 13.4747C15.2113 13.914 15.4493 14.3927 15.678 14.89C12.5213 15.8953 10.5487 18.4907 9.79333 19.6627C8.57467 18.3027 7.90267 16.528 8.02133 14.5733V14.5733Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width={16} height={16} fill="white" transform="translate(7 7)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
           
          </div>
        </div>
      </footer>      
      {/*  */}
      </section>
        </>
    )
}

export default  Home