export function isValidatedPassword(password: string) {
    // FIXME: 뭔가 머리아픈 코드... 더 개선시킬 수 있을까?
    switch (true) {
        case !(password.length >= 8):
            return false;
    }
    //////////////////////////////////////////////////

    return true;
}
