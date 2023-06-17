import { Typography } from "@mui/material";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <Typography variant="h6" component="h1">
        Bet TV Test
      </Typography>
    </div>
  );
};

export default Logo;
