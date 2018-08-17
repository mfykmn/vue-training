import TodoList from '../components/todoList/todoList.vue';
import AddTodo from '../components/addTodo/addTodo.vue';
import EditTodo from '../components/editTodo/editTodo.vue';
import Top from '../components/top/top.vue';

export default [
    { path: "/", component: Top },
    { path: "/TodoList", component: TodoList },
    { path: "/AddTodo", component: AddTodo },
    { path: "/EditTodo/:index", component: EditTodo },
]