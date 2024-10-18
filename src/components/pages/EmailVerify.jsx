// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logoImage from '../../assets/img/logo.png';
// import bgFlow from '../../assets/img/bg.jpg';

// const EmailVerify = () => {
//   const [isEmailVerified, setIsEmailVerified] = useState(false);

//   // Simulate API call to check email verification status
//   const checkEmailVerificationStatus = () => {
//     // Make your API call here to get the user's verification status
//     // For now, let's simulate it as false
//     setIsEmailVerified(false);
//   };

//   const handleVerificationClick = () => {
//     checkEmailVerificationStatus();
//   };

//   return (
//     <div
//       className="bg-cover bg-center bg-fixed h-screen"
//       style={{ backgroundImage: `url(${bgFlow})` }}
//     >
//       <section className=" ">
//         <div className="container flex flex-col items-center">
//           <div className="w-full max-w-[500px] bg-white rounded-md p-[32px]">
//             <img src={logoImage} alt="flowease-logo" className="mx-auto w-32" />
//             <h1 className="text-3xl font-bold mb-6">Email Verification</h1>
//             <p className="text-lg mb-4">
//               Thank you for signing up! An email verification link has been sent to your email
//               address.
//             </p>
//             <p className="text-lg">
//               Please check your email and click on the verification link to complete the registration
//               process.
//             </p>
//             {!isEmailVerified && (
//               <div className="mt-10">
//                 <button
//                   onClick={handleVerificationClick}
//                   className="bg-gradient-to-b from-[#F4530F] to-[#ff6929] hover:from-[#ff6929] hover:to-[#F4530F] duration-700 hover:duration-700 w-full h-[48px] text-white rounded-2xl inline-block text-center pt-2"
//                 >
//                   I have Verified my Email
//                 </button>
//               </div>
//             )}
//             {isEmailVerified && (
//               <div className="mt-10">
//                 <p className="text-green-500 text-lg text-center">Email Verified Successfully!</p>
//                 <Link
//                   to="/signin"
//                   className="bg-gradient-to-b from-[#F4530F] to-[#ff6929] hover:from-[#ff6929] hover:to-[#F4530F] duration-700 hover:duration-700 w-full h-[48px] text-white rounded-2xl inline-block text-center pt-2 mt-4"
//                 >
//                   Sign In
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EmailVerify;




// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import logoImage from '../../assets/img/logo.png';
// // import bgFlow from '../../assets/img/bg.jpg';

// // const EmailVerify = () => {
// //   return (
// //     <div
// //       className="bg-cover bg-center bg-fixed h-screen"
// //       style={{ backgroundImage: `url(${bgFlow})` }}
// //     >
// //       <section className="p-10 pt-24 ">
// //         <div className="container flex flex-col items-center">
// //           <div className="w-full max-w-[500px] bg-white rounded-md p-14 ">
// //             <img src={logoImage} alt="flowease-logo" className="mx-auto w-32" />
// //             <h1 className="text-base leading-10 text-center pt-10 capitalize">Email Verification</h1>
// //             <p className="text-[14px] pt-5 text-center ">
// //               Thank you for signing up! An email verification link has been sent to your email
// //               address.
// //             </p>
// //             <p className="text-[14px] pt-5 text-center">
// //               Please check your email and click on the verification link to complete the registration
// //               process.
// //             </p>
// //             <div className="mt-10">
// //               <Link
// //                 to="/"
// //                 className="bg-gradient-to-b from-[#F4530F] to-[#ff6929] hover:from-[#ff6929] hover:to-[#F4530F] duration-700 hover:duration-700 w-full h-[48px] text-white rounded-2xl inline-block text-center pt-2"
// //               >
// //                 Sign In
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default EmailVerify;
