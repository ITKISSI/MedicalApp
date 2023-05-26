import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RatingForm() {
  const [ratingValue, setRatingValue] = useState(2);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleSubmit = () => {
    const doctorId = 2; 
    const patientId = 1; 
  
    const data = {
      doctorId: doctorId,
      patientId: patientId,
      ratingType:ratingValue-1
    };
  
    axios
      .post('http://localhost:8083/ratings', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  
    console.log("WORKINNGG");
    console.log(data);
  };
  

  return (
    <div>
      <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        value={ratingValue}
        onChange={handleRatingChange}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
      />
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}
