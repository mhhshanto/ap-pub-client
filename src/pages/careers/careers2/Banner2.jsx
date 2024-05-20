import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link} from "react-router-dom";

function Banner2({data}) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <h1 className="text-3xl my-10 text-gray-400 container mx-auto px-5 xl:w-[65%]">Editorial Jobs</h1>
            <div className="container mx-auto xl:w-[65%] px-5 grid-cols-1 mb-16 text-gray-500 grid lg:grid-cols-3 lg:gap-10 gap-y-10">
                <div className="w-full mx-auto">

                    <div className='flex justify-center items-center  w-full relative'>
                        <select className='w-full outline-none px-3 border-gray-300' name="" id="">
                            <option selected>Select Category</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                    </div>
                    <div className="flex justify-between items-center mt-10">
                        <p>Filter Job</p>
                        <p>clear filter</p>
                    </div>
                    <div className="relative overflow-hidden mt-5">
                        <input className="w-full border-gray-300 text-sm" placeholder="search by country" type="text" name="" id="" />
                        <button className="absolute right-0 -top-1 text-center bg-green-600 text-white p-4"><FaSearch /></button>
                    </div>
                    <div className="flex  items-center gap-1 mt-2">
                        <input type="checkbox" name="box" id="box" />
                        <p id="box" className="text-sm">Anywhere</p>
                    </div>
                    <div className="relative overflow-hidden mt-3">
                        <input className="w-full border-gray-300 text-sm" placeholder="search by country" type="text" name="" id="" />
                        <button className="absolute right-0 -top-1 text-center bg-green-600 text-white p-4"><FaSearch /></button>
                    </div>
                    <p className="my-8 text-xl text-gray-700">At Australia Pacific Publisher, we prioritize a human-centric approach to our recruitment process, our dedicated team of recruiters personally reviews and evaluates each application. We only use artificial intelligence platforms to enhance the candidate experience (ex. Interview scheduling), not for talent evaluation activities.</p>
                    <div className="p-6 flex flex-col gap-5 justify-center items-center border-2 text-gray-700  border-gray-400">
                        <h1 className="text-3xl">Join Our Talent Network</h1>
                        <p className="text-lg text-center">If you’re interested in joining our team but don’t see an opportunity that fits from among our current openings, we encourage you to join our Talent Network. By doing so, you’ll get connected with our recruitment team and get exclusive access to our latest opportunities and events.</p>
                        <button className="text-lg text-gray-700 hover:bg-gray-400 hover:text-gray-50 transition-all duration-300 border-gray-500 px-14 py-3 border">Connect with us</button>
                    </div>
                    <div className="p-6 flex flex-col gap-5 justify-center items-center border-2 text-gray-700  border-gray-400 mt-12">
                        <h1 className="text-3xl">Fraud Update</h1>
                        <p className="text-lg text-center">Australia Pacific Publisher has noticed an increased frequency of fraudulent job scams. These fraudulent correspondences carry Australia Pacific Publisher’s name and/or logo and appear to be authorized communications.</p>
                        <button className="text-lg hover:underline flex items-center gap-2 text-gray-700 ">Learn More <FaAngleRight /></button>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="p-[10px] rounded border-b border-gray-400 bg-gray-100">
                        <p>Showing {data.length} Job Listings</p>
                    </div>

                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="p-8 text-lg flex justify-between items-center border-b">
                                    <div>
                                        <p>{item?.title}</p>
                                        <p>{item.location.map(it=> <p className="flex gap-2 flex-wrap justify-center lg:flex-col text-sm" key={it}> {it},</p>)}</p>
                                    </div>
                                    <div>
                                        <Link to={`/career/search/result/${item?._id}`}>
                                            <button className="bg-green-800 py-1 px-3 text-white  rounded">view</button>
                                        </Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
}

export default Banner2