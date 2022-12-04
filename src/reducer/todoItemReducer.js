export default function todoItemReducer(todoItems, action) {
  switch (action.type) {
    case 'add': {
      return {
        count: todoItems.count + 1,
        arr: [
          ...todoItems.arr,
          {
            id: todoItems.count + 1,
            name: action.text,
            state: 'active',
          },
        ],
      };
    }
    case 'remove': {
      return {
        ...todoItems,
        arr: todoItems.arr.filter((item) => item.name !== action.text),
      };
    }
    case 'check': {
      return {
        ...todoItems,
        arr: todoItems.arr.map((item) => {
          if (item.name === action.text) {
            item.state = action.checked === true ? 'completed' : 'active';
          }
          return item;
        }),
      };
    }
    default:
      return undefined;
  }
}
