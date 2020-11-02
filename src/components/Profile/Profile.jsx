import React from "react";

import { DotDiv, Loader } from "../Dashboard/Dashboard.styles.jsx";
import profileQueries from "../../utils/ProfileQueries.js";
import { useHistory } from "react-router-dom";

import {
  UserProfile,
  Button,
  BlueBackArrow,
  ProfileHeader,
  DescriptionDiv,
  Text,
  EditIcon,
  ReadMoreArrow,
  Subtitle,
  ProfileBody,
  UserInfo,
  Section,
  Img,
  AvatarDiv,
  EditDiv
} from "./Profile.styles";
import avatar from "../../assets/images/avatar.svg";
import Joined from "../../assets/images/Joined.svg";

export default function Profile() {
  const userId = { userId: 2 };
  const [profileInfo, setProfileInfo] = React.useState([]);
  const [readMore, setReadMore] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    profileQueries(userId, setProfileInfo);
  }, [userId]);

  if (profileInfo.length === 0) {
    return (
      <>
        <Loader>
          <h3>Loading your profile</h3>
        </Loader>
        <DotDiv></DotDiv>
      </>
    );
  }

  let name = profileInfo.headerInfo[0].full_name;
  let speciality = profileInfo.headerInfo[0].speciality.speciality;
  let medSchool = profileInfo.Medical_School[0].medical_school;
  let examDate = profileInfo.Postgraduate_Exams[0].exam_date;
  let pdExam = profileInfo.Postgraduate_Exams[0].postgrad_exam.postgrad_exam;

  let jobStart = profileInfo.Previous_Jobs[0].job_start;
  let jobEnd = profileInfo.Previous_Jobs[0].job_end;
  let jobTitle = profileInfo.Previous_Jobs[0].job_title.job_title;

  return (
    <UserProfile>
      <ProfileHeader>
        <Button onClick={() => history.goBack()}>
          <BlueBackArrow size="37" />
        </Button>
        <AvatarDiv>
          <Img alt="user avatar" src={avatar} />
        </AvatarDiv>
        <DescriptionDiv>
          <Text>
            <h2>{name}</h2>
          </Text>
          <Text>{pdExam}</Text>
          <Text>FY2 Doctor</Text>
          <Text>{speciality}</Text>
        </DescriptionDiv>
        <EditDiv>
          <EditIcon size="27" />
        </EditDiv>
      </ProfileHeader>
      <ProfileBody>
        <UserInfo>
          <Section>
            <Subtitle>Previous Job</Subtitle>
            <Button
              onClick={() => {
                setReadMore(!readMore);
                setCurrentSection("prevJob");
              }}
            >
              <ReadMoreArrow size="32" readMore={readMore} />
            </Button>
          </Section>
          <Text>{jobTitle}</Text>
          <br />
          <Text>({jobStart})</Text> - <Text>({jobEnd})</Text>
          <br />
          {readMore && currentSection === "prevJob" && (
            <>
              <Text>lorem ipsum</Text>
              <Text>lorem ipsum</Text>
            </>
          )}
        </UserInfo>

        <UserInfo>
          <Section>
            <Subtitle>Medical school</Subtitle>
            <Button
              onClick={() => {
                setReadMore(!readMore);
                setCurrentSection("medSchool");
              }}
            >
              <ReadMoreArrow size="32" readMore={readMore} />
            </Button>
          </Section>
          <Text>{medSchool}</Text>
          <br />
          {readMore && currentSection === "medSchool" && (
            <>
              <Text>lorem ipsum</Text>
              <Text>lorem ipsum</Text>
            </>
          )}
        </UserInfo>

        <UserInfo>
          <Section>
            <Subtitle>Postgraduate Exams</Subtitle>
            <Button
              onClick={() => {
                setReadMore(!readMore);
                setCurrentSection("pdExam");
              }}
            >
              <ReadMoreArrow size="32" readMore={readMore} />
            </Button>
          </Section>
          <Text>{pdExam}</Text>
          <br />
          <Text>({examDate})</Text>
          <br />
          {readMore && currentSection === "pdExam" && (
            <>
              <Text>lorem ipsum</Text>
              <Text>lorem ipsum</Text>
            </>
          )}
        </UserInfo>
      </ProfileBody>
      <img src={Joined} />
    </UserProfile>
  );
}
