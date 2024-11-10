"use strict";
// function form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Collect data
    const name = document.getElementById("name-input")
        .value;
    const role = document.getElementById("role-input")
        .value;
    const email = document.getElementById("email-input")
        .value;
    const location = document.getElementById("location-input").value;
    const contact = document.getElementById("phone-input")
        .value;
    const objective = document.getElementById("objective-input").value;
    //  skills, education, experience, and certifications
    const skills = document.getElementById("skills-input").value.split(",");
    const education = document.getElementById("education-input").value.split(",");
    const experience = document.getElementById("experience-input").value.split(",");
    const certifications = document.getElementById("certifications-input").value.split(",");
    // Update the resume with the collected data
    document.getElementById("name").textContent = name || "Danyal";
    document.getElementById("role").textContent = role || "Full Stack Developer";
    document.getElementById("email").textContent = `Email: ${email} | Phone: ${contact}`;
    document.getElementById("location").textContent = `Location: ${location} | LinkedIn: linkedin.com/`;
    document.getElementById("objective").textContent =
        objective || "A highly skilled and motivated full-stack developer...";
    // Update the skills list
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = skills.map((s) => `<li>${s}</li>`).join("");
    // Update the education list
    const educationList = document.getElementById("education-list");
    educationList.innerHTML = education.map((e) => `<li>${e}</li>`).join("");
    // Update the experience list
    const experienceList = document.getElementById("experience-list");
    experienceList.innerHTML = experience
        .map((exp) => `<li>${exp}</li>`)
        .join("");
    // Update the certifications list
    const certificationsList = document.getElementById("certifications-list");
    certificationsList.innerHTML = certifications
        .map((cert) => `<li>${cert}</li>`)
        .join("");
    // Show the resume section and hide the form
    document.getElementById("form-section").style.display = "none";
    document.getElementById("resume-section").style.display = "block";
    // Date section
    const lastUpdated = new Date().toLocaleString();
    document.getElementById("last-updated").textContent = lastUpdated;
}
//edit Function
function editResume() {
    // Get the current values from the resume display
    const name = document.getElementById("name").textContent;
    const role = document.getElementById("role").textContent;
    const emailPhone = document.getElementById("email").textContent;
    const location = document.getElementById("location").textContent;
    const objective = document.getElementById("objective").textContent;
    const [email, phone] = emailPhone.replace("Email: ", "").split(" | Phone: ");
    const loc = location.replace("Location: ", "");
    // Fill form fields with current resume data
    document.getElementById("name-input").value = name;
    document.getElementById("role-input").value = role;
    document.getElementById("email-input").value = email;
    document.getElementById("phone-input").value = phone;
    document.getElementById("location-input").value = loc;
    document.getElementById("objective-input").value =
        objective;
    // Hide the  section and show the form
    document.getElementById("resume-section").style.display = "none";
    document.getElementById("form-section").style.display = "block";
}
//  form submit buttons
document
    .getElementById("resume-form")
    .addEventListener("submit", handleFormSubmit);
document.getElementById("edit-btn").addEventListener("click", editResume);
