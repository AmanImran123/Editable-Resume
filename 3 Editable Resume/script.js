function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;

    // Update the resume fields
    document.getElementById("displayName").textContent = fullName;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayEducation").textContent = education;
    document.getElementById("displayExperience").textContent = experience;

    // Display the resume output
    document.getElementById("resumeOutput").style.display = "block";
}
