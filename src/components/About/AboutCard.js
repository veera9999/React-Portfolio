import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight } from 'react-icons/fa';
import description from '../description';
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {description.Greeting} {description.Im}{' '}
            <span className="green">Veera Palla</span>,{' '}
            {description.MLE} {description.IWorkAt}{' '}
            <span className="green">{description.Company}</span>{' '}
            {description.CompanyLocation}.
            <br />
            {description.IHoldDegree1}{' '}
            <span className="green">
              Computer Science Engineering
            </span>{' '}
            {description.School1} {description.And}{' '}
            <span className="green">
              Data Science and Engineering
            </span>{' '}
            {description.School2}.
            <br />
            <br />
            {description.Interests}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Machine and Deep Learning
            </li>
            <li className="about-activity">
              <FaHandPointRight /> High-Performance Computing
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Software Engineering
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
