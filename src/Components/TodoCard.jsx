import PropTypes from "prop-types"
import MyButton from "./MyButton"
import "./Todo.Css"

const TodoCard = ({todoDone, todoEdit, todoDelete, todoText, todoId}) => {
  return (
   <div className="todo">
    <p className="text" id={todoId}>
        {todoText}
    </p>
    <div>

        <MyButton bgColor="green" func={todoDone}>
        Done
        </MyButton>
        <MyButton bgColor="Orange" func={todoDone}>
        Edit
        </MyButton>
        <MyButton bgColor="Red" func={todoDone}>
        Delete
        </MyButton>
    </div>
   </div>
  )
};

TodoCard.propTypes = {
    todoText: PropTypes.string,
    todoId: PropTypes.number,
    todoDone: PropTypes.func,
    todoEdit: PropTypes.func,
    todoDelete: PropTypes.func,
    isEditable: PropTypes.bool,
}

export default TodoCard