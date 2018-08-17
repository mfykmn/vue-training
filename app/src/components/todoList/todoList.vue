<template src="./todoList.html"></template>

<script>
    export default {
        data() {
            return {
                todo: {
                    title: "",
                    detail: "",
                },
                todoList: [],
                centerDialogVisible: false,
            }
        },
        created() {
            this.todoList = this.getTodoListFromStorage();
        },
        methods: {
            getTodoListFromStorage() {
                let data = this.$localStorage.get("todoList");
                // nullの場合空配列を返却
                if (!data) {
                    return [];
                }
                // jsonを返却
                return JSON.parse(data);
            },
            setTodoListToStorage(data) {
                this.$localStorage.set("todoList", JSON.stringify(data));
            },
            handleDetail(data) {
                this.todo = data;
                this.centerDialogVisible = true;
            },
            handleEdit(targetIndex) {
                this.$router.push("/EditTodo/" + targetIndex);
            },
            handleDelete(targetIndex) {
                // callbackから直接thisにアクセス出来ないため、ローカル変数経由でアクセスする
                let todoList = this.todoList;

                // 配列から対象レコードを除去
                todoList.some(function(currentData, index) {
                    if (index == targetIndex) todoList.splice(index, 1);
                });

                // ストレージ更新
                this.setTodoListToStorage(this.todoList);
            }
        }
    }
</script>