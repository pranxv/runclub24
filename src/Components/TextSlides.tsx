import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function TextSlides(){
    return(
        <div className="flex">
            <h1 style={{position: "absolute", top:"30vh", left:"25vw"}}>
                free
            </h1>
            <h1 style={{position: "absolute", top:"40vh", left:"65vw"}}>
                tomorrow
            </h1>
            <h1 style={{position: "absolute", top:"50vh", left:"100vh"}}>
            morning?
            </h1>
        </div>
    )
}