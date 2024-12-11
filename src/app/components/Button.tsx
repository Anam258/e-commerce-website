import React from 'react'; // Importing React to use React components.

// Defining the types of props that the Button component will accept.
interface ButtonProps {
  text: string; // The text to display on the button.
  classNames: string; // Additional CSS classes to style the button.
}

// Button component: A reusable styled button that accepts text and custom class names.
const Button: React.FC<ButtonProps> = ({ text, classNames }) => {
  return (
    <div
      // Adding default styles and dynamic class names for the button.
      className={`bg-black mb-4 px-4 text-white text-center cursor-pointer 
                  hover:bg-transparent border-2 border-black hover:text-black 
                  transition-all duration-300 ease-in-out ${classNames}`}
    >
      {text} {/* Displaying the button text provided as a prop. */}
    </div>
  );
};

export default Button; // Exporting the Button component for use in other parts of the application.
