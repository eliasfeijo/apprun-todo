import app from 'apprun';

const state = {
  todo: '',
  listTodos: [],
};

const listView = listTodos => {
  return listTodos.map((todo, i) => {
    return (
      <li style="display: flex; align-items: center;">
        <input
          type="checkbox"
          checked={todo.checked}
          onchange={e => app.run('checkTodo', e.target.checked, i)}
        />
        <span
          id={`todo-${i}`}
          style={"margin-left: 8px; margin-right: 8px;" + ` text-decoration: ${todo.checked ? 'line-through;': 'none;'}`}
        >
          {todo.text}
        </span>
        <span style="color: red; position: relative; top: 2px; cursor: pointer;" onclick={e => app.run('deleteTodo', i)}>
          <svg xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </li>
    )
  });
}

const view = ({todo, listTodos}) => {
return (
  <div>
    <h1>Todo Application</h1>
    <input type="text" $bind="todo" onkeypress={e => app.run('keyPress', e)} />
    <ul style="list-style-type: none; padding: 8px;">
      {listView(listTodos)}
    </ul>
  </div>
);
}

const update = {
  'keyPress': (state, e) => {
    if(e.code === 'Enter' && state.todo.trim() !== '') {
      return {
        todo: '',
        listTodos: [...state.listTodos, {checked: false, text: state.todo.trim()}]
      }
    }
    return state;
  },
  'checkTodo': (state, checked, i) => {
    state.listTodos[i].checked = checked;
    return state;
  },
  'deleteTodo': (state, i) => {
    const listTodos = state.listTodos.filter((todo, index) => {
      return index !== i;
    });
    return {todo: state.todo, listTodos}
  }
};

app.start(document.body, state, view, update);
