import { renderSpecific } from "../rendering/renderSpecific.js";
import { getID } from "../data/getID.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js"

export async function createSpecific(){
    try {
        const id = getID();
        const newURL = url + "/" + id;
        const jacket = await fetchData(newURL);
        renderSpecific(jacket);
    } catch (error) {
        console.log(error);
    }
}