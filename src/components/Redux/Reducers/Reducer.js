let initailState = {
  list: [],
};
const Todos = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.todo],
      };

    case "DEL_TODO":
        let newList = state.list.filter((elmId)=>elmId.id !== action.id)
           
        
        return{
            ...state,
          list:newList
        }

    default:
      return state;
  }
};

export default Todos;
