import React, { Component } from 'react';
import '../styles/Form.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      announcement: '',
      date: '', // Add date field to state
      topic1: '',
      topic2: '',
      topic3: '',
      error: null,
      isAuthenticated: false,
      announcements: [
        // Add your existing announcements here
        'Announcement: DAE-BRNS Sponsored National Seminar ADVANCED MATERIALS FOR ENERGY AND ENVIRONMENTAL APPLICATIONS (AMEEA-23) physical mode on (Date: 30.09.2023)',
        'Announcement: Certificate Course on Patent Essentials - 2023 (PAT - ESS 2023) (Department Name - CIPR) on (Date: 11.10.2023)',
        'Announcement: Lean Six Sigma Green Belt Training Programme (Department Name - AU-TVS CQM) on (Date: 19.10.2023)',
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, firstName, lastName, announcement, date, topic1, topic2, topic3, announcements } = this.state;

    // Basic validation checks
    if (!firstName.trim() || !lastName.trim() || !date.trim()) {
      this.setState({
        error: 'First name, last name, and date are required fields.',
      });
      return;
    }
    if (!announcement.trim()) {
      this.setState({
        error: 'Announcement field is required.',
      });
      return;
    }

    // Create a new topic for the announcement with date
    const newTopic = `Announcement: ${announcement} (Date: ${date})`;

    // Update "topic1" with the announcement
    this.setState({
      topic1: newTopic,
      isAuthenticated: true,
    });

    // Combine existing announcements and the new announcement
    const updatedAnnouncements = [...announcements, newTopic];
    this.setState({ announcements: updatedAnnouncements, error: null });

    const requestBody = JSON.stringify({
      email,
      firstName,
      lastName,
      announcement,
      date,
      topic1: newTopic, // Update topic1 with the announcement and date
      topic2,
      topic3,
    });

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
        } else {
          this.setState({
            isAuthenticated: false,
            error: 'Registration failed. User already exists or other error.',
          });
        }
      })
      .catch((error) => {
        console.error('Error sending data to the backend:', error);
        this.setState({
          isAuthenticated: false,
          error: 'An error occurred while communicating with the server',
        });
      });
  }

  handleDelete(index) {
    // Function to delete an announcement by its index
    const { announcements } = this.state;
    announcements.splice(index, 1);
    this.setState({ announcements });
  }

  render() {
    const {
      email,
      firstName,
      lastName,
      announcement,
      date,
      topic1,
      topic2,
      topic3,
      isAuthenticated,
      error,
      announcements,
    } = this.state;

    return (
      <div className="center-container">
        <div className="left-container">
          <h2>Announcements</h2>
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-item">
              <p>{announcement}</p>
            </div>
          ))}
        </div>
        <div className="login-form-container right-side">
          <div className="right-side">
            <h2>Event Registration</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="announcement">Announcement</label>
                <input
                  type="text"
                  id="announcement"
                  value={announcement}
                  onChange={(e) => this.setState({ announcement: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => this.setState({ date: e.target.value })}
                />
              </div>
              <button type="submit">Register</button>
              <a
                
                className="delete-link"
                href='/form2'
              >
                Delete Last Announcement
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
