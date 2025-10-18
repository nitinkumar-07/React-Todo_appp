// import React, { useRef, useState } from 'react'



// const TodoForm = ({ onAddTodo }) => {

//     const [title, settitle] = useState("")
//     const [isEdit, setisEdit] = useState(false);
//     const [editValue, seteditValue] = useState("")

//     const inputRef = useRef(null);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (title.trim() === "") return;
//         onAddTodo(title)
//         settitle("");
//     }

//     const handleEdit = (tsk) => {
//     setisEdit(true);
//     settitle(tsk);
//     seteditValue(tsk);
//     inputRef.current.focus();
//   }

//     // const handleEdit=()=>{

//     // }

//     return (

//         <form onSubmit={submitHandler} className="input-container">

//             <input type="text"
//                 placeholder="Add something to your list..."
//                 value={title}
//                 // ref={inputRef}
//                 onChange={(e) => {
//                     settitle(e.target.value)
//                 }}
//                 onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                         submitHandler(e);
//                     }
//                 }}
//             />

//             <button type="submit" className="btn">
//                 {isEdit ? "Update Task" : "Add Task"}
//             </button>

//         </form>

//     )
// }

// export default TodoForm