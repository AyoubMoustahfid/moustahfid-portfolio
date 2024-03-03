"use client"
import React from 'react'
import Image from "next/image"

import img_about_me from "../../assets/images/img_about_me.jpg"


export default function AboutUs() {
    

  return (
    <section className="py-14 bg-gray-100">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2 container">
              <div className="flex flex-col justify-center">
                  <div className="max-w-xl mb-6">
                      <h6 className="text-blue-600 font-medium">About Me</h6>
                      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                          A Passionate Developer Who Loves to Code
                      </h2>
                      <p className="text-base text-gray-700 md:text-lg">
                          Hello! I&quot;m Ayoub Moustahfid, a dedicated and results-driven Junior Frontend Developer born on June 7, 2000, in Agadir, Morocco. I&quot;ve ventured from the world of material science and physics to immerse myself in the dynamic and ever-evolving field of web development.
                      </p>
                  </div>
                  <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                      Soft Skills:
                  </p>
                  <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                      <ul className="space-y-3">
                          <li className="flex">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-green-500"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Creative Visionary
                          </li>
                          <li className="flex">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-green-500"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Problem-solving Maestro
                          </li>
                          <li className="flex">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-green-500"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Collaboration Virtuoso
                          </li>
                      </ul>
                      <ul className="space-y-3">
                          <li className="flex">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-green-500"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              User-Centric Mindset
                          </li>
                          <li className="flex">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-green-500"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Adaptable Trailblazer
                          </li>
                          <li className="flex">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-green-500"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Detail-Oriented Craftsman
                          </li>
                      </ul>
                  </div>
              </div>
              <div>
                  <Image
                      src={img_about_me}
                      className="object-cover w-full h-modal rounded shadow-lg"
                      alt="image about me"
                  />
              </div>
          </div>
    </section>
  )
}


/*
        <div className="grid grid-cols-2 justify-between gap-4 items-stretch">
            <div className="col-span-2 md:col-span-1">
                <div className="relative">
                    <div className="relative">
                        <Image
                            src={photo_profile}
                            alt="photo profile"
                            className="w-full"
                        />
                          <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <span className="absolute top-0 left-1">
                          <DynamicCirclesSVG size={300} rows={14} columns={12} circleRadius={1.13081} gap={8} />;
                    </span>
                </div>
            </div>
            <div className="col-span-2 md:col-span-1">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-blue-600 font-semibold uppercase">ABOUT US</h1>
                        <h5 className="font-semibold text-4xl line-clamp-2">Better design, better experience</h5>
                    </div>
                    <p className="text-sm text-gray-400 break-all">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti expedita id sequi excepturi fugiat!
                    </p>
                    <div className="flex gap-2 flex-row items-center">
                        <a className="border border-gray-400 rounded-full w-7 h-7 grid place-items-center hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-full fill-gray-500 hover:fill-black" viewBox="0 0 448 512">
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                        <a className="border border-gray-400 rounded-full w-7 h-7 grid place-items-center hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 fill-gray-500 hover:fill-black" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>
                        <a className="border border-gray-400 rounded-full w-7 h-7 grid place-items-center hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 fill-gray-500 hover:fill-black" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>


                <div className='pr-0 md:pr-10'>
                    <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                            <button className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
                                onClick={() => setVideoPopUp(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isVideoPopUp ? (
                        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                            <div className="px-4 relative">
                                <button
                                    className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                                    onClick={() => setVideoPopUp(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                                <div className="rounded-lg w-full max-w-2xl" >
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mLNq3SanPkk?si=HO-RQYl40qzbRA8J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    ) : ""
                    }
                </div>
*/