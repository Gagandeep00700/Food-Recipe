export const recope=async(searchTerm)=>{
    const fetchingData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    const fetchedData=await fetchingData.json()
    return fetchedData
}