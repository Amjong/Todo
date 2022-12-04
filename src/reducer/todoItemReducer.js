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
    default:
      return undefined;
  }
}
