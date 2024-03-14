
function Desription(props)
{
    return(
        <div style={{overflow:"none",height:"30px",width:"400px",padding:"20px"}}>
        
        <div style={{marginTop:"-5px",marginLeft:"60px"}}>
           <h5 style={{color:"purple","margin":"3px","padding":"0px"}}>{props.tags}</h5> 
           <p style={{marginTop:"-3px","margin":"3px","padding":"0px"}}>{props.description}</p><br/>
        </div>

        </div>
    )
}

export default Desription;
