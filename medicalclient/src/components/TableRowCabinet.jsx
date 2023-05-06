import { useState } from "react";
import MedecinModel from "./MedecinModel";

const TableRowCabinet = ({ item, onUpdate, onCancel, onDelete,handleViewLocalisation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(item);
  const [modalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const handleShowMedecin = () => {
    showModal();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = (itemId) => {
    onUpdate(formData, itemId);
    setIsEditing(false);
  };
  const handleDeleteClick = (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(itemId);
    }
  };
  const handleCancelClick = () => {
    setFormData(item);
    setIsEditing(false);
    onCancel();
  };
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <tr>
        {isEditing ? (
          <>
            <td>{formData.id}</td>
            <td>
              <input
                type="text"
                name="denomination"
                value={formData.denomination}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </td>
            <td>
              <button className="btn btn-warning" type="button" name="address">
                choisir une nouvelle localisation
              </button>
            </td>
            <td>
              <a class="link-opacity-100 disabled">--</a>
            </td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleSaveClick(item.id);
                }}
              >
                Save
              </button>{" "}
              <button className="btn btn-danger" onClick={handleCancelClick}>
                Cancel
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{item.id}</td>
            <td>{item.denomination}</td>
            <td>{item.adresse}</td>
            <td>{item.telephone}</td>
            <td>
              {" "}
              <button className="btn btn-warning" type="button" name="address" onClick={handleViewLocalisation}>
                view localisation
              </button>
            </td>

            <td>
              {item.medecins.length == 0 ? (
                "0"
              ) : (
                <a
                  onClick={handleShowMedecin}
                  class="link-opacity-100"
                  href="#"
                >
                  Afficher les medecins
                </a>
              )}
            </td>
            <td>
              <button className="btn btn-warning" onClick={handleEditClick}>
                Edit
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteClick(item.id)}
              >
                supprimer
              </button>
            </td>
          </>
        )}
      </tr>
      <MedecinModel
        modalState={modalState}
        onClose={closeModal}
        data={item.medecins}
      />
    </>
  );
};

export default TableRowCabinet;
