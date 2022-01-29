import { app, Component } from 'apprun';

export default class Home extends Component {
  state = {
    todo: '',
    listTodos: [],
  };

  mounted = () => {
    this.run('loadTodos');
  }
  
  listView = listTodos => {
    return listTodos.map((todo, i) => {
      return (
        <li class="todo">
          <input
            type="checkbox"
            checked={todo.checked}
            onchange={e => this.run('checkTodo', e.target.checked, i)}
          />
          <span
            id={`todo-${i}`}
            class="todo-text"
            style={`text-decoration: ${todo.checked ? 'line-through;': 'none;'}`}
          >
            {todo.text}
          </span>
          <span class="todo-x" onclick={e => this.run('deleteTodo', i)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </li>
      )
    });
  }
  
  view = ({todo, listTodos}) => {
  return (
    <div id="home">
      <input
        type="text"
        id="input-todo"
        $bind="todo"
        onkeypress={e => this.run('keyPress', e)}
      />
      <ul>
        {this.listView(listTodos)}
      </ul>
      {
        listTodos.length > 0 && 
        <p id="clear-todos" onclick={e => this.run('clearTodos')}>Reset Todos</p>
      }
    </div>
  );
  }
  
  update = {
    'clearTodos': (state) => {
      return {todo: state.todo, listTodos: []}
    },
    'loadTodos': async (state) => {
      const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
      try {
        const response = await fetch(url);
        const json = await response.json();
        const listTodos = json.map((todo) => {
          return {
            checked: todo.completed,
            text: todo.title
          };
        });
        return {todo: state.todo, listTodos};
      }
      catch(e) {
        console.log('Error loading Todos', e);
      }
      return state;
    },
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
}

