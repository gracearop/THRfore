import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import ImageCard from "./ImageCard";
import Heading from "./Heading";

export default function ProductHeading() {
  return (
    // <div className=" flex justify-center items-center"> 
    //     <Heading> You can shop too!
    //     </Heading> 
    //                   <ImageCard src="/assets/shopping-girl.JPG"
    //           className="w-3/4 m-5"/>     
    // </div> 
        <div className="flex flex-col justify-center items-center text-center p-6">
      <h1 className="font-heading text-4xl mb-4">
        You can shop too!
      </h1>
      <p className="font-body text-lg text-gray-700">
        Discover amazing products curated just for you.
      </p>
         <Link to="/products">
            <img
                src="/assets/shopping-girl.JPG"
                alt="Shopping girl"
                className="m-5 rounded-lg shadow-lg"
            />
        </Link>

    </div>
  )};