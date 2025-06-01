const username = sessionStorage.getItem("username");

if (!username) {
    window.location.replace("/signin");
}

const socket = io("", { query: { username } });
