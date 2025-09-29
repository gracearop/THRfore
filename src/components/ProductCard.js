import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import ImageCard from "./ImageCard";
import Heading from "./Heading";

export default function ProductCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto px-[10%]">
 
      <div className="grid gap-4">
        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            name="Organic Charcoal"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            name="Sneakers"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            name="Fashion bags"
          />
        </Link>

      </div>

      <div className="grid gap-4">
        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            name="Room Decorations"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            name="Smart Watch"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            name="Sport Wears"
          />
        </Link>

      </div>

      <div className="grid gap-4">
        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            name="Shaving Magic"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            name="Fashionable Bags"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            name="Light Bulb"
          />
        </Link>
      </div>

      <div className="grid gap-4">
        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            name="Cleanser"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            name="Game Pad"
          />
        </Link>

        <Link to="/products">
          <ImageCard
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            name="Bags"
          />
        </Link>

      </div>
    </div>
  );
}


// export default function ProductCard({ name, price }) {
//   return (
//     // <div
//     //   style={{
//     //     border: "1px solid #ccc",
//     //     borderRadius: "8px",
//     //     padding: "1rem",
//     //     margin: "0.5rem",
//     //     width: "200px",
//     //     textAlign: "center"
//     //   }}
//     // >
//     //   <h3>{name}</h3>
//     //   <p>${price}</p>
//     //   <button style={{ padding: "0.5rem", background: "#222", color: "#fff" }}>
//     //     View Details
//     //   </button>
//     // </div>    

// <div className="w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
//         alt=""
//       />
//     </div>
//   </div>

//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
//         alt=""
//       />
//     </div>
//   </div>

//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
//         alt=""
//       />
//     </div>
//   </div>

//   <div className="grid gap-4">
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         className="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
//         alt=""
//       />
//     </div>
//   </div>
// </div>


//   );
// }
