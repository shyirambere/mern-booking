import ManageHotelForm from "../form/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";
import { useMutation } from "react-query";
import * as apiClients from "../api-clients";

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClients.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};
export default AddHotel;
