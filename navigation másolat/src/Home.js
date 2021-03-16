import {Link} from 'react-router-dom';

export default function Home(props) {
    return (
        <>
            <h1>There is no place like 127.0.0.1</h1>
            {props.children}
            <Link to="/users">Users</Link>
        </>
    );
}
