const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

grtUser("Mmushtaq50");

async function grtUser(user) {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);

    async function getRepos(username) {
        const resp = await fetch(APIURL + username + '/repos');
        const respData = await resp.json();

        addReposToCard(respData);

    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div class="img-container">
                <img class="avatar" src="${user.avatar_url}"
                 alt="${user.name}" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class="info">
               <li> <strong> Followers </strong> ${user.followers}</li>
               <li> <strong> Following </strong> ${user.following}</li>
               <li> <strong> Repos </strong> ${user.public_respo}</li>
            </ul>
            <div class="repos" id="repos">

            </div>

        </div>
   </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.forEach(repo => {
        const repoE1 = document.createElement('a');
        repoEl.classList.add('repo');

        //repoEl.href = ;
        repoEl.innerText = repo.name;
    })

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        grtUser(user);

        search.value = '';
    }
})