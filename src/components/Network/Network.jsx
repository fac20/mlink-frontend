import React from "react";
import profileicon from "../../assets/images/profileicon.svg";
import requesticon from "../../assets/images/requesticon.svg";
import { Input } from "../Profile/ProfileSetup.styles";
import Navigation from "../Navigation/Navigation.jsx";
import { SearchInput, Form, SearchWrapper, NetworkWrapper, ProfileImg, RequestImg, FlexDiv } from "./Network.styles";
import queryHelpers from "../../utils/queryHelper";

function NetworkPage() {
  const [networkQuery, setNetworkQuery] = React.useState([]);

  // const params = useParams();
  // const network= params.network;
  console.log("hey", window.location.pathname);

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
        <Navigation />
      </NetworkWrapper>
    </>
  );
}

export default NetworkPage;
