export function currentDate() {
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth();
    let d = n.getDate() + 1;
    const currentDate = `${y}-${m}-${d}`;
    return {currentDate};
}
