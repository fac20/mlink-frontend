import React from "react";
import profileicon from "../../assets/images/profileicon.svg";
import requesticon from "../../assets/images/requesticon.svg";
import styled from "styled-components";
import { Input } from "../Profile/ProfileSetup.styles";
import { GetStartedBtn as SearchButton } from "../Onboarding/Onboarding.styles";
import { SearchInput, Form, SearchWrapper, NetworkWrapper, ProfileImg, RequestImg } from "./Network.styles";
import queryHelpers from "../../utils/queryHelper";

// set connectsdata(result)
// .map return <div>


function NetworkPage() {

    const [networkQuery, setNetworkQuery] = React.useState([]);
    // const [speciality, setSpeciality] = React.useState([]);
    // const [workplace, setWorkplace] = React.useState([]);
    
    React.useEffect(() => {
        //query to get the jobtitles back (found through the hasura console)
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
            queryHelpers(networkQuery)
    })
    console.log(queryHelpers(networkQuery));

    return(
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
            {/* Reusing the GetStartedBtn compontent for the search button. Inline styling is used to reset margin instead of creating
            a new component */}
                {/* <SearchButton style={{ "width": "80px", "height": "30px", "font-size": "14px", "margin": "0"}}>
                    Search
                </SearchButton> */}
            </Form>
            </SearchWrapper>
        </NetworkWrapper>

        </>
    )

}

export default NetworkPage;
