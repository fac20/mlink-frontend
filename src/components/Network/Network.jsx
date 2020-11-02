import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/images/profileicon.svg";
import requestIcon from "../../assets/images/requesticon.svg";
import Navigation from "../Navigation/Navigation.jsx";
import { SearchInput, Form, SearchWrapper, NetworkWrapper, ProfileImg, RequestImg } from "./Network.styles";
import queryHelpers from "../../utils/queryHelper";

function NetworkPage() {
  const [networkData, setNetworkData] = React.useState([]);

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
    queryHelpers(networkQuery, "", "", "", setNetworkData);
  }, []);
  console.log(networkData);

  return (
    <>
      <div>
        <RequestImg alt="request" src={requestIcon} />
        <Link to="/profile">
          <ProfileImg alt="profile" src={profileIcon} />
        </Link>
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
