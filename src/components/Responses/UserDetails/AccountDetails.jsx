import useUserContext from "../../../hooks/useUserContext";

export default function AccountDetails() {
  const { followers, following, totalCount } = useUserContext();

  
  return (
    <ul className="flex pt-8 pb-8 justify-center *:px-10 *:flex *:flex-col *:items-center *:capitalize *:gap-1.5 bg-slate-800 rounded-xl my-8 outline outline-2 outline-[#ec407a] outline-offset-[5px] shadow-[inset_0px_6px_6px_#ffffff99,inset_0px_0px_6px_#ffffff99] hover:shadow-[inset_0px_6px_6px_#ffffff99,inset_0px_0px_6px_#ffffff99,0px_0px_20px_#ec407a,0px_0px_20px_#ec407a,0px_0px_20px_#ec407a] hover:outline-none duration-300">
      <li>
        <span>{followers}</span> <span className="">followers</span>
      </li>
      <li className="border-l-2 border-r-2 border-[#ec407a] rounded-full shadow-[inset_3px_0_3px_-3px_#fff,inset_-3px_0_3px_-3px_#fff]">
        <span>{following}</span> <span>follwing</span>
      </li>
      <li className="">
        <span>{totalCount}</span> <span>total repositories</span>
      </li>
    </ul>
  );
}
