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
    },
    {
        name: "Amanda Brown",
        role: "SECURITY HEAD",
        image: "./assets/images/teams-img2.png",
        socials: {
            facebook: "https://www.facebook.com/example2",
            twitter: "https://twitter.com/example2",
            instagram: "https://www.instagram.com/example2"
        }
    },
    {
        name: "Duglas Rovland",
        role: "CYBER ANALYST",
        image: "./assets/images/teams-img3.png",
        socials: {
            facebook: "https://www.facebook.com/example3",
            twitter: "https://twitter.com/example3",
            instagram: "https://www.instagram.com/example3"
        }
    },
    {
        name: "Christin Jonson",
        role: "ETHICAL HACKER",
        image: "./assets/images/teams-img4.png",
        socials: {
            facebook: "https://www.facebook.com/example4",
            twitter: "https://twitter.com/example4",
            instagram: "https://www.instagram.com/example4"
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
                    <div class="hover_box_plus">
                        <ul class="p-0 text-center">
                            <li><a href="${member.socials.facebook}" class="text-decoration-none" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="${member.socials.twitter}" class="text-decoration-none" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="${member.socials.instagram}" class="text-decoration-none" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
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
