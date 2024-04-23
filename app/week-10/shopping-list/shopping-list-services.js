import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function fetchItems(userID) {
    const itemsList = [];

    try {
        const userItemsRef = collection(db, 'users/${userID}/items');
        const itemsQuerySnapshot = await getDocs(userItemsRef);

        itemsQuerySnapshot.forEach((doc) => {
            itemsList.push({
                id: doc.id,
                data: doc.data(),
            });
        });
    } catch (error) {
        console.error("Error fetching items:", error);
    }
    return itemsList;
}

export async function addItemToCollection(userId, item) {
    try {
        const userItemsRef = collection(db, 'users/${userID}/items');
        const newItemRef = await addDoc(userItemsRef, item);

        return newItemRef.id;
    } catch (error) {
        console.error("Error adding new item:", error);
        return null;
    }
}
