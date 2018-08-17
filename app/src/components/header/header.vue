<template src="./header.html"></template>

<script>
    export default {
        data() {
            return {
                menus: [
                    { path: "/", text: "Top" },
                    { path: "/TodoList", text: "TodoList" },
                    { path: "/AddTodo", text: "AddTodo" },
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push(key);
            }
        }
    }
</script>