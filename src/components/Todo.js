import React from 'react'

import style from "./todo.module.css";

const Todo = (props) => {

    const {title, desc,} = props.todo

  return (
   <article className={style.todo}>
    <div>
        <h3>{title}</h3>
        <p className={style.p}>{desc}</p>
        
    </div>
    <div>
        <button className={style.btn}>
           <i className="fa_fa-trash fa-2x"></i>
        </button>
    </div>
   </article>
  )
}

export default Todo
