import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

const isSubmitted = true;
const SubmissionCard = () => {
  const handleAcceptOrReject = (status: boolean) => {
    console.log(status);
  };
  return (
    <div className="rounded-md gb-black p-5 flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>Github: </span>
          <div className="flex items-center gap-2 text-[#c24dd0] hover:text-gray-300 transition-colors duration-300">
            <OpenInNewIcon />
            <a href="/" target="_blank" rel="noopener noreferrer">
              Go to link
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs ">
          <p>Submission Time: </p>
          <p className="text-gray-400">2024-11-29</p>
        </div>
      </div>
      <div>
        {isSubmitted ? (
          <div className="flex gap-5">
            <div className="text-green-500">
              <IconButton
                color="success"
                onClick={() => handleAcceptOrReject(true)}
              >
                <CheckIcon />
              </IconButton>
            </div>
            <div className="text-red-500">
              <IconButton
                color="error"
                onClick={() => handleAcceptOrReject(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <Button
            size="small"
            variant="outlined"
            color={isSubmitted ? "success" : "error"}
          >
            {isSubmitted ? "Accepted" : "Rejected"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubmissionCard;
