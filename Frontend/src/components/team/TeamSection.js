import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';
// team member images
import teamMember1 from '../../assets/images/team1.jpeg';
import teamMember2 from '../../assets/images/team2.jpeg';
import teamMember3 from '../../assets/images/team3.jpeg';
import teamMember4 from '../../assets/images/team4.jpeg';
import teamMember5 from '../../assets/images/team5.jpeg';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Team Members
            </ParagraphText>
            <SectionTitle className="team__title">
              The best team available
            </SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem className="team__members_items"
              img={teamMember1}
              name="Parth Rastogi"
              title="Machine Learning, Full Stack Developer"
            />
            <TeamMemberItem className="team__members_items"
              img={teamMember2}
              name="Prannov Jamadagni"
              title="Machine Learning"
            />
            <TeamMemberItem className="team__members_items"
              img={teamMember3}
              name="Charvi Arora"
              title="Frontend Developer"
            />
            <TeamMemberItem className="team__members_items"
              img={teamMember4}
              name="Samriddhi Chauhan"
              title="Frontend Developer"
            />
            <TeamMemberItem className="team__members_items"
              img={teamMember5}
              name="Saketh Ram"
              title="Full Stack Developer"
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
