interface GetTodoByIdDto {}

interface GetTodoByIdRes {
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

export async function GetTodoById(
    loginToken: string,
    id: string | number
): Promise<GetTodoByIdRes> {
    const response = await fetch(`http://localhost:8080/todos/${+id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: loginToken,
        },
    });

    const { data, details }: GetTodoByIdRes = await response.json();

    if (details) {
        throw new Error(details);
    }

    return { data, details };
}
