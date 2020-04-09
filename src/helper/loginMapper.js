export const loginMapper = (userAuth) => {
    return {
        id: userAuth.user.uid,
        name: userAuth.user.displayName,
        email: userAuth.user.email
    }
}