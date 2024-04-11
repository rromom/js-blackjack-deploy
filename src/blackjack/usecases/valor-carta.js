
/**
 * Selecciona y devuelve el valor de la Carta
 * @param {String} carta Ejemplo: '2C'
 * @returns {Number}  Ejemplo: 2
 */
export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error('Es ncesario la Carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}