import React from 'react';
import webScrapingImage from '../assets/images/web-sc.jpeg'; // Placeholder for the project image

const WebScrapingTool = () => {
  return (
    <div className="web-scraping-project">
      <h1>Web Scraping Tool</h1>
      <img src={webScrapingImage} alt="Web Scraping Tool" className="web-scraping-image" />

      <section className="web-scraping-overview">
        <h2>Project Overview</h2>
        <p>
          The Web Scraping Tool project aims to create a user-friendly application that can extract and gather information from various websites. This project demonstrates the power of data extraction, allowing users to retrieve information for analysis, research, and other purposes.
        </p>

        <h2>Key Features</h2>
        <ul className="web-scraping-features">
          <li>URL Input: Users can enter the URL of the website they want to scrape.</li>
          <li>Data Extraction: The tool can extract specific information such as text, images, and links from the targeted webpage.</li>
          <li>Results Display: Retrieved data is displayed in a structured format for easy viewing and analysis.</li>
          <li>Error Handling: The tool handles errors gracefully, providing feedback when a scraping attempt fails.</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul className="web-scraping-tech-stack">
          <li>Frontend: React.js</li>
          <li>Backend: Node.js with Express for handling requests</li>
          <li>Web Scraping: Libraries like Cheerio or Puppeteer for extracting data from HTML</li>
          <li>State Management: React hooks for managing component states</li>
        </ul>

        <h2>Implementation Steps</h2>
        <p>
          The project involves several key steps: setting up the frontend and backend, creating the UI for input, implementing data extraction logic, and displaying the scraped results. Ensuring the tool adheres to web scraping best practices, such as respecting robots.txt files and avoiding overloading servers, is crucial.
        </p>

        <h2>Potential Applications</h2>
        <ul className="web-scraping-applications">
          <li>Market research to gather product prices from e-commerce websites.</li>
          <li>Data collection for academic research from various online sources.</li>
          <li>Monitoring changes in content on specific webpages for alerts.</li>
        </ul>
      </section>
    </div>
  );
};

export default WebScrapingTool;
