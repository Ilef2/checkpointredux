import { v4 as uuidv4} from "uuid";
import { ADD_TODO, DELETE_TODO, TOGGLE, EDIT, TOGGLE_FILTER } from "./action/Type";
const initialState = { 
  filter: 'All',

    todoS : [{ 
      id: uuidv4(),
      description : "write code",
      isDone: true,

    },{
      id: uuidv4(),
      description : "do exercice",
      isDone: false,

    },{
      id: uuidv4(),
      description : "reading",
      isDone: true,

    }
    ]
  };
  const TodoReducer = (state=initialState  , {type ,payload}) => {
    switch (type) {
      case ADD_TODO:
        return{
         
          ...state,
          todoS:[...state.todoS,payload]
          
        }
      case DELETE_TODO :
        return{
          ...state,
          todoS : state.todoS.filter(elm => elm.id !==payload)
        }
        case TOGGLE :
          return{
            ...state,
            todoS : state.todoS.map(elm=> elm.id === payload ? {...elm , isDone: !elm.isDone} : elm )
          }
         case EDIT :
            return {
                ...state ,
                todoS : state.todoS.map(elm=>elm.id === payload.id ? payload : elm)
            }

        case TOGGLE_FILTER : 
            return {
                ...state,
                filter : payload
            }
        
    
      default:
        return state;
    }
    
  }
  export default TodoReducer 
