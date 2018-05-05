export default g => {
    const it = g()
    (function iterate(val){
        [it.next( val )]
            .map(x => (
                !x.done && "then" in x.value
                ? x.value.then( iterate )
                : setTimeout( function(){
                    iterate( x.value )
                }, 0)
            ))
    })()
}