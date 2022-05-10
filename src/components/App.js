// create your App component here
const { useEffect, useState } = require("react")

function App (){

    const [dogList,setDogList]=useState([])
    const [isLoaded,setIsLoaded]=useState(false)
      
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then((data)=>{
            setDogList(data.message)
            setIsLoaded(true)
        })
    },[])
    
    if(!isLoaded) {
        return<p>Loading..</p>
    }
    return(
        <div>
           <img src={dogList} alt="A Random Dog"/>
        </div>
    )
}

export default App