// function getGitHubProfile(username) {
//     let gitHubProfile = fetch(`https://api.github.com/users/${username}`)
//     .then(response => response.json())
//     .then(convertedResponse => console.log(convertedResponse))
// }

function getGitHubProfile(username) {
    let gitHubProfile = fetch(`https://api.github.com/users/${username}/repos`)
    .then(function(response) {
        return response.json()
    })
    .then(function(convertedResponse) {
        console.log(convertedResponse)
    })
}

// async function getGitHubProfile(username) {
//     let gitHubProfile = await fetch(`https://api.github.com/users/${username}`)
//     let gitHubData = await gitHubProfile.json()
//     console.log(gitHubData.name);
//     console.log(gitHubData.id);
//     console.log('filipe teste')
// }

// async function getGitHubProfile(username) {
//     let gitHubProfile = await fetch(`https://api.github.com/users/${username}`)
//     let gitHubData = await gitHubProfile.json()
//     console.log(gitHubData);
//     console.log('filipe teste')
// }


// async function getGitHubProfile() {
//     let gitHubProfile = await fetch('https://api.github.com/users/GKPavesi')
//     let gitHubProfile1 = await fetch('https://api.github.com/users/filipelevar')
//     let gitHubProfile2 = await fetch('https://api.github.com/users/rafaballerini')
//     let gitHubData = await gitHubProfile.json()
//     let gitHubData2 = await gitHubProfile1.json()
//     let gitHubData3= await gitHubProfile2.json()
//     console.log(gitHubData, gitHubData2, gitHubData3);
// }

getGitHubProfile('filipelevar')

// PROMISSE



//não é uma soma, 1 + 1
//ctrl k c, ctrl k u

