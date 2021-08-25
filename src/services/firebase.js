import {firebaseApp, FieldValue} from '../lib/firebase';

export async function doesUsernameExists(username) {
    const result = await firebaseApp.firestore().collection('users').where('username', "==", username ).get();

    result.docs.map(user => console.log(user.data()));
    return result.docs.find(user => user.data().username == username )
}