import LikeButton from './like-button';

        function Header({ title }) {
            return <h1>{title ? title : 'Default React Title'}</h1>;
        }

        export default function HomePage() {
            const names = ['Sarah Davachi', 'Yumiko Morioka', 'Sophie Barker'];
            
            return (
              <div>
                {/* Nesting the Header component */}
                <Header title="React" />
                <ul>
                    {names.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                </ul>
                <LikeButton />
              </div>
            );
        }

        
