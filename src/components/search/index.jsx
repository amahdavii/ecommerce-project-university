import { useEffect, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchContainer, SearchInput } from "../Header/style";

const Search = () => {
  const ctagories = useSelector((state) => state.categories.categories);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

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
    <div className="relative z-[10]  max-h-[400px]">
      <SearchContainer>
        <MdSearch size={24} />
        <SearchInput
          placeholder="جستوجو کنید"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 2 && <MdClose onClick={() => setSearch("")} />}
      </SearchContainer>
      {search.length > 2 && (
        <div className="max-h-[320px] px-[10px] flex flex-col absolute top-[50px] rounded-xl bg-[#fff] left-0 right-0 overflow-y-scroll">
          {list
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
      )}
    </div>
  );
};

export default Search;
