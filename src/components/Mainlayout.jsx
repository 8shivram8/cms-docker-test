import { Divider, Box } from "@mui/material";
import Faqs from "./Faqs";
import ContactForm from "./ContactForm";
import Saas from "./Saas";

function Mainlayout() {
  return (
    <Box display="flex" flexDirection="column">
      {/* <Box id="pricing">
                <PricingSection />
            </Box>
            <Internationalization /> */}
      {/* <Divider sx={{ width: '100%', borderColor: '#e0e0e0', borderBottomWidth: 1,}} /> */}
      <Saas />
      <Faqs />
      <Box name="contact">
        <ContactForm />
      </Box>
    </Box>
  );
}

export default Mainlayout;
