import { Box } from "@mui/material";
import Faqs from "./Faqs";
import ContactForm from "./ContactForm";
import Saas from "./Saas";
import { useGetAdminCpsQuery } from "../payment/cpcrm.api";

function Mainlayout() {
  console.log("Mainlayout rendered");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoicmFtZXNod2FyQGdtYWlsLmNvbSIsImNvbnRhY3QiOiI5NjczNTQ0MTA2IiwiaXNWZXJpZmllZCI6dHJ1ZSwiaXNBZG1pblRva2VuIjp0cnVlLCJpYXQiOjE3ODUxNTA0MjcsImV4cCI6MTc4NTE5MDAyN30.W6Q7-Tvi2q8R5clEFaoJuL9dtVCctn95yxPgjtbfZlk";

  const { data, isLoading, error } = useGetAdminCpsQuery({
    page: 1,
    limit: 10,
    token,
  });

  console.log("Data:", data);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  return (
    <Box display="flex" flexDirection="column">
      <Saas />
      <Faqs />
      <Box name="contact">
        <ContactForm />
      </Box>
    </Box>
  );
}

export default Mainlayout;
