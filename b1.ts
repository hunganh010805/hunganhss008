function ktra(input: number | boolean | string | null | undefined) {
    if(input===null){
        console.log("null");
        
    }else{
        console.log(typeof input);
    }
    
}
let a = null
ktra(1)
ktra("string")
ktra(a)
ktra(undefined)
ktra(true)

