import React from "react";
import { Link } from "react-router-dom";
import profileicon from "../../assets/images/profileicon.svg";
import requesticon from "../../assets/images/requesticon.svg";
import { Input } from "../Profile/ProfileSetup.styles";
import { GetStartedBtn as NavigationButtons } from "../Onboarding/Onboarding.styles";
import { SearchInput, Form, SearchWrapper, NetworkWrapper, ProfileImg, RequestImg, FlexDiv } from "./Network.styles";
import queryHelpers from "../../utils/queryHelper";

function NetworkPage() {
  const [networkQuery, setNetworkQuery] = React.useState([]);

  // const params = useParams(); 
  // const network= params.network;
  // console.log("hey", params);

  const [currentPage, setCurrentPage] = React.useState("network");


  React.useEffect(() => {
    const networkQuery = `
        query MyQuery {
            users {
              full_name
              speciality {
                speciality
              }
              workplace {
                workplace
              }
            }
          }
          
        `;
    queryHelpers(networkQuery);
  });
  console.log(queryHelpers(networkQuery));

  return (
    <>
      <div>
        <RequestImg alt="request" src={requesticon} />
        <ProfileImg alt="profile" src={profileicon} />
      </div>
      <NetworkWrapper>
        <SearchWrapper>
          <Form onSubmit="">
            <SearchInput
              type="search"
              id="network-search"
              name="network-search"
              aria-label="Search through your network"
              placeholder="Search my network..."
            />
          </Form>
        </SearchWrapper>

        <FlexDiv alignItems="center">
						<Link to="/network">
            <NavigationButtons>Network</NavigationButtons>
						</Link>
				</FlexDiv>

        <FlexDiv alignItems="center">
						<Link to="/dashboard">
              <NavigationButtons>Dashboard</NavigationButtons>
						</Link>
				</FlexDiv>


      </NetworkWrapper>
    </>
  );
}

export default NetworkPage;
