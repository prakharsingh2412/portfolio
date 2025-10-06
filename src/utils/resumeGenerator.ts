import { PortfolioData } from '../src/types/portfolio';

export const generateResumeText = (data: PortfolioData): string => {
  return `
${data.name}
${data.title}
${data.location} | ${data.email} | ${data.phone}

ABOUT
${data.about}

TECHNICAL SKILLS
${data.skills.join(' • ')}

PROFESSIONAL EXPERIENCE
${data.experience.map(exp => `
${exp.position} | ${exp.company} | ${exp.duration}
${exp.description}
`).join('')}

PROJECTS
${data.projects.map(project => `
${project.name}
${project.description}
Technologies: ${project.technologies.join(', ')}
`).join('')}

EDUCATION
${data.education.map(edu => `
${edu.degree}
${edu.institution} | ${edu.year}
`).join('')}

KEY ACHIEVEMENTS
${data.achievements.join('\n')}
`.trim();
};

export const generateResumeHTML = (data: PortfolioData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; margin-bottom: 5px; }
        .title { font-size: 18px; color: #666; margin-bottom: 10px; }
        .contact { font-size: 14px; color: #888; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 20px; font-weight: bold; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 15px; }
        .job { margin-bottom: 20px; }
        .job-header { font-weight: bold; }
        .job-company { color: #666; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f0f0; padding: 5px 10px; border-radius: 15px; font-size: 14px; }
        .project { margin-bottom: 15px; }
        .project-name { font-weight: bold; }
        .tech-stack { font-style: italic; color: #666; }
        .achievement { margin-bottom: 8px; }
        @media print { body { margin: 0; padding: 15px; } }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${data.name}</div>
        <div class="title">${data.title}</div>
        <div class="contact">${data.location} | ${data.email} | ${data.phone}</div>
    </div>

    <div class="section">
        <div class="section-title">ABOUT</div>
        <p>${data.about}</p>
    </div>

    <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
        <div class="skills">
            ${data.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
        </div>
    </div>

    <div class="section">
        <div class="section-title">PROFESSIONAL EXPERIENCE</div>
        ${data.experience.map(exp => `
            <div class="job">
                <div class="job-header">${exp.position}</div>
                <div class="job-company">${exp.company} | ${exp.duration}</div>
                <p>${exp.description}</p>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">PROJECTS</div>
        ${data.projects.map(project => `
            <div class="project">
                <div class="project-name">${project.name}</div>
                <p>${project.description}</p>
                <div class="tech-stack">Technologies: ${project.technologies.join(', ')}</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        ${data.education.map(edu => `
            <div class="job">
                <div class="job-header">${edu.degree}</div>
                <div class="job-company">${edu.institution} | ${edu.year}</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">KEY ACHIEVEMENTS</div>
        ${data.achievements.map(achievement => `
            <div class="achievement">${achievement}</div>
        `).join('')}
    </div>
</body>
</html>
`.trim();
};

export const downloadResumePDF = (data: PortfolioData) => {
  const resumeHTML = generateResumeHTML(data);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(resumeHTML);
    printWindow.document.close();
    printWindow.focus();
    
    // Add instructions for PDF download
    const instructionDiv = printWindow.document.createElement('div');
    instructionDiv.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #4CAF50;
      color: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: Arial, sans-serif;
      font-size: 14px;
      max-width: 300px;
    `;
    instructionDiv.innerHTML = `
      <strong>📄 Save as PDF</strong><br>
      Press <kbd>Ctrl+P</kbd> (or <kbd>Cmd+P</kbd> on Mac)<br>
      Select "Save as PDF" as destination<br>
      <button onclick="window.print()" style="margin-top: 10px; padding: 8px 16px; background: white; color: #4CAF50; border: none; border-radius: 4px; cursor: pointer;">Print Now</button>
    `;
    printWindow.document.body.appendChild(instructionDiv);
    
    // Auto trigger print dialog after a short delay
    setTimeout(() => {
      printWindow.print();
    }, 1000);
  }
};