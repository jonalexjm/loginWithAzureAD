// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");
const mailButton = document.getElementById("readMail");
const profileButton = document.getElementById("seeProfile");
const profileDiv = document.getElementById("profile-div");

function showWelcomeMessage(account) {
    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    welcomeDiv.innerHTML = `Welcome ${account.username}`;
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
}

function updateUI(data, endpoint) {
    console.log('Graph API responded at: ' + new Date().toString());

    if (endpoint === graphConfig.graphMeEndpoint) {
        const bussinessPhones = document.createElement('p');
        bussinessPhones.innerHTML = "<strong>bussinessPhones: </strong> Telefonos data.businessPhones[0]" ;
        const  displayName = document.createElement('p');
        displayName.innerHTML = "<strong>DisplayName: </strong>" + data.displayName;
        const givenName = document.createElement('p');
        givenName.innerHTML = "<strong>givenName: </strong>" + data.givenName;
        const surname = document.createElement('p');
        surname.innerHTML = "<strong>surname: </strong>" + data.surname;
        const jobTitle = document.createElement('p');
        jobTitle.innerHTML = "<strong>jobTitle: </strong>" + data.jobTitle;
        const userPrincipalName = document.createElement('p');
        userPrincipalName.innerHTML = "<strong>userPrincipalName: </strong>" + data.userPrincipalName;
        const mail = document.createElement('p');
        mail.innerHTML = "<strong>mail: </strong>" + data.mail;
        const mobilePhone = document.createElement('p');
        mobilePhone.innerHTML = "<strong>mobilePhone: </strong>" + data.mobilePhone;
        profileDiv.appendChild(bussinessPhones);
        profileDiv.appendChild(displayName);
        profileDiv.appendChild(givenName);
        profileDiv.appendChild(jobTitle);
        profileDiv.appendChild(mail);
        profileDiv.appendChild(mobilePhone);
        profileDiv.appendChild(surname);
        profileDiv.appendChild(userPrincipalName);

    } else if (endpoint === graphConfig.graphMailEndpoint) {
        if (data.value.length < 1) {
            alert("Your mailbox is empty!")
        } else {
            const tabList = document.getElementById("list-tab");
            tabList.innerHTML = ''; // clear tabList at each readMail call
            const tabContent = document.getElementById("nav-tabContent");

            data.value.map((d, i) => {
                // Keeping it simple
                if (i < 10) {
                    const listItem = document.createElement("a");
                    listItem.setAttribute("class", "list-group-item list-group-item-action")
                    listItem.setAttribute("id", "list" + i + "list")
                    listItem.setAttribute("data-toggle", "list")
                    listItem.setAttribute("href", "#list" + i)
                    listItem.setAttribute("role", "tab")
                    listItem.setAttribute("aria-controls", i)
                    listItem.innerHTML = d.subject;
                    tabList.appendChild(listItem)

                    const contentItem = document.createElement("div");
                    contentItem.setAttribute("class", "tab-pane fade")
                    contentItem.setAttribute("id", "list" + i)
                    contentItem.setAttribute("role", "tabpanel")
                    contentItem.setAttribute("aria-labelledby", "list" + i + "list")
                    contentItem.innerHTML = "<strong> from: " + d.from.emailAddress.address + "</strong><br><br>" + d.bodyPreview + "...";
                    tabContent.appendChild(contentItem);
                }
            });
        }
    }
}