const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black py-8 mt-20 border-t border-gray-800 text-center">
            <div className="container mx-auto px-4">
                <p className="text-gray-400 text-sm">
                    {year} Lucas Nahuel Alassia
                </p>

            </div>
        </footer>
    );
};

export default Footer;
