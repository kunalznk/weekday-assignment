import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Check } from '@mui/icons-material';

const JobCard = () => {
    const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      {/* Card header with logo and details */}
      <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ p: 2 }}>
        {/* Logo */}
        <Avatar src="/your-logo.png" alt="Logo" sx={{ width: 50, height: 50, marginRight: 2 }} />

        {/* Details in a column */}
        <Stack direction="column">
          <span>Fitssk</span>
          <span>Founding Engineer</span>
          <span>Delhi</span>
        </Stack>
      </Stack>

      <CardContent>
        <div>
          <span>About Company:</span>
          <br />
          <strong>About us:</strong>
          <br />
          <span>
            Some description - up to 8-9 lines and then some blur text.
            {expanded || (
              <>
                <br />
                <Button onClick={handleExpand} style={{ color: 'blue' }}>
                  View Job
                </Button>
              </>
            )}
          </span>
          {expanded && (
            <>
              <br />
              {/* Complete expanded description goes here */}
              {/* Replace this with your complete description */}
              <span>
                Complete description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </span>
            </>
          )}
        </div>
      </CardContent>

      {/* Estimated salary */}
      <CardContent>
        <Typography variant="body1">
          Estimated Salary: ₹35 - ₹40 <Check />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;