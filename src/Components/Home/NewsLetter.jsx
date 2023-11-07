

const NewsLetter = () => {
    return (
        <div>
            <div className="w-full flex justify-center items-center h-[300px] dark:bg-gray-500" style={{backgroundImage: 'url(https://i.ibb.co/B2LPLHS/News-Letter.jpg)', backgroundSize: 'cover',  backgroundPosition: 'center center', backgroundBlendMode: 'multiply' }} >
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Subscribe to know our Latest news and Exclusive Offers</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;