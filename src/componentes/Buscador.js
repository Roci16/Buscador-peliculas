import { useSearchParams } from "react-router-dom";
import { useState} from "react"

const Buscador = ()=>{

    const [ valor, setValor] = useState("")
    const [searchParams, setSearchParams] = useSearchParams({
        query: ""
    })

    const handleChange = (e)=> setValor(e.target.value)
   
    const handleSubmit = (e)=>{
        setSearchParams({
            query: valor
        })
        console.log(e.target.value);
           e.preventDefault()     
    }



    return(
        <section>
            <h2>Buscador</h2>
             <form onSubmit={handleSubmit} >   
                <input onChange={handleChange} type="text" placeholder="Buscador" value={valor} /> 
                <input type="submit" value="Buscar"/>
            </form>
        </section>
       
    )
    
}
export default Buscador;