document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Elements
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Education Details
    const educationFields = document.querySelectorAll('.education-field');
    let education = "";
    educationFields.forEach((field) => {
        const level = (field.querySelector('select') as HTMLSelectElement).value;
        const fieldOfStudy = (field.querySelector('input[name="fieldOfStudy[]"]') as HTMLInputElement).value;
        const institution = (field.querySelector('input[name="institution[]"]') as HTMLInputElement).value;
        const year = (field.querySelector('input[name="year[]"]') as HTMLInputElement).value;
        education += `${level} in ${fieldOfStudy} - ${institution} (${year})<br>`;
    });

    // Profile Picture
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    // Resume Output
    const resumeOutput = `
        <h2>Your Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ""}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
    } else {
        console.error("Resume output element is missing.");
    }
});

// Add Education Field Function
const educationFieldsContainer = document.getElementById("educationFields") as HTMLDivElement;
function createEducationField(level: string = "Matric") {
    const educationField = document.createElement("div");
    educationField.classList.add("education-field");

    const educationLevelSelect = document.createElement("select");
    educationLevelSelect.name = "educationLevel[]";
    educationLevelSelect.innerHTML = `
        <option value="Matric" ${level === "Matric" ? "selected" : ""}>Matric</option>
        <option value="Intermediate" ${level === "Intermediate" ? "selected" : ""}>Intermediate</option>
        <option value="Graduation" ${level === "Graduation" ? "selected" : ""}>Graduation</option>
        <option value="Master" ${level === "Master" ? "selected" : ""}>Master</option>
    `;

    // Labels and Inputs 
    const fieldOfStudyLabel = document.createElement("label");
    fieldOfStudyLabel.textContent = "Field:";
    const fieldOfStudyInput = document.createElement("input");
    fieldOfStudyInput.type = "text";
    fieldOfStudyInput.name = "fieldName[]";
    fieldOfStudyInput.placeholder = "Enter your field  ";
    fieldOfStudyInput.required = true;

    const institutionLabel = document.createElement("label");
    institutionLabel.textContent = "Institution Name:";
    const institutionInput = document.createElement("input");
    institutionInput.type = "text";
    institutionInput.name = "institution[]";
    institutionInput.placeholder = "Enter your institution name";
    institutionInput.required = true;

    const yearLabel = document.createElement("label");
    yearLabel.textContent = "Year of Completion:";
    const yearInput = document.createElement("input");
    yearInput.type = "text";
    yearInput.name = "year[]";
    yearInput.placeholder = "Enter year of completion";
    yearInput.required = true;

    educationField.append(educationLevelSelect, fieldOfStudyLabel, fieldOfStudyInput, institutionLabel, institutionInput, yearLabel, yearInput);
    educationFieldsContainer.appendChild(educationField);
}
createEducationField();

// Add Experience Field Function
const experienceFieldsContainer = document.getElementById("experienceFields") as HTMLDivElement;
let experienceCounter = 1;  

// add new experience field
function createExperienceField() {
    const experienceField = document.createElement("div");
    experienceField.classList.add("experience-field");

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = `Experience ${experienceCounter++}:`;  
    experienceField.appendChild(sectionTitle);

    const companyLabel = document.createElement("label");
    companyLabel.textContent = "Company Name:";
    const companyInput = document.createElement("input");
    companyInput.type = "text";
    companyInput.name = "companyName[]";
    companyInput.placeholder = "Enter company name";
    companyInput.required = true;

    const designationLabel = document.createElement("label");
    designationLabel.textContent = "Designation:";
    const designationInput = document.createElement("input");
    designationInput.type = "text";
    designationInput.name = "Designation[]";
    designationInput.placeholder = "Enter your designation ";
    designationInput.required = true;

    const startDateLabel = document.createElement("label");
    startDateLabel.textContent = "Start Date:";
    const startDateInput = document.createElement("input");
    startDateInput.type = "date";
    startDateInput.name = "startDate[]";
    startDateInput.required = true;

    const endDateLabel = document.createElement("label");
    endDateLabel.textContent = "End Date:";
    const endDateInput = document.createElement("input");
    endDateInput.type = "date";
    endDateInput.name = "endDate[]";
    endDateInput.required = true;

    experienceField.append(companyLabel, companyInput, designationLabel, designationInput, startDateLabel, startDateInput, endDateLabel, endDateInput);
    experienceFieldsContainer.appendChild(experienceField);
}

const addExperienceBtn = document.getElementById("addExperienceBtn") as HTMLButtonElement;
addExperienceBtn?.addEventListener("click", function (event) {
    event.preventDefault();  
    createExperienceField();
});

createExperienceField();

// Add Skill Field Function
const skillsFieldsContainer = document.getElementById("skillsFields") as HTMLDivElement;

function createSkillField() {
    const skillField = document.createElement("div");
    skillField.classList.add("skill-field");

    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.name = "skills[]";
    skillInput.placeholder = "Enter a skill";
    skillInput.required = true;

    skillField.appendChild(skillInput);
    skillsFieldsContainer.appendChild(skillField);
}

// "Add More" button
const addSkillBtn = document.getElementById("addSkillBtn") as HTMLButtonElement;
addSkillBtn?.addEventListener("click", function () {
    createSkillField();
});


createSkillField();
