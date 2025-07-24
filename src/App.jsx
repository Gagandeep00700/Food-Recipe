import Search from './Search'
import { recipes } from './recipes'
import Card from './Card'
import { useState ,useEffect} from 'react'
import { recope } from './recope'
const App = () => {
  const [recipez,setRecipez]=useState([])
  const [searchTerm,setSearchTerm]=useState('')
   const filteredRecipes = recipez.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );
   useEffect(() => {
    const getRecipes = async (searchTerm) => {
      try {
        const data = await recope(searchTerm);
        setRecipez(data.meals || []);
        console.log(data.meals)// handle null fallback
      } catch (err) {
        console.error("Error:", err);
      }
    };

    getRecipes(searchTerm);
  }, [searchTerm]);
  return (
    <div className='container' style={{minHeight:'100vh',minWidth:'100vw'}}>
        <h1 style={{textAlign:'center',color:'#ff8000', minHeight:'30px'}}>Food Recipe App</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
         {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <Card key={index} name={recipe.strMeal} recipe={recipe.strInstructions} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  )
}

export default App