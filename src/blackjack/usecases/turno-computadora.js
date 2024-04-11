import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * 
 * @param {Number} puntosMinimos Que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {Array<String>} deck cartas
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('PuntosMinimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');
    if ( !deck ) throw new Error('El deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">

        // TO DO: Crear Carta HTML
        let imgCarta = crearCartaHtml( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}