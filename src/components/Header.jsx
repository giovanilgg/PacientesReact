import logo from '../img/huella.png'
function Header() {
  return(
   <div className="md:flex   grid justify-items-center" > 
    <img width='200' height='200' src={logo} alt="Imagen veterinaria" />
    <h1 className="font-black text-4xl text-center md:w-2/3 md:text-5xl">Seguimiento pacientes {' '} <span className="text-indigo-600">Veterinaria</span></h1>

   </div>

  )
}
export default Header;