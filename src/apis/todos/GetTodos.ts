interface GetTodosDto {}

interface GetTodosRes {
    data?: {
        title: string;
        content: string;
        id: string;
        createdAt: string;
        updatedAt: string;
    }[];

    /**
     * Error일 때 나타나는 메시지
     */
    details?: string;
}

export async function GetTodos(loginToken: string): Promise<GetTodosRes> {
    const response = await fetch("http://localhost:8080/todos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: loginToken,
        },
    });

    const { data, details }: GetTodosRes = await response.json();

    if (details) {
        throw new Error(details);
    }

    return { data, details };
}
