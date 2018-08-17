<template src="./addTodo.html"></template>

<script>
    export default {
        data() {
            return {
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
        created() {},
        methods: {
            addTodo(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        // todoをlocalStorageに追加
                        let storageData = this.getTodoListFromStorage();
                        storageData.push(this.todoForm);

                        this.$localStorage.set("todoList", JSON.stringify(storageData));
                        // 完了メッセージ
                        this.$alert("added todoList", "Info", {
                            confirmButtonText: "OK",
                            callback: () => {
                                // 登録完了後formを初期化
                                this.$refs[formName].resetFields();
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