//Va a contener el ItemContaoner y el Favoritos Container
import React from 'react';
import  ItemListContainer  from '../ItemListContainer/ItemListContainer';
import FavoritosContainer from '../FavoritosContainer/FavoritosContainer';
import '../Container/Container.css'


function CustomContainer() {
  return (

    <div >
    
          <div className="itemCont">
        
                <ItemListContainer />
         
          </div>
       
          <div className="favoritosCont">
            <FavoritosContainer />
          </div>

    

    </div>
  );
}


export default CustomContainer;
