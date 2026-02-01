import { ArrowUpRight } from "lucide-react";

const LeftContent = (props) => {
  return (
    <div className="mt-20  pb-10 px-10 flex flex-col justify-between h-[80%]">
      <div>
        <h1 style={{ fontFamily: 'Conthrax', fontWeight: 400 }} className="text-5xl  font-bold">
          {props.carName}
        </h1>

        <h2 className="text-3xl font-semibold text-gray-500 mb-5">
          {props.companyName}
        </h2>

        <p className="text-2xl font-medium ">
          {props.price}
        </p>

        <p className="text-1xl text-gray-600 max-w-md leading-relaxed">
          {props.shortDescription}
        </p>
      </div>

      <a href={props.officialLink}>
        <ArrowUpRight className="w-14 h-14 text-black hover:text-gray-600 transition" />
      </a>
    </div>
  );
};

export default LeftContent;
