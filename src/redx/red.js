
const initState={
    st:"f1",
    f1:{
        from:"",
        to:"",
        date:"",
        passengers:0,
        classs:""
    },
    f2:{
        Date:"",
        Scity:"",
        Ecity:"",
        duration:"",
        feh:"",
        fsh:"",
        classs:"",
        price:""
    },
    f3:{
        fname:"",
        lname:"",
        Dateb:"",
        nationamity:"",
        pasport:"",
        country:"",
        email:"",
        phonen:"",
    },
    flight:{
        fname:"",
        lname:"",
        Dateb:"",
        Scity:"",
        Ecity:"",
        duration:"",
        email:"",
        feh:"",
        fsh:"",
        classs:"",
        price:""
    }
}

export default function Red(state=initState,action){
    
    if(action.type==="f3"){
        let T={
            Scity:action.payload[0],Ecity:action.payload[1],
            fsh:action.payload[2],feh:action.payload[3],duration:action.payload[4],
            price:action.payload[5],Date:action.payload[6],classs:action.payload[7]
        }
        return{f2:T,st:"f3"}
    }
    if(action.type=="f4"){
        let T={
            fname:action.payload[0],lname:action.payload[1],
            Dateb:action.payload[2],nationamity:action.payload[3],pasport:action.payload[4],
            country:action.payload[5],email:action.payload[6],phonen:action.payload[7]
        }
        return{f3:T,st:"f4",f2:state.f2}
    }

    if(action.type=="f1values"){
        let T={
            from:action.payload[0],to:action.payload[1],
            date:action.payload[2],passengers:action.payload[3],classs:action.payload[4]
        }
        return{f1:T,st:"f2"}
    }
    if(action.type=="f1"){
        return{st:"f1"}
    }
    
    return state

}