/**
 * Retorno el elemento html de la carta
 * @param {String} carta Carta que se va a mostrar en la interfaz 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHtml = ( carta ) => {
    if ( !carta )
        throw new Error('La carta es necesaria');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta
   
}