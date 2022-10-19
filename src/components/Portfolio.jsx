import React from "react";

import clickmonkey from '../assets/portfolio/ClickMonkey.png'
import foodrecipe from '../assets/portfolio/foodrecipe.png'
import personalPortfolio from '../assets/portfolio/personalPortfolio.png'
import portfolio from '../assets/portfolio/portfolio.png'
import quoteGenerator from '../assets/portfolio/quoteGenerator.png'
import resturantMenu from '../assets/portfolio/resturantMenu.png'






const Portfolio = () => {

    const portfolios=[
        {
          id:1,
          src:clickmonkey,
          name:"ClickMonkey",
          no:1,
        },
        {
          id:2,
          src:foodrecipe,
          name:"FoodRecipe",
          no:2,
        },
        {
          id:3,
          src:personalPortfolio,
          name:"React-Portfolio",
          no:3,
        },
        {
          id:4,
          src:portfolio,
          name:"Portfolio",
          no:4,
        },
        {
          id:5,
          src:quoteGenerator,
          name:"QuoteGenerator",
          no:5,
        },
        {
          id:6,
          src:resturantMenu,
          name:"ResturantMenu",
          no:6,
        },
    ]

  return (
    <div name='portfolio' className="bg-gradient-to-b from-black to-gray-400 text-white w-full  md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 first-letter:first-line:">
                <p className="text-4xl  font-bold inline border-b-4 border-gray-300">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>
            <div className="grid sm:grid-col-2 md:grid-cols-3 gap-8 px-12 sm:px-0"> 

            {
                portfolios.map(({id,src,no,name})=>(
                    
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg " >
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                    <div className="items-center justify-center">
                        <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{name}</button>
                        <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-150">{no}</button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio