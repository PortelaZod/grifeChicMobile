import Itens from "@/app/outro";
import { app } from "./firebase";
import { getDocs, collection, getFirestore } from "firebase/firestore";

type itens = {
    name: string,
    img: string,
    preco: string,
    cod: string,
    grade: string[],
    plus: boolean,
    colecao: string,
}

export default class DB {

    moda;

    constructor(moda: string) {
        this.moda = moda
    }

    async getFirebaseData() {
        const data: itens[] = []
        const db = getFirestore(app)
        const querySnapshot = await getDocs(collection(db, this.moda))
        querySnapshot.forEach(item => data.push(item.data() as itens))
        return data;
    }

    log(){
        console.log('oi')
    }

}