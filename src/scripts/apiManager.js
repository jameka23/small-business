const API = {
    getEmployees () {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(r => r.json())
    }
}