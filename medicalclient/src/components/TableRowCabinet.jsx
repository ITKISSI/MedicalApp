import { useState } from "react";

const TableRowCabinet = ({ item, onUpdate, onCancel, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(item);

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
              choisir une localisation
            </button>
          </td>
          <td>
            <input
              type="text"
              name="age"
              value={formData.medecins.length}
              onChange={handleChange}
            />
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
            <button className="btn btn-warning" type="button" name="address">
              view localisation
            </button>
          </td>

          <td>{item.medecins.length}</td>
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
  );
};

export default TableRowCabinet;
