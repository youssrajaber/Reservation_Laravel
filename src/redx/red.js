
const initState={
    st:"f1"
}

export default function Red(state=initState,action){
    
    if(action.type==="f3"){
        return{st:"f3"}
    } 
    if(action.type=="f2"){
        return{st:"f2"}
    }
    if(action.type=="f4"){
        return{st:"f4"}
    }
    
    return state

}