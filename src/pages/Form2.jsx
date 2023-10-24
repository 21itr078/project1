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

    const { email, firstName, lastName, announcement, topic1, topic2, topic3, announcements } = this.state;

    // Basic validation checks
    if (!announcement.trim()) {
      this.setState({
        error: 'Announcement field is required.',
      });
      return;
    }

    // Check if the input announcement matches an existing announcement
    if (announcements.includes(announcement)) {
      const updatedAnnouncements = announcements.filter((existingAnnouncement) => existingAnnouncement !== announcement);
      this.setState({ announcements: updatedAnnouncements, error: null });
    } else {
      this.setState({
        error: 'Announcement not found in the Announcement box. You cannot delete it.',
      });
    }
  }

  render() {
    const {
      email,
      firstName,
      lastName,
      announcement,
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
            <h2>Delete Announcement</h2>
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
                <label htmlFor="announcement">Announcement(with date)</label>
                <input
                  type="text"
                  id="announcement"
                  value={announcement}
                  onChange={(e) => this.setState({ announcement: e.target.value })}
                />
              </div>
              <button type="submit">Delete</button>
              <a
                className="delete-link"
                href="/Form"
              >
                Back
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
