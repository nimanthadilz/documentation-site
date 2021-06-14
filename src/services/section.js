export function getSection(id) {
    return fetch(`http://localhost:1337/sections/${id}`)
    .then((data) => data.json())
}