import { ImageProps, Image as DImage, useScroll } from "@react-three/drei";  
import { useThree } from "@react-three/fiber";
import { use, useRef } from "react"

function DreiImage(props: ImageProps){
    const ref = useRef(null);
    const group = useRef(null);
    const Scroll = useScroll();
    return(
        <group ref={group}>
            <DImage ref={ref}{...props} />
        </group>
    )

}
function Slide({urls = [' '], ...props}){
    const ref = useRef(null);
    const {width} =  useThree((state)=> state.viewport)
    const w = width < 10 ? 1.5/3 : 1/3

    return(
        <group {...props}>
            <DreiImage position={[-width*w ,0,0]} scale={[5,7]} url = {urls[0]} />
        </group>
    )
}

export default function Slides(){
    const { width } =  useThree((state)=> state.viewport)
    return(
        <>
        <Slide position={[0, 0, 0]} 
        urls={[
        "https://images.unsplash.com/photo-1597892657493-6847b9640bac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1574288763758-a17ce17c4088?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522040942177-269680274214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}
        />
        <Slide position={[width * 1, 0, 0]} 
        urls={[
        "https://images.unsplash.com/photo-1664220052736-95783fcc930b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1574288763758-a17ce17c4088?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522040942177-269680274214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}/>
        <Slide position={[width * 2,0,0]} 
        urls={[
        "https://images.unsplash.com/photo-1574288763758-a17ce17c4088?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1574288763758-a17ce17c4088?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522040942177-269680274214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}/> 
       {/* <Slide position={[1,0,0]} urls={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqk9yug_4E9I-fvUTcel822eW6GGFWcgaPTGCBh0tQQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqk9yug_4E9I-fvUTcel822eW6GGFWcgaPTGCBh0tQQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqk9yug_4E9I-fvUTcel822eW6GGFWcgaPTGCBh0tQQ&s"]}/> */}
</>
    )
}