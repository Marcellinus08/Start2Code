const Mentor = (props) => {
    const{children, bidang} = props;
    return(
        <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h5 className="font-semibold text-gray-700 mb-2">Mentor Saya</h5>
            <div className="flex items-center space-x-3">
                <img alt="Avatar Mentor" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwFU9j6igS72YF9FB7jzejvg-l4smuJx366xccS4C0-Toc2f38GdwLq9LABMpek3F1HHluhfA6C7O4jsUcr0qRnNdhWOT6p5NIVITrc4CGeP2fs45GjjXfNtAVyJTlWrNJycdxkwledei7tLarqG2wIJhrZ3-TcGCpIf80sXxLq7-q9GcfvxzqJaYpVBtvzUlawDbczAQwInwS4z-kiZX-N3ulrkl6LKmglxeu1yZ6SyjOvqGXH6BclkCnI0j15vzMnunBOq9pyV9Z" />
                <div>
                    <p className="text-sm font-medium text-gray-800">{children}</p>
                    <p className="text-xs text-gray-500">{bidang}</p>
                </div>
            </div>      
        </div>
    );
};

export default Mentor;