import React,{ useEffect, useState } from "react";
import "./tag.css"
import { useSearchParams } from 'react-router-dom';
import { FaPaw } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Tag = () => {
   const [searchParams] = useSearchParams();
  const tagID = searchParams.get('tagID');
  const [tagData, setTagData] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching...")
        if (tagID) {
            try {
                const response = await fetch(`/api/get_tag/${tagID}`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                const data = await response.json();
                if (data) {
                  setTagData(data);
                  setIsDataLoaded(true);
                  console.log(data)
                } else {
                  console.error('No data returned from the API');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };
    fetchData();
  }, [tagID]);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }
  else{
   return (
      <div className="Tag">
      <div className="backgroundheader">
        
     
      <div className="cardContainer">
        <div className="card">
          <div className="titleContainer">
            <h3 className="title"><FaPaw/> Hi! I am {tagData.pet_name|| 'N/A'}, would you help my parents find me?</h3>
          </div>
          <div className="cardContent">
          <div className="image">200 x 200</div>
           
          <div className="textContainer">
          <p className="textStyle">Zoop Tag ID:{tagID} </p>
            <p className="textStyle">Parent's Name: {tagData.owner_name ||'N/A'}</p>
            <p className="textStyle">Address: {tagData.address || 'N/A'}</p>
            <p className="textStyle">Phone: {tagData.phone ||'N/A'}</p>
            <p className="textStyle">Email: {tagData.email ||  'N/A'}</p>
           
          </div>
           </div>
          <p className="textStyle"></p>
          <p className="textStyle">Other information:</p>
            <textarea className="textarea" readOnly value={"This is some example of multiline text.\nIt can contain multiple lines of information.\nMore data can be shown here."} />
          <div className="buttonContainer">
              <button className="gpsButton" onClick={() => alert("GPS location sent!")}>
                <FaLocationDot /> Send GPS location
              </button>
              
            </div>
             </div>
        </div>
      </div>
   
      
      <div className="whoWeAre">
        <img className="whoWeAreImage" src="./images/dog-image.png" alt=""/> 
     
        <div className="whoWeAreTextContainer">
          <h3>Who We Are</h3>
          <p className="whoWeAreText1">We Love Your Pet, Just as You Do!</p>
          <p className="whoWeAreText2">Rem ridi culus pharetra eligendi labore nulla explicabo sem! Modi ipsa, dolores cupiditate elementum molestias dis animi, consequ untur pulvinar, fringilla ducimus facilisis habitant, irure erure? Fringilla metus nulla expli cabo sem!</p>
          <button className="knowMoreButton">Know More</button>
        </div>
      </div>
      </div>
   
      
   );
  
};
};
export default Tag
 
