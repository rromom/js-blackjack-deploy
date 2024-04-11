/**
 * Retorna la primera carta del deck y elimina del arreglo siempre y cuando el deck no este vacío
 * @param {Array<string>} deck Array de Cartas ['AC','2C', ...]
 * @returns {String} Retorna la  carta del deck
 */
export const pedirCarta = ( deck ) => {
    if ( !deck || deck.length === 0 ) 
        throw new Error('No hay cartas en el deck');
    const carta = deck.pop();
    return carta;
}