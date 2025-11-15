import { toast } from "react-toastify";

const getStoredApp = () =>{
    const storedAppSTR = localStorage.getItem("installed");
    if (storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else{
        return [];
    }


}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();
    if (storedAppData.includes(id)){
        toast.error("Already exists!!!")
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installed", data);
        toast.success("App installed Successfully!!")
        
    }
}

export const removeFromStoredDB = (id) => {
  const storedList = JSON.parse(localStorage.getItem("installed")) || [];

  const updatedList = storedList.filter(itemId => itemId !== id);

  localStorage.setItem("installed", JSON.stringify(updatedList));
  toast.success("App Uninstalled Successfully!!")
};

export { addToStoredDB, getStoredApp };