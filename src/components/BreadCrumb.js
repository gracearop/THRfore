"use client";

// import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
// import { HiHome } from "react-icons/hi";

// export function Component() {
//   return (
//     <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
//       <BreadcrumbItem href="#" icon={HiHome}>
//         Home
//       </BreadcrumbItem>
//       <BreadcrumbItem href="#">Projects</BreadcrumbItem>
//       <BreadcrumbItem>Flowbite React</BreadcrumbItem>
//     </Breadcrumb>
//   );
// }

// import { Breadcrumb } from "flowbite-react";
// import { HiHome } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";

// function AppBreadcrumb() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <div className="px-4 py-2 bg-gray-50">
//       <Breadcrumb aria-label="Breadcrumb">
//         <Breadcrumb.Item icon={HiHome}>
//           <Link to="/">Home</Link>
//         </Breadcrumb.Item>

//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <Breadcrumb.Item key={to}>
//               {isLast ? value : <Link to={to}>{value}</Link>}
//             </Breadcrumb.Item>
//           );
//         })}
//       </Breadcrumb>
//     </div>
//   );
// }

// export default AppBreadcrumb;

// import { Breadcrumb } from "flowbite-react";
// import { HiHome } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";

// function AppBreadcrumb() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <div className="px-4 py-2 bg-gray-50">
//       <Breadcrumb aria-label="Breadcrumb">
//         <Breadcrumb.Item>
//           <HiHome className="mr-2" />
//           <Link to="/">Home</Link>
//         </Breadcrumb.Item>

//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <Breadcrumb.Item key={to}>
//               {isLast ? (
//                 <span className="capitalize">{value}</span>
//               ) : (
//                 <Link to={to} className="capitalize">
//                   {value}
//                 </Link>
//               )}
//             </Breadcrumb.Item>
//           );
//         })}
//       </Breadcrumb>
//     </div>
//   );
// }

// export default AppBreadcrumb;


// import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
// import { HiHome } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";

// function AppBreadcrumb() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <div className="px-4 py-2 bg-gray-50">
//       <Breadcrumb aria-label="Breadcrumb">
//         <BreadcrumbItem>
//           <HiHome className="mr-2" />
//           <Link to="/">Home</Link>
//         </BreadcrumbItem>

//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <BreadcrumbItem key={to}>
//               {isLast ? (
//                 <span className="capitalize">{value}</span>
//               ) : (
//                 <Link to={to} className="capitalize">
//                   {value}
//                 </Link>
//               )}
//             </BreadcrumbItem>
//           );
//         })}
//       </Breadcrumb>
//     </div>
//   );
// }

// export default AppBreadcrumb;

// import { Breadcrumb } from "flowbite-react";
// import { HiHome } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";

// function AppBreadcrumb() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <div className="px-4 py-2 bg-gray-50">
//       <Breadcrumb aria-label="breadcrumb">
//         {/* Home always shows */}
//         <Breadcrumb.Item icon={HiHome}>
//           <Link to="/">Home</Link>
//         </Breadcrumb.Item>

//         {/* Loop through the URL segments */}
//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <Breadcrumb.Item key={to}>
//               {isLast ? (
//                 <span className="capitalize">{value}</span>
//               ) : (
//                 <Link to={to} className="capitalize">
//                   {value}
//                 </Link>
//               )}
//             </Breadcrumb.Item>
//           );
//         })}
//       </Breadcrumb>
//     </div>
//   );
// }

// export default AppBreadcrumb;


import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function AppBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="px-4 py-2 bg-gray-50">
      <Breadcrumb aria-label="breadcrumb">
        {/* Home always shows */}
        <BreadcrumbItem icon={HiHome}>
          <Link to="/">Home</Link>
        </BreadcrumbItem>

        {/* Loop through the URL segments */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <BreadcrumbItem key={to}>
              {isLast ? (
                <span className="capitalize">{value}</span>
              ) : (
                <Link to={to} className="capitalize">
                  {value}
                </Link>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default AppBreadcrumb;
