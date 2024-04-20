
export const useSearchableTable = (data,searchTerm) => {
  

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return { searchTerm, filteredData };
};