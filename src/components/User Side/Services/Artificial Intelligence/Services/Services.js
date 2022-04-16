import React from "react";
import Vision from "./images/vision.png";
import "./services.scss";
function Services() {
  return (
    <div className="service-outer-div">
      <span className="service-title">
        Hire Artificial Intelligence Expert.
        <div className="service-title-underline" />
      </span>
      <div className="service-introduction">
        <p>
          <h5>
            DeepFusion solutions help businesses achieve breakthrough results,
            enhance operations growth, and boost efficiency with Artificial
            Intelligence (AI) and Machine Learning solutions. With our AI &
            Machine Learning Consulting, you can deliver tailored customer
            experiences, automate internal processes, and develop solutions that
            will revolutionize the way customers interact with your product. We
            offer ML development services to help you build and deploy unique ML
            models at any scale to change the dynamics of your data. Our
            objective is to help you remove all of the obstacles in your growth
            by implementing the right AI & ML features across your organization.
            Our software provides faster irregularity detection, automated
            business processes, and rapid decision-making. Our artificial
            intelligence-driven software enables enterprises to authorize.
          </h5>
        </p>
      </div>
      <div className="provided-services-div">
        <div className="provided-services-cards">
          <div className="provided-services-card">
            <img src={Vision} alt="service-icon" />
            <p className="service-title">Healthcare</p>
            <p className="service-discription">
              AI can help individuals maintain their health in one of its most
              significant benefits. Healthy lifestyles are encouraged and
              managed through the proactive implementation of healthier habits.
              Wearable technology has also become important for early disease
              diagnosis due to the expansion of buyers' wearables.
            </p>
          </div>

          <div className="provided-services-card">
            <img src={Vision} alt="service-icon" />
            <p className="service-title">Banking</p>
            <p className="service-discription">
              By automating banks' depth of knowledge and labor force, AI and
              machine learning algorithms will enable them to improve their
              efficiency, but they will also make the entire automation process
              smart enough to combat cyber threats and challenges from FinTech
              companies. To improve operational efficiency and economic
              performance, take advantage of both human and machine capabilities
              to the fullest.
            </p>
          </div>

          <div className="provided-services-card">
            <img src={Vision} alt="service-icon" />
            <p className="service-title">Insurance</p>
            <p className="service-discription">
              With the help of machine learning and artificial intelligence,
              insurance companies can automate standard claims settlement
              operations and save time and money. A model of machine learning
              can be used by insurers to forecast premiums and losses.
            </p>
          </div>

          <div className="provided-services-card">
            <img src={Vision} alt="service-icon" />
            <p className="service-title">Ecommerce</p>
            <p className="service-discription">
              The e-commerce sector is starting to boost customer experience
              with customization, targeting potential customers for enhanced
              sales, and recommending products based on their browsing and
              buying patterns using artificial intelligence and machine
              learning.
            </p>
          </div>

          <div className="provided-services-card">
            <img src={Vision} alt="service-icon" />
            <p className="service-title">Retail</p>
            <p className="service-discription">
              In retail, Smart Analytics and Natural Language Processing (NLP)
              can speed up support and improvement for their consumers and make
              shopping more enjoyable. As well as digital racks, virtual
              demonstration rooms, online support, and behavioral analytics, AI
              will benefit the retail industry in several other ways.
            </p>
          </div>

          <div className="provided-services-card">
            <img src={Vision} alt="service-icon" />
            <p className="service-title">Construction</p>
            <p className="service-discription">
              Building efficiency could be improved by using machine learning
              technologies (ML). As long as all stakeholders are kept up to
              date, AI can be utilized to update construction sequences, manage
              job completions, as well job management. A more efficient
              construction process could also be achieved through AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
