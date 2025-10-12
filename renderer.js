document.addEventListener('DOMContentLoaded', () => {
  // Helper function to safely set text content
  const setText = (id, text) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  };

  // Helper function to safely set innerHTML content
  const setHTML = (id, html) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = html;
    }
  };

  // Helper function to populate a list
  const setList = (id, items) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = ''; // Clear existing items
      items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item; // Use innerHTML to allow for bolding or other tags
        element.appendChild(li);
      });
    }
  };

  // --- Populate Personal Info ---
  if (biodata.personalInfo) {
    setText('name', biodata.personalInfo.name);
    setText('dob', biodata.personalInfo.dob);
    setText('age', biodata.personalInfo.age);
    setText('height', biodata.personalInfo.height);
    setText('weight', biodata.personalInfo.weight);
    setText('complexion', biodata.personalInfo.complexion);
    setText('permanent-address', biodata.personalInfo.permanentAddress);
    setText('present-address', biodata.personalInfo.presentAddress);
    setText('marital-status', biodata.personalInfo.maritalStatus);
    setText('personal-mobile', biodata.personalInfo.personalMobile);
    setText('contact-mobile', biodata.personalInfo.personalMobile); // For different themes
    setHTML('header-name', biodata.personalInfo.name); // For themes with name in header
    setHTML('header-title', `${biodata.profession.designation} at ${biodata.profession.organization} • B.Sc. in CSE — ${biodata.education[0].institution}`);

  }

  // --- Populate Family Info ---
  if (biodata.familyInfo) {
    setText('father-name', biodata.familyInfo.father);
    setText('guardian-mobile', biodata.familyInfo.guardianMobile);
    setText('mother-name', biodata.familyInfo.mother);
    setText('siblings-info', biodata.familyInfo.siblings);
    setText('family-property', biodata.familyInfo.familyProperty);
    setText('family-environment', biodata.familyInfo.familyEnvironment);
  }

  // --- Populate Education ---
  if (biodata.education) {
    const eduListContainer = document.getElementById('education-list');
    if (eduListContainer) {
      eduListContainer.innerHTML = '';
      biodata.education.forEach(edu => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${edu.degree}:</strong> ${edu.institution} (Result: ${edu.result})`;
        eduListContainer.appendChild(p);
      });
    }
    const eduUl = document.getElementById('education-ul');
    if (eduUl) {
        eduUl.innerHTML = '';
        biodata.education.forEach(edu => {
            const li = document.createElement('li');
            li.innerHTML = `${edu.degree}: ${edu.institution} (Result: ${edu.result})`;
            eduUl.appendChild(li);
        });
    }
  }

  // --- Populate Profession ---
  if (biodata.profession) {
    setText('profession-designation', biodata.profession.designation);
    setText('profession-organization', biodata.profession.organization);
    setText('profession-salary', biodata.profession.salary);
    setText('profession-responsibilities', biodata.profession.responsibilities);
  }

  // --- Populate Religious Views ---
  if (biodata.religiousViews) {
    setText('religious-views', biodata.religiousViews);
  }

  // --- Populate Hobbies & Interests ---
  if (biodata.hobbies && biodata.hobbies.list) {
    setList('hobbies-list', biodata.hobbies.list);
  }

  // --- Populate Partner Expectations ---
  if (biodata.partnerExpectations) {
    setText('partner-age', biodata.partnerExpectations.age);
    setText('partner-height', biodata.partnerExpectations.height);
    setText('partner-complexion', biodata.partnerExpectations.complexion);
    setText('partner-education', biodata.partnerExpectations.education);
    setText('partner-qualities', biodata.partnerExpectations.qualities);

    const partnerList = document.getElementById('partner-expectations-list');
    if (partnerList) {
        partnerList.innerHTML = ''; // Clear existing
        Object.entries(biodata.partnerExpectations).forEach(([key, value]) => {
            const li = document.createElement('li');
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            li.innerHTML = `<strong>${formattedKey}:</strong> ${value}`;
            partnerList.appendChild(li);
        });
    }
  }
});
