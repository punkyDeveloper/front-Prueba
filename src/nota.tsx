
import Nav from './assets/componets/componentesAdicionales/nav.tsx'
import Crearnota from "./assets/componets/nota/Crear.tsx";
import Notas from "./assets/componets/nota/traer.tsx"

export default function Example() {
        
    return (

        <>
        <div className="  justify-center min-h-screen bg-gray-900 text-white">

                <Nav/>


                <Crearnota />

                <Notas />
        </div>


        </>
        );
}