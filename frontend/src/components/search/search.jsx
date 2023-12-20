import React, { useState } from "react";

const Search = ({ users, setFilteredUsers }) => {
  const [search, setSearch] = useState("");
  

  const handleSearch = () => {
    const filteredUsers = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(firstName.toLowerCase()) &&
        user.lastName.toLowerCase().includes(lastName.toLowerCase())
      );
    });

    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
       <Input 
        value={search}
        classNames={{input:styles.input}} 
        onChange={(e) => setSearch(e.target.value)}
        radius="lg" 
        size='xs'  
        placeholder="поиск.." 
        leftSection={<CiSearch/>} 
        />

    </div>
  );
};

export default Search;