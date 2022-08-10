interface PutUpdateTodoDto {
    title: string;
    content: string;
}

interface PutUpdateTodoRes {
    data?: {
        title: string;
        content: string;
        id: string;
        createdAt: string;
        updatedAt: string;
    };

    /**
     * Error일 때 나타나는 메시지
     */
    details?: string;
}

export async function PutUpdateTodo(
    loginToken: string,
    dto: PutUpdateTodoDto
): Promise<PutUpdateTodoRes> {
    const response = await fetch(`http://localhost:8080/todos`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: loginToken,
        },
        body: JSON.stringify(dto),
    });

    const { data, details } = await response.json();

    if (details) {
        throw new Error(details);
    }

    return { data, details };
}
