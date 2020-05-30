import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const addSuccess = (message = 'Done!') => toast.success(message);
const addError = (message = 'Error') => toast.error(message);
const addWarning = (message = 'Warning') => toast.warning(message);
const addInfo = (message = 'Info') => toast.info(message);

export default {
  addSuccess, addError, addWarning, addInfo,
};
