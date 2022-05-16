export const timestampToDate = timestamp => {
    const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date(timestamp);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();

    return `${day} ${months[month]} ${year}`;
}

export const firstLetterUppercase = word => {
    const splitedWord = word.split('');
    const firstLetter = splitedWord[0];
    const result = [firstLetter.toUpperCase(), ...splitedWord.slice(1)];
    return result.join('');
}

export const statusToColor = status => {
    switch(status) {
        case "approved":
            return "green"
        case "pending":
            return "blue";
        default:
            return ""
    }
}