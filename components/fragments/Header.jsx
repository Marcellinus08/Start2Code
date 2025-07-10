import Greeting from "../elements/Greeting";
const Header = (props) => {
    const {hello, letsgo} = props;
    return(
        <header className="flex justify-between items-center mb-8">
            <Greeting hello = {hello} letsgo = {letsgo}></Greeting>
            
            
            <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out">
                    <span className="material-icons text-3xl">notifications_none</span>
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out">
                    <span className="material-icons text-3xl">chat_bubble_outline</span>
                </button>
            </div>
        </header>
    );
};

export default Header;