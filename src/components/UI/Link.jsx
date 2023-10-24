import React, { Component } from 'react';
import "../../styles/Link.css";
import { Button } from 'reactstrap';

class AnnouncementBox extends Component {
  constructor(props) {
    super(props);
    this.scrollBoxRef = React.createRef();
    this.eventItems = [
      {
        title: "DAE-BRNS Sponsored National Seminar ADVANCED MATERIALS FOR ENERGY AND ENVIRONMETAL APPLICATIONS(AMEEA-23) physical mode on 30.09.2023",
        link: "https://www.kongu.ac.in/events/chemistry.pdf",
      },
      {
        title: "Certificate Course on Patent Essentials - 2023 (PAT - ESS 2023) (Department Name - CIPR) on 11.10.2023",
        link: "https://www.annauniv.edu/pdf/Course%20brochure-%20PAT-ESS-2023%20.pdf",
      },
      {
        title: "Lean Six Sigma Green Belt Training Programme (Department Name - AU-TVS CQM) on 19.10.2023",
        link: "https://www.annauniv.edu/pdf/LSSGB_Brochure.pdf",
      },
      // Add more event objects as needed
    ];
    this.newsItems = [
      "Faculty Member of Kongu College of Institution Received Best NSS Programme Officer Award.",
      "Pongal Celebrations at Kongu Engineering College - January 2023.",
      "NAAN MUDHALVAN SCHEME AT KONGU ENGINEERING COLLEGE-ENGLISH-NEWS - February 2023.",
      "Student Exchange programme (Spring Semester 2024) in National Tsing Hua University(NTHU)",
      "Adi Dravidar and Tribal Welfare Department Citizen Charter 2022-2023 .",
      // Add more news items as needed
    ];
    this.state = {
      visibleEvents: 0,
      visibleNewsStart: 0,
    };
    this.scrollInterval = null;
  }

  componentDidMount() {
    this.startAutoScroll();
  }

  componentWillUnmount() {
    this.clearAutoScroll();
  }

  startAutoScroll = () => {
    this.scrollInterval = setInterval(this.scrollNews, 2000);
  };

  clearAutoScroll = () => {
    clearInterval(this.scrollInterval);
  };

  scrollNews = () => {
    const { visibleNewsStart } = this.state;
    const maxNews = this.newsItems.length;

    this.setState((prevState) => {
      const nextStart = (prevState.visibleNewsStart + 3) % maxNews;

      return {
        visibleNewsStart: nextStart,
      };
    });
  };

  scrollToNews = (index) => {
    const newsItem = this.scrollBoxRef.current.querySelector(`#news-${index}`);
    if (newsItem) {
      newsItem.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const { visibleEvents, visibleNewsStart } = this.state;

    const maxNews = this.newsItems.length;
    const visibleNewsIndexes = [];
    for (let i = 0; i < 3; i++) {
      visibleNewsIndexes.push((visibleNewsStart + i) % maxNews);
    }

    return (
      <div className="announcement-container">
        <div className="announcement-box">
          <h3>Events</h3>
          <div className="scroll-box" ref={this.scrollBoxRef}>
            <ul>
              {this.eventItems.map((event, index) => (
                <li
                  key={index}
                  className={`event-container ${index === visibleEvents ? 'visible' : ''}`}
                >
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    {event.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="button-container">
              <button className="add-button">
                <a href="/Form">Add more Events</a>
              </button>
              
              
            </div>
         
          </div>
        </div>
        {/* Add a dotted line separator */}
        <div className="separator"></div>
        <div className="announcement-box">
          <h3>Latest News</h3>
          <div className="scroll-box news-box">
            <div className="vertical-scroll-container">
              <ul>
                {visibleNewsIndexes.map((index) => (
                  <li key={index} id={`news-${index}`} className="news-item">
                    <p className="news">{this.newsItems[index]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnnouncementBox;
