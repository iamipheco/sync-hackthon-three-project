// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import ProgressBar from "../ProgressBar";

// const CreateTaskForm = ({ onClose }) => {
//     const [title, setTitle] = useState("");
//     const [taskDetails, setTaskDetails] = useState("");
//     const [deadline, setDeadline] = useState("");
//     const [categories, setCategories] = useState("");
//     const [files, setFiles] = useState([]);
    
//     const { getRootProps, getInputProps } = useDropzone({
//         accept: "image/*",
//         onDrop: (acceptedFiles) => {
//             setFiles(acceptedFiles);
//         },
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//       };
      
//       const handleUpload = async () => {
//         // Upload files to server here
//         // Update progress bar accordingly
//       };
      
//       return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="w-full max-w-[650px] bg-white rounded-md p-[32px] relative">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M6 18L18 6M6 6l12 12"
//                         />
//                     </svg>
//                 </button>
//                 <form onSubmit={handleSubmit} className="p-6">
//                   <h1>Create a New Project</h1>
//                   <p className="text-orange-600">Step 1  <span className="text-slate-500">of 3</span></p>
//                       <ProgressBar progress={progress} color="#F4530F"/>
//                     <div className="mb-4">
//                         <label
//                             htmlFor="title"
//                             className="block text-gray-700 font-bold mb-2"
//                         >
//                             Title *
//                         </label>
//                         <input
//                             type="text"
//                             id="title"
//                             value={title}
//                             onChange={(e) => {setTitle(e.target.value); calculateProgress();}}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label
//                             htmlFor="taskDetails"
//                             className="block text-gray-700 font-bold mb-2"
//                         >
//                             Task Details *
//                         </label>
//                         <textarea
//                             id="taskDetails"
//                             value={taskDetails}
//                             onChange={(e) => {setTaskDetails(e.target.value); calculateProgress();}}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label
//                             htmlFor="deadline"
//                             className="block text-gray-700 font-bold mb-2"
//                         >
//                             Deadline Date (Optional)
//                         </label>
//                         <input
//                             type="date"
//                             id="deadline"
//                             value={deadline}
//                             onChange={(e) => {setDeadline(e.target.value); calculateProgress();}}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label
//                             htmlFor="categories"
//                             className="block text-gray-700 font-bold mb-2"
//                         >
//                             Categories
//                         </label>
//                         <input
//                             type="text"
//                             id="categories"
//                             value={categories}
//                             onChange={(e) => {setCategories(e.target.value); calculateProgress();}}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2">
//                             Attach Files (Optional)
//                         </label>
//                         <div
//                             {...getRootProps()}
//                             className="border-dashed border-2 border-gray-400 rounded p-4"
//                         >
//                             <input {...getInputProps()} />
//                             <p className="text-gray-500">
//                                 Drag and drop files here, or click to select
//                                 files
//                             </p>
//                         </div>
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={handleUpload}
//                     >
//                         Continue
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CreateTaskForm;
