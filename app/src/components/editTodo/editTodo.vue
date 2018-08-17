<template src="./editTodo.html"></template>

<script>
    export default {
        data() {
            return {
                targetIndex: 0,
                todoList: [],
                todoForm: {
                    title: "",
                    detail: ""
                },
                rules: {
                    title: [
                        { required: true, message: "Please input title", trigger: "change" },
                        {
                            max: 15,
                            message: "Length should be 1 to 15",
                            trigger: "change"
                        }
                    ],
                    detail: [
                        { required: true, message: "Please input detail", trigger: "change" },
                        {
                            max: 100,
                            message: "Length should be 1 to 100",
                            trigger: "change"
                        }
                    ]
                }
            };
        },
        created() {
            // 対象データを取得
            this.targetIndex = this.$route.params['index'];
            this.todoList = this.getTodoListFromStorage();
            if (this.todoList.length != 0) {
                this.todoForm = this.todoList[this.targetIndex];
            }
        },
        methods: {
            updateTodo(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        // 対象データ更新
                        this.todoList[this.targetIndex] = this.todoForm;
                        // localStorageに追加
                        this.$localStorage.set("todoList", JSON.stringify(this.todoList));
                        // 完了メッセージ
                        this.$alert("updated todoList", "Info", {
                            confirmButtonText: "OK",
                            callback: () => {
                                this.$router.push("/TodoList");
                            }
                        });
                    } else {
                        return false;
                    }
                });
            },
            getTodoListFromStorage() {
                let data = this.$localStorage.get("todoList");
                // nullの場合空配列を返却
                if (!data) {
                    return [];
                }
                // jsonを返却
                return JSON.parse(data);
            }
        }
    };
</script>