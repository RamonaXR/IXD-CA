export function selectJackets(jacket) {
    const jackets = [];
    
    for (let i = 0; i < 3; i++) {
        jackets.push(jacket[i].image);
    }
    return jackets;
}