export const loginMapper = (userDoc, userAuth) => {
    return {
        id: userAuth.user.uid,
        name: userDoc._data.name,
        email: userDoc._data.email
    }
}