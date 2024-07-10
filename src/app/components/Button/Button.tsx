interface ButtonProps {
  name: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ name, link }) => {
  return (
    <a
      href={link}
      className="bg-basic_purple text-white font-montserrat text-center drop-shadow-md font-medium text-sm py-2 px-6 rounded-lg hover:bg-dark_purple hover:scale-105 transition duration-300 w-auto"
    >
      {name}
    </a>
  );
};

export default Button;
