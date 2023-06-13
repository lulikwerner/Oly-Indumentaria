//Va a contener a mis favoritos
import Favoritos from '../Favoritos/Favoritos'
import '../FavoritosContainer/FavoritosContainer.css'

function FavoritosContainer() {
    const styles = {
        color: "#F5037C",
        fontSize: 50,
        marginTop: "8%",
      };
  return (
    <div>
        <div className="titleFavs">
        <h1 >Nuestros Favs!</h1>
        </div>
        <Favoritos/>
    </div>
  )
}

export default FavoritosContainer