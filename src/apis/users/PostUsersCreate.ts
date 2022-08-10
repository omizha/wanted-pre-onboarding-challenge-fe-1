interface PostUsersCreateDto {
    email: string;
    password: string;
}

export async function PostUsersCreate(dto: PostUsersCreateDto) {
    const response = await fetch("http://localhost:8080/users/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dto),
    });

    const { token, message } = await response.json();

    if (!token) {
        throw new Error(message);
    }

    return { token, message };
}
