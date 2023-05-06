import { useState } from "react";

function TableRow({ item, onUpdate, onCancel, onDelete }) {
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
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="address"
              value={formData.adress}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="inp"
              value={formData.inp}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="specialite"
              value={formData.specialite}
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
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.age}</td>
          <td>{item.adress}</td>
          <td>{item.cin}</td>
          <td>{item.login}</td>
          <td>{item.password}</td>
          <td>{item.inp}</td>
          <td>{item.specialite}</td>
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
}

export default TableRow;
