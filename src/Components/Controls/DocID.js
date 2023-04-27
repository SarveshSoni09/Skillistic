import { query, getDocs, orderBy, limit } from "firebase/firestore";

export const DocIDGen = async (dataRef, letters) => {
  var lastDocID = await getLastDoc(dataRef, letters);

  lastDocID = lastDocID.toString();
  var lastID = parseInt(lastDocID.slice(6, 10));
  const initials = lastDocID.slice(0, 6);
  var newID = ++lastID;
  newID = addLeadingZeros(newID, 4);
  const newDocID = initials + newID;
  return newDocID;
};

const getLastDoc = async (dataRef, letters) => {
  var id = 0;
  const q = query(dataRef, orderBy("UserID", "desc"), limit(1));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    id = doc.data().UserID;
  });
  var deafultID = letters + "0000";
  id === 0 ? (id = deafultID) : (id = id);
  return id;
};

const addLeadingZeros = (num, totalLength) => {
  return String(num).padStart(totalLength, "0");
};
