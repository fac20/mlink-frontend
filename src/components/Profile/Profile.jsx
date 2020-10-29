import React from "react";

import {
  UserProfile,
  Button,
  BlueBackArrow,
  ProfileHeader,
  ProfilePic,
  Description,
  Text,
  EditIcon,
  ReadMoreArrow,
  Subtitle,
  ProfileBody,
  UserInfo,
  Section
} from "./Profile.styles";

export default function Profile() {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <>
      <UserProfile>
        <ProfileHeader>
          <Button>
            <BlueBackArrow size="37" />
          </Button>
          <ProfilePic size="97" />
          <Description>
            <Text></Text>
          </Description>
          <EditIcon size="27" />
        </ProfileHeader>
        <ProfileBody>
          <UserInfo>
            <Section>
              <Subtitle>Medical school</Subtitle>
              <Button onClick={() => setReadMore(!readMore)}>
                <ReadMoreArrow size="32" readMore={readMore} />
              </Button>
            </Section>
            <Text>lorem ipsum {readMore ? "hello" : "bye"}</Text>
            <Text>lorem ipsum time time</Text>
            {readMore && (
              <>
                <Text>lorem ipsum</Text>
                <Text>lorem ipsum time time</Text>
              </>
            )}
          </UserInfo>
        </ProfileBody>
      </UserProfile>
    </>
  );
}
