import { useState } from 'react';
        
        

        function Header({ title }) {
            return <h1>{title ? title : 'Default React Title'}</h1>;
        }

        export default function HomePage() {
            const names = ['Sarah Davachi', 'Yumiko Morioka', 'Sophie Barker'];
            const [likes, setLikes] = useState(0);

            function handleClick() {
                
                setLikes(likes + 1);
            }

            return (
              <div>
                {/* Nesting the Header component */}
                <Header title="React" />
                <ul>
                    {names.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                </ul>
                <button onClick={handleClick}>Likes ({likes})</button>
              </div>
            );
        }

        
