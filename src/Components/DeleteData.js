import axios from 'axios';

function DeleteData({ component, deleteData }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/components/${component.id}`);
      deleteData(component.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>{component.name}</h2>
      <p>{component.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteData;
