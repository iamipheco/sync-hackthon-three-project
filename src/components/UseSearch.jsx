import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserSearch = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://flowease.onrender.com/api/users/${userId}/user`);
                if (res.data.success === true) {
                    setUser(res.data.message);
                } else {
                    console.error("Failed to fetch user");
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        
        if (userId) {
            fetchUser();
        }

    }, [userId]);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);

        // Filter users based on search input if user data is available
        if (user) {
            console.log(user);
            const filteredUsers = user.filter((u) =>
                u.full_name.toLowerCase().includes(inputValue.toLowerCase()) || u.email.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSearchResults(filteredUsers);
        }
    };

    const addUser = (user) => {
        setSelectedUsers([...selectedUsers, user]);
        setSearchResults([]); // Clear search results after adding user
        setSearchInput(""); // Clear search input after adding user
    };

    const removeUser = (user) => {
        setSelectedUsers(selectedUsers.filter((u) => u._id !== user._id));
    };

    return (
        <div>
            <h2>Assign Track To:</h2>
            <input type="text" value={searchInput} onChange={handleChange} placeholder="Search by name or email" />

            <div>
                {searchResults.map((user) => (
                    <div key={user._id}>
                        <p>{user.full_name} - {user.email}</p>
                        {selectedUsers.find((u) => u._id === user._id) ? (
                            <button onClick={() => removeUser(user)}>Remove</button>
                        ) : (
                            <button onClick={() => addUser(user)}>Add</button>
                        )}
                    </div>
                ))}
            </div>

            <div>
                {selectedUsers.map((user) => (
                    <div key={user._id}>
                        <p>{user.email}</p>
                        <button onClick={() => removeUser(user)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserSearch;






// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const UserSearch = () => {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.get(`https://flowease.onrender.com/api/users/${userId}/user`);
//                 if (res.data.success === true) {
//                     setUser(res.data.message);
//                 } else {
//                     console.error("Failed to fetch user");
//                 }
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//             }
//         };

//         if (userId) {
//             fetchUser();
//         }
//     }, [userId]);

//     if (!user) {
//         return;
//     }

//     return (
//         <div>
//             <h2>User Details</h2>
//             <p>ID: {user._id}</p>
//             <p>Email: {user.email}</p>
//             <p>Full Name: {user.full_name}</p>
//             <p>Verified: {user.verified ? "Yes" : "No"}</p>
//         </div>
//     );
// };

// export default UserSearch;
