import { useEffect, useState } from "react";
import {
  MdArrowForward,
  MdBackHand,
  MdBackspace,
  MdClose,
  MdSearch,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MobileSearchArea,
  MobileSearchInput,
} from "../../components/mobile/header/style";

const Search = () => {
  const ctagories = useSelector((state) => state.categories.categories);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let searchList = [];
    ctagories.map((item) => {
      item.children.map((products) => {
        searchList.push(products);
      });
    });
    setList(searchList);
  }, [ctagories]);
  return (
    <div className="min-h-[100vh] max-h-[100vh] flex flex-col px-[10px] bg-[#fff] overflow-hidden   ">
      <div>
        <div className="flex w-full items-center py-[10px]">
          <MdArrowForward onClick={() => navigate(-1)} size={24} />
          <h2 className="mr-1">جستجو</h2>
        </div>
        <MobileSearchArea>
          <MdSearch size={25} color="#333" />
          <MobileSearchInput
            autoFocus={true}
            placeholder="جستوجو کنید"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 2 && <MdClose onClick={() => setSearch("")} />}
        </MobileSearchArea>
      </div>

      <div className="flex-1 mt-[20px] flex flex-col bg-[#fff] overflow-y-auto">
        {search.length > 2 &&
          list
            .filter((item) => item.name.includes(search))
            ?.map((item) => (
              <Link to={"/product-detail"} state={{ product: item }}>
                <div className="flex border-b-[1px] border-b-[#cacaca] py-[10px] mb-[10px] last:border-none">
                  <img
                    src={item.image}
                    width={60}
                    height={60}
                    className="ml-[10px]"
                  />
                  <div className="flex flex-col justify-between">
                    <span>{item.name}</span>
                    <span>{Number(item.price).toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Search;
