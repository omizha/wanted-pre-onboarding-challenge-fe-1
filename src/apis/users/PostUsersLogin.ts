interface PostUsersLoginDto {
    email: string;
    password: string;
}

export async function PostUsersLogin(dto: PostUsersLoginDto) {
    const response = await fetch("http://localhost:8080/users/login", {
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
