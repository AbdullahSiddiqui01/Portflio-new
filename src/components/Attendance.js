import React from 'react';
import attendanceAppImage from '../assets/images/student.jpg'; // Update with your image path
import './ProjectAttendanceApp.css'; // Optional: You can create a separate CSS file for styling

const ProjectAttendanceApp = () => {
  return (
    <div className="project-container">
      <h1 className="title">React Native Attendance App</h1>
      <img 
        src={attendanceAppImage} 
        alt="Attendance App" 
        className="project-image" 
      />
      
      <div className="section">
        <h2 className="header">Project Overview</h2>
        <p className="text">
          The React Native Attendance App is designed to simplify the process of tracking attendance 
          in educational and corporate settings. This mobile application provides a user-friendly 
          interface, allowing users to easily mark attendance, view reports, and receive real-time updates 
          on attendance status. 
        </p>
      </div>

      <div className="section">
        <h2 className="header">Key Features</h2>
        <p className="text"> 
          - <strong>User Authentication</strong>: Secure login for teachers and students.<br />
          - <strong>Real-Time Attendance Tracking</strong>: Mark and view attendance in real-time.<br />
          - <strong>Attendance Reports</strong>: Generate and view detailed reports and analytics.<br />
          - <strong>Push Notifications</strong>: Send notifications for reminders and updates.<br />
          - <strong>User Profiles</strong>: Custom profiles for users to manage their attendance records.
        </p>
      </div>

      <div className="section">
        <h2 className="header">Technology Stack</h2>
        <p className="text"> 
          - <strong>Frontend</strong>: React.js<br />
          - <strong>Backend</strong>: Node.js with Express<br />
          - <strong>Database</strong>: MongoDB<br />
          - <strong>Authentication</strong>: Firebase Authentication<br />
          - <strong>Push Notifications</strong>: Firebase Cloud Messaging (FCM)
        </p>
      </div>

      <div className="section">
        <h2 className="header">Implementation Steps</h2>
        <p className="text">
          Key implementation steps include setting up user authentication, developing the attendance 
          tracking interface, integrating the backend services for data management, and testing the 
          application for performance and usability.
        </p>
      </div>

      <div className="section">
        <h2 className="header">Potential Applications</h2>
        <p className="text"> 
          - <strong>Educational Institutions</strong>: For tracking student attendance in schools and colleges.<br />
          - <strong>Corporate Settings</strong>: To monitor employee attendance during training sessions and meetings.<br />
          - <strong>Event Management</strong>: To keep track of attendees during workshops and conferences.
        </p>
      </div>
    </div>
  );
};

export default ProjectAttendanceApp;
