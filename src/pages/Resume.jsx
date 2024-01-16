export default function Resume() {
  return (
    <div className="main-container-cg">
      <p className="resume-download-cg">
        Download my resume{" "}
        <a href="https://docs.google.com/document/d/1oHfp0Zw0S1CexVn-jCCvScdmft3Augxm/edit?usp=sharing&ouid=107944760408865609427&rtpof=true&sd=true" target="_blank">
          here
        </a>
        .
      </p>
      <div className="proficiencies-container-cg">
        <div className="proficiencies-column-cg">
          <p className="proficiencies-title-cg subtitle-cg">Front-end Proficiencies</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="proficiencies-column-cg">
          <p className="proficiencies-title-cg subtitle-cg">Back-end Proficiencies</p>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
