
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () =>{

    const navigate = useNavigate();

    return(
        <div>
            
            <h1>Product</h1> 
            <p>This is a Prodiuct page</p>
             
             {/* <button onClick={()=>navigate("/product/apple")}>Apple</button>  */}
             {/* <button onClick={()=>navigate("/apple")}>Apple</button> */}
             <button onClick={()=>navigate("")}>Apple</button>
             <button onClick={()=>navigate("")}>Samsung</button>
             <button onClick={()=>navigate("jio")}>Jio</button>
             
             

            <Outlet />
             {/* <br />
            <button onClick={()=>navigate(-1)}> Back</button>
            <button onClick={()=>navigate(1)}> Next</button> */}
            
        </div>
    )
}

export default Product;