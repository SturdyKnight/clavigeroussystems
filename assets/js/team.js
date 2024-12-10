// Team data array
const teamMembers = [
    {
        name: "Aashish Kavishwar",
        role: "CEO & FOUNDER",
        image: "./assets/images/profile.jpeg",
        socials: {
            facebook: "https://www.facebook.com/example",
            twitter: "https://twitter.com/example",
            instagram: "https://www.instagram.com/example"
        }
    }
];

// Function to create team member cards dynamically
function createTeamCard(member) {
    return `
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="combine-section-content">
                <figure class="figf1">
                    <img src="${member.image}" alt="${member.name}">
                </figure>
                <div class="teams-img-content">
                    <div class="teams-text">
                        <h5>${member.name}</h5>
                        <p>${member.role}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Inject team member cards into the team section
const teamSection = document.getElementById("team-section");
teamMembers.forEach(member => {
    teamSection.innerHTML += createTeamCard(member);
});
