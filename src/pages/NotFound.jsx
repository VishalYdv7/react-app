import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button onClick={()=> navigate("/")}>Take me back</button>
    </div>
  );
};

export default NotFound