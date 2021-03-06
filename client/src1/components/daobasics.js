import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';
import { daoThunks } from '../app/daoSlice';
// import ArrowUp from '../Assets/ArrowUp'
export default function Daobasics(props) {
  const dispatch = useDispatch();
  const { contract } = useParams();
  const daoState = useSelector((state) => state.dao.activeDao);
  // console.log(daoState)
  // const {data} = props
  // console.log(data)
  //logo
  //name
  //description
  //tags
  //upvote
  //
  const upvote = () => {
    dispatch(daoThunks.upvoteDao(contract));
  };
  return (
    <div className="w-full flex justify-between px-40 bg-gray-800 text-white py-12">
      <img
        className=" flex align-middle self-center logo w-20   h-20 pr-4"
        src={daoState?.dao?.logo_url}
        alt="Logo"
      />
      <div className="text-left	">
        <h1 className="text-4xl mb-4">{daoState?.dao?.contract_name}</h1>
        <h1>
          should create a description for each dao in the backend and retreive
        </h1>
        <div className="tags"></div>
      </div>
      <div onClick={() => upvote()} className="upvote">
        <button className=" upvote m-4 flex bg-purple-500 p-2 rounded-md items-center">
          <ArrowCircleUpIcon className="w-8" />
          <h1 className="ml-2 ">{daoState?.dao?.upvotes} Upvotes</h1>
        </button>
      </div>
    </div>
  );
}
