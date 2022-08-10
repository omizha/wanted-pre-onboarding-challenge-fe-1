export function isValidatedEmail(email: string) {
    // FIXME: 뭔가 머리아픈 코드... 더 개선시킬 수 있을까?
    switch (true) {
        case !email.includes("@"):
        case !email.includes("."):
        case !(email.length > 0):
            return false;
    }
    //////////////////////////////////////////////////

    return true;
}
