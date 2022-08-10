interface DeleteTodoDto {}

interface DeleteTodoRes {
    data?: null;

    /**
     * Error일 때 나타나는 메시지
     */
    details?: string;
}

export async function DeleteTodo(loginToken: string): Promise<DeleteTodoRes> {
    const response = await fetch(`http://localhost:8080/todos`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: loginToken,
        },
    });

    const { data, details } = await response.json();

    if (details) {
        throw new Error(details);
    }

    return { data, details };
}
