document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en'; // Default language

  // Function to render content based on language
  window.renderContent = (lang) => {
    const data = biodata[lang];
    if (!data) return;

    const labels = data.labels || {};

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

    // --- Populate Labels ---
    // Section Titles
    setText('marriage-biodata-label', labels.marriageBiodata || 'Marriage Biodata');
    setText('personal-info-label', labels.personalInfo ? `📌 ${labels.personalInfo}`: '📌 Personal Information');
    setText('family-info-label', labels.familyInfo ? `👨‍👩‍👧 ${labels.familyInfo}`: '👨‍👩‍👧 Family Information');
    setText('education-label', labels.education ? `📚 ${labels.education}`: '📚 Educational Qualifications');
    setText('profession-label', labels.profession ? `💼 ${labels.profession}`: '💼 Profession');
    setText('religious-views-label', labels.religiousViews ? `🕌 ${labels.religiousViews}`: '🕌 Religious Views');
    setText('hobbies-label', labels.hobbies ? `🎯 ${labels.hobbies}`: '🎯 Hobbies, Interests & Dreams');
    setText('partner-expectations-label', labels.partnerExpectations ? `🤝 ${labels.partnerExpectations}`: '🤝 Expected Life Partner');

    // Personal Info
    setText('name-label', labels.name || 'Name:');
    setText('dob-label', labels.dob || 'Date of Birth:');
    if (labels.age) {
        setText('age-label', labels.age);
    }
    setText('height-label', labels.height || 'Height:');
    setText('weight-label', labels.weight || 'Weight:');
    setText('complexion-label', labels.complexion || 'Complexion:');
    setText('permanent-address-label', labels.permanentAddress || 'Permanent Address:');
    setText('present-address-label', labels.presentAddress || 'Present Address:');
    setText('marital-status-label', labels.maritalStatus || 'Marital Status:');
    setText('personal-mobile-label', labels.personalMobile || 'Personal Mobile:');
    setText('personal-email-label', labels.personalEmail || 'Personal Email:');

    // Family Info
    setText('father-name-label', labels.father || 'Father:');
    setText('guardian-mobile-label', labels.guardianMobile || 'Guardian Mobile:');
    setText('mother-name-label', labels.mother || 'Mother:');
    setText('siblings-info-label', labels.siblings || 'Siblings:');
    setText('family-property-label', labels.familyProperty || 'Family Property:');
    setText('family-environment-label', labels.familyEnvironment || 'Family Environment:');

    // Profession
    setText('profession-designation-label', labels.designation || 'Designation:');
    setText('profession-organization-label', labels.organization || 'Organization:');
    setText('profession-salary-label', labels.salary || 'Monthly Salary:');
    setText('profession-responsibilities-label', labels.responsibilities || 'Responsibilities:');

    // --- Populate Personal Info ---
    if (data.personalInfo) {
      setText('name', data.personalInfo.name);
      setText('dob', data.personalInfo.dob);
      setText('age', data.personalInfo.age);
      setText('height', data.personalInfo.height);
      setText('weight', data.personalInfo.weight);
      setText('complexion', data.personalInfo.complexion);
      setText('permanent-address', data.personalInfo.permanentAddress);
      setText('present-address', data.personalInfo.presentAddress);
      setText('marital-status', data.personalInfo.maritalStatus);
      setText('personal-mobile', data.personalInfo.personalMobile);
      setText('personal-email', data.personalInfo.personalEmail);
      setText('contact-mobile', data.personalInfo.personalMobile); // For different themes
      setText('contact-email', data.personalInfo.personalEmail); // For different themes
      setHTML('header-name', data.personalInfo.name); // For themes with name in header
      setHTML('header-title', `${data.profession.designation} at ${data.profession.organization} • B.Sc. in CSE — ${data.education[0].institution}`);
    }

    // --- Populate Family Info ---
    if (data.familyInfo) {
      setText('father-name', data.familyInfo.father);
      setText('guardian-mobile', data.familyInfo.guardianMobile);
      setText('mother-name', data.familyInfo.mother);
      setText('siblings-info', data.familyInfo.siblings);
      setText('family-property', data.familyInfo.familyProperty);
      setText('family-environment', data.familyInfo.familyEnvironment);
    }

    // --- Populate Education ---
    if (data.education) {
      const eduListContainer = document.getElementById('education-list');
      if (eduListContainer) {
        eduListContainer.innerHTML = '';
        data.education.forEach(edu => {
          const p = document.createElement('p');
          p.innerHTML = `<strong>${edu.degree}:</strong> ${edu.institution}<br><em>Result: ${edu.result}, Passing Year: ${edu.passingYear}</em>`;
          eduListContainer.appendChild(p);
        });
      }
      const eduUl = document.getElementById('education-ul');
      if (eduUl) {
          eduUl.innerHTML = '';
          data.education.forEach(edu => {
              const li = document.createElement('li');
              li.innerHTML = `<strong>${edu.degree}:</strong> ${edu.institution}<br><em>Result: ${edu.result}, Passing Year: ${edu.passingYear}</em>`;
              eduUl.appendChild(li);
          });
      }
    }

    // --- Populate Profession ---
    if (data.profession) {
      setText('profession-designation', data.profession.designation);
      setText('profession-organization', data.profession.organization);
      setText('profession-salary', data.profession.salary);
      setText('profession-responsibilities', data.profession.responsibilities);
    }

    // --- Populate Religious Views ---
    if (data.religiousViews) {
      setText('religious-views', data.religiousViews);
    }

    // --- Populate Hobbies & Interests ---
    if (data.hobbies && data.hobbies.list) {
      setList('hobbies-list', data.hobbies.list);
    }

    // --- Populate Partner Expectations ---
    if (data.partnerExpectations) {
      const partnerList = document.getElementById('partner-expectations-list');
      if (partnerList) {
          partnerList.innerHTML = ''; // Clear existing
          Object.entries(data.partnerExpectations).forEach(([key, value]) => {
              const li = document.createElement('li');
              const formattedKey = labels[key] || (key.charAt(0).toUpperCase() + key.slice(1));
              li.innerHTML = `<strong>${formattedKey}</strong> ${value}`;
              partnerList.appendChild(li);
          });
      }
    }
  };

  // Initial render
  const urlParams = new URLSearchParams(window.location.search);
  currentLang = urlParams.get('lang') || 'en';
  window.currentLang = currentLang;
  renderContent(currentLang);
});
