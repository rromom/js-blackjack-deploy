import _ from 'underscore' 

// export const miNombre = 'Ricardo';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} TiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, TiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    // if ( tiposDeCarta.length > 0 ) throw new Error('TiposDeCarta tiene que ser un arreglo de string');
    if (!TiposEspeciales || TiposEspeciales.length === 0 ) 
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');


    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

// export default crearDeck;