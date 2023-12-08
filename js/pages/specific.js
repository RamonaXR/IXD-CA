import { renderSpecific } from "../rendering/renderSpecific.js";
import { getID } from "../data/getID.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js"

export async function createSpecific(){
    try {
        const id = getID();
        console.log(id);
        const newURL = url + "/" + id;
        console.log(newURL);
        const jacket = await fetchData(newURL);
        console.log(jacket);
        renderSpecific(jacket);
    } catch (error) {
        
    }
}