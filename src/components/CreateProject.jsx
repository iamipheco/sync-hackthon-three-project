import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { useDropzone } from "react-dropzone";
import { VscChromeClose } from "react-icons/vsc";
import { userInfoData } from "../context/UserInfoContext";

const CreateProject = () => {
    const { userData } = userInfoData();
    const [currentForm, setCurrentForm] = useState(1);
    const totalForms = 3; // Assuming there are 3 forms in total
    const [progress, setProgress] = useState((currentForm / totalForms) * 100);

    const handleNext = () => {
        if (currentForm < totalForms) {
            setCurrentForm(currentForm + 1);
            calculateProgress();
        } else {
            // If all forms are filled, handle submission accordingly
        }
    };

    const handlePrevious = () => {
        if (currentForm > 1) {
            setCurrentForm(currentForm - 1);
            calculateProgress();
        }
    };

    const calculateProgress = () => {
        // Calculate the progress based on the completion of different forms
        const calculatedProgress = (currentForm / totalForms) * 100;
        setProgress(calculatedProgress);
    };

    if (!userData) {
        // Handle the case when userData is not available yet
        return;
    }

    // Define your forms within the CreateProject component
    const FirstForm = () => {
        const [title, setTitle] = useState("");
        const [taskDetails, setTaskDetails] = useState("");
        //const [deadline, setDeadline] = useState("");
        //const [categories, setCategories] = useState("");
        const [files, setFiles] = useState([]);
        const [isClose, setIsClose] = useState();

        const { getRootProps, getInputProps } = useDropzone({
            accept: "image/*",
            onDrop: (acceptedFiles) => {
                setFiles(acceptedFiles);
            },
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
        };

        const handleUpload = async () => {
            // Upload files to server here
            // Update progress bar accordingly
        };

        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">


                <div className="w-full max-w-[550px] bg-white rounded-md pt-9 px-7 pb-4
                 first:last:sdfgnm'
                 56zxcn relative">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold pl-5 ">
                            Create a New Project
                        </h1>
                        <button className=" text-lg absolute top-8 bg-slate-100  p-2 rounded-lg right-[52px] text-gray-500 hover:text-gray-700">
                            <VscChromeClose />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="p-6">
                        <p className="text-[#F4530F] text-right text-xs mb-4 mt-4">
                            Step {currentForm}{" "}
                            <span className="text-slate-500">
                                of {totalForms}
                            </span>
                        </p>
                        {/* Progress bar of the form */}
                        <ProgressBar progress={progress} color="#F4530F" />
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-semibold text-sm mb-2 mt-6"
                            >
                                Title <span className="text-[#F4530F]">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                placeholder="e.g Website Design"
                                className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-slate-400 placeholder:text-xs"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="taskDetails"
                                className="block text-gray-700  text-sm font-semibold mb-2"
                            >
                                Task Details &nbsp;
                                <span className="text-[#F4530F]">*</span>
                            </label>
                            <textarea
                                id="taskDetails"
                                value={taskDetails}
                                className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                            />
                        </div>
                        {/* <div className="flex justify-between items-center gap-4">
                            <div className="mb-4 flex-1">
                                <label
                                    htmlFor="deadline"
                                    className="block text-gray-700 font-semibold text-sm mb-2"
                                >
                                    Deadline Date (Optional)
                                </label>
                                <input
                                    type="date"
                                    id="deadline"
                                    value={deadline}
                                    className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label
                                    htmlFor="categories"
                                    className="block text-gray-700 font-semibold mb-2 text-sm"
                                >
                                    Categories &nbsp;
                                </label>
                                <select
                                    id="categories"
                                    value={categories}
                                    className="border rounded-xl w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                    
                                >
                                    <option value=""> Select </option>
                                    <option value="websiteDesign">
                                        Website Design
                                    </option>
                                    <option value="logoDesign">
                                        Logo Design
                                    </option>
                                </select>
                            </div>
                        </div> */}

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2 ">
                                Attached Files {""}
                                <span className="text-[#F4530F]">*</span>
                            </label>
                            <div
                                {...getRootProps()}
                                className="border-dashed border-2 border-gray-400 rounded p-8"
                            >
                                <input {...getInputProps()} />
                                <p className="text-gray-500">
                                    Drag and drop files here, or click to select
                                    files
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <button
                                type="submit"
                                className="text-gray-700 border font-semibold py-2 px-5 rounded-xl focus:outline-none focus:shadow-outline text-sm"
                                onClick={handleNext}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#F4530F] hover:bg-[#ff7049] text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline text-sm"
                                onClick={handleNext}
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    const SecondForm = () => {
        return (
            <div>
                {/* Your SecondForm JSX */}
                <button onClick={handlePreviousForm}>Previous</button>
                <button onClick={handleNextForm}>Next</button>
            </div>
        );
    };

    const ThirdForm = () => {
        return (
            <div>
                {/* Your ThirdForm JSX */}
                <button onClick={handlePreviousForm}>Previous</button>
            </div>
        );
    };

    return (
        <div>
            {currentForm === 1 && <FirstForm />}
            {currentForm === 2 && <SecondForm />}
            {currentForm === 3 && <ThirdForm />}
        </div>
    );
};

export default CreateProject;
