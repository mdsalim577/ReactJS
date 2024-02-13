// export default function TabButton(props){

//     function HandleClick() {
//         console.log("you clicked the button!!");
//     }
//     return <li><button onClick={HandleClick}>{props.children}</button></li>
// }


// example 2: for children
export default function TabButton({ children, onSelect }) {
    console.log("tabButton got rendered!!")
    function HandleClick() {
        console.log("you clicked the button!!");
    }
    return <li><button onClick={onSelect}>{children}</button></li>
}
