import { useEffect, useState } from "react";

// const items =

// function SearchComponent() {
//   // tracks user input
//   const [query, setQuery] = useState("");
//   //   tracks fetch items
//   const [items, setItems] = useState([]);

//   //create function useEffect to fetch data
//   useEffect(() => {
//     fetch("http://localhost:5173/data/items.json")
//       .then((response) => response.json())
//       .then((data) => setItems(data));
//   }, []);

//   // filter items based on query
//   const filtersItems = items.filter((item) =>
//     item.name.toLocaleLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="grid place-content-center">
//       {/* add input field */}
//       <input
//         className=" p-4 m-5 w-[800px] place-self-center placeholder:text-orange-600 border-2 border-blue-600 rounded-md  text-xl focus:ring-1 text-yellow-300 outline-orange-600 focus:border-0 "
//         type="text"
//         placeholder="search..."
//         value={query}
//         // update query when input change
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <div className="grid grid-cols-5 gap-5 m-8 place-content-center">
//         {items.length > 0 && filtersItems.length === 0 && (
//           <h2 className="text-5xl font-bold col-span-5 bg-green-600 p-5  text-center">Not Found</h2>
//         )}

//         {filtersItems.map((item) => (
//           <p key={item.id} className="bg-orange-600 text-3xl p-5 text-center">
//             {item.name}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default SearchComponent;

// best practice
function SearchComponent() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // wait 300ms

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    fetch("http://localhost:5173/data/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => setItems([])); // safety
  }, []);

  // filtered result
  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const showNotFound = query && items.length > 0 && filteredItems.length === 0;

  return (
    <div className="grid place-content-center">
      {/* Search Input */}
      <input
        className="p-4 m-5 w-[800px] place-self-center placeholder:text-orange-600
                   border-2 border-blue-600 rounded-md text-xl text-yellow-300
                   focus:ring-1 outline-orange-600 focus:border-0"
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Result */}
      <div className="grid grid-cols-5 gap-5 m-8">
        {showNotFound && (
          <h2 className="col-span-5 text-center text-5xl p-5 font-bold bg-green-600">
            Not Found
          </h2>
        )}

        {filteredItems.slice(0, 10).map((item) => (
          <p key={item.id} className="bg-orange-600 text-3xl p-5 text-center">
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SearchComponent;
