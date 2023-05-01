import { useEffect, useRef, useState } from 'react';

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    // useEffect(() => {
    //     console.log(dropdown);
        
    //     document.title = `current dropdown state is ${dropdown}`;
    // }, [dropdown] )
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(dropdown && ref.current && ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown',handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
          };
    }, [dropdown])
    console.log(ref);
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li ref = {ref}>
                  <button onClick={() => setDropdown((prev) => !prev) }>
                    Services <span>&#8595;</span>
                  </button>
                  { dropdown && (
                  <ul>
                    <li>Design</li>
                    <li>Development</li>
                  </ul>
)}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;