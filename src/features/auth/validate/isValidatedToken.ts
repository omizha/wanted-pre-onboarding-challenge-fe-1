export function isValidatedToken(loginToken: string | null) {
    // FIXME: 뭔가 머리아픈 코드... 더 개선시킬 수 있을까?
    switch (true) {
        case !(loginToken !== null):
            return false;
    }
    //////////////////////////////////////////////////

    return true;
}
