var _a;
// Event Listener for Form Submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Elements
    var profilePictureInput = document.getElementById("profilePicture");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Get Education Details
    var educationFields = document.querySelectorAll('.education-field');
    var education = "";
    educationFields.forEach(function (field) {
        var level = field.querySelector('select').value;
        var fieldOfStudy = field.querySelector('input[name="fieldOfStudy[]"]').value;
        var institution = field.querySelector('input[name="institution[]"]').value;
        var year = field.querySelector('input[name="year[]"]').value;
        education += "".concat(level, " in ").concat(fieldOfStudy, " - ").concat(institution, " (").concat(year, ")<br>");
    });
    // Profile Picture
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    // Resume Output
    var resumeOutput = "\n        <h2>Your Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    // Display Output
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
    }
    else {
        console.error("Resume output element is missing.");
    }
});
// Add Education Field Function
var educationFieldsContainer = document.getElementById("educationFields");
function createEducationField(level) {
    if (level === void 0) { level = "Matric"; }
    var educationField = document.createElement("div");
    educationField.classList.add("education-field");
    var educationLevelSelect = document.createElement("select");
    educationLevelSelect.name = "educationLevel[]";
    educationLevelSelect.innerHTML = "\n        <option value=\"Matric\" ".concat(level === "Matric" ? "selected" : "", ">Matric</option>\n        <option value=\"Intermediate\" ").concat(level === "Intermediate" ? "selected" : "", ">Intermediate</option>\n        <option value=\"Graduation\" ").concat(level === "Graduation" ? "selected" : "", ">Graduation</option>\n        <option value=\"Master\" ").concat(level === "Master" ? "selected" : "", ">Master</option>\n    ");
    // Labels and Inputs for Education Details
    var fieldOfStudyLabel = document.createElement("label");
    fieldOfStudyLabel.textContent = "Field:";
    var fieldOfStudyInput = document.createElement("input");
    fieldOfStudyInput.type = "text";
    fieldOfStudyInput.name = "fieldName[]";
    fieldOfStudyInput.placeholder = "Enter your field  ";
    fieldOfStudyInput.required = true;
    var institutionLabel = document.createElement("label");
    institutionLabel.textContent = "Institution Name:";
    var institutionInput = document.createElement("input");
    institutionInput.type = "text";
    institutionInput.name = "institution[]";
    institutionInput.placeholder = "Enter your institution name";
    institutionInput.required = true;
    var yearLabel = document.createElement("label");
    yearLabel.textContent = "Year of Completion:";
    var yearInput = document.createElement("input");
    yearInput.type = "text";
    yearInput.name = "year[]";
    yearInput.placeholder = "Enter year of completion";
    yearInput.required = true;
    educationField.append(educationLevelSelect, fieldOfStudyLabel, fieldOfStudyInput, institutionLabel, institutionInput, yearLabel, yearInput);
    educationFieldsContainer.appendChild(educationField);
}
createEducationField();
// Add Experience Field Function
var experienceFieldsContainer = document.getElementById("experienceFields");
var experienceCounter = 1; // To track the number of experiences added
// Function to create and add new experience field
function createExperienceField() {
    var experienceField = document.createElement("div");
    experienceField.classList.add("experience-field");
    var sectionTitle = document.createElement("h3");
    sectionTitle.textContent = "Experience ".concat(experienceCounter++, ":"); // Dynamic title based on experience count
    experienceField.appendChild(sectionTitle);
    var companyLabel = document.createElement("label");
    companyLabel.textContent = "Company Name:";
    var companyInput = document.createElement("input");
    companyInput.type = "text";
    companyInput.name = "companyName[]";
    companyInput.placeholder = "Enter company name";
    companyInput.required = true;
    var designationLabel = document.createElement("label");
    designationLabel.textContent = "Designation:";
    var designationInput = document.createElement("input");
    designationInput.type = "text";
    designationInput.name = "Designation[]";
    designationInput.placeholder = "Enter your designation ";
    designationInput.required = true;
    var startDateLabel = document.createElement("label");
    startDateLabel.textContent = "Start Date:";
    var startDateInput = document.createElement("input");
    startDateInput.type = "date";
    startDateInput.name = "startDate[]";
    startDateInput.required = true;
    var endDateLabel = document.createElement("label");
    endDateLabel.textContent = "End Date:";
    var endDateInput = document.createElement("input");
    endDateInput.type = "date";
    endDateInput.name = "endDate[]";
    endDateInput.required = true;
    // Append all fields to the experience field container
    experienceField.append(companyLabel, companyInput, designationLabel, designationInput, startDateLabel, startDateInput, endDateLabel, endDateInput);
    experienceFieldsContainer.appendChild(experienceField);
}
// Event listener for "Add More Experience" button
var addExperienceBtn = document.getElementById("addExperienceBtn");
addExperienceBtn === null || addExperienceBtn === void 0 ? void 0 : addExperienceBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default scroll behavior
    createExperienceField();
});
// Initialize with one experience field
createExperienceField();
// Add Skill Field Function
var skillsFieldsContainer = document.getElementById("skillsFields");
function createSkillField() {
    var skillField = document.createElement("div");
    skillField.classList.add("skill-field");
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.name = "skills[]";
    skillInput.placeholder = "Enter a skill";
    skillInput.required = true;
    skillField.appendChild(skillInput);
    skillsFieldsContainer.appendChild(skillField);
}
// Add event listener for the "Add More" button
var addSkillBtn = document.getElementById("addSkillBtn");
addSkillBtn === null || addSkillBtn === void 0 ? void 0 : addSkillBtn.addEventListener("click", function () {
    createSkillField();
});
// Initial skill field
createSkillField();
