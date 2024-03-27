const Search = () => {
  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="flex items-center border rounded-lg bg-white shadow-sm dark:bg-gray-950">
        <div className="w-5 h-5 m-2 text-gray-300 pointer-events-none dark:text-gray-700" />
        <input
          className="w-full h-10 bg-transparent appearance-none border-0 focus:outline-none focus:ring-0 dark:placeholder-gray-400"
          placeholder="Search for jobs"
          type="text"
        />
      </div>
      <div className="flex items-center border rounded-lg bg-white shadow-sm dark:bg-gray-950">
        <div className="w-5 h-5 m-2 text-gray-300 pointer-events-none dark:text-gray-700" />
        <input
          className="w-full h-10 bg-transparent appearance-none border-0 focus:outline-none focus:ring-0 dark:placeholder-gray-400"
          placeholder="City, state, zip code"
          type="text"
        />
      </div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 md:col-start-3">
        Search
      </button>
    </form>
  );
};

export default Search;
