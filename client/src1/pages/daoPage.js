import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../components/loading';
import { covalentThunks } from '../app/covalentSlice';
import { daoThunks } from '../app/daoSlice';

import Daobasics from '../components/daobasics';
import Dummy from '../Api/dummy2.json';

import Chart from '../components/charts';
import Reviews from '../components/review';
import JobBoard from '../components/jobBoard';
import Proposals from '../components/Proposals';
export default function DaoPage() {
  const params = useParams();
  // console.log(contract);
  // console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(covalentThunks.getDaoDetails(params.contract));
    // console.log('ran');
    dispatch(daoThunks.getDaoDetails(params.contract));
    // dispatch(covalentThunks.getTreasuryOverTime(params.contract));
  }, [dispatch, params.contract]);

  const uiState = useSelector((state) => state.ui);
  const activeDao = useSelector((state) => state.dao?.activeDao);
  console.log(activeDao);
  const [counter, setCounter] = useState(1);

  useEffect(() => {}, [counter]);

  return uiState.pageLoading ? (
    <Loading></Loading>
  ) : (
    <div className="mt-10 ">
      <Daobasics dummy={Dummy} data={activeDao} />
      <div className="flex container justify-center">
        <div
          onClick={() => setCounter(1)}
          className="selector hover:text-purple-600 p-4 px-12 border cursor-pointer"
        >
          <h1>Reviews</h1>
        </div>
        <div
          onClick={() => setCounter(2)}
          className="selector hover:text-purple-600 p-4 px-12 border cursor-pointer"
        >
          <h1>Job Board</h1>
        </div>
        <div
          onClick={() => setCounter(3)}
          className="selector hover:text-purple-600 p-4 px-12 border cursor-pointer"
        >
          <h1>Analytics</h1>
        </div>
        <div
          onClick={() => setCounter(4)}
          className="selector hover:text-purple-600 p-4 px-12 border cursor-pointer"
        >
          <h1>Proposals</h1>
        </div>
      </div>
      {counter === 3 && <Chart />}
      {counter === 1 && <Reviews />}
      {counter === 4 && <Proposals />}
      {counter === 2 && <JobBoard jobs={activeDao?.jobs} />}
    </div>
  );
}
