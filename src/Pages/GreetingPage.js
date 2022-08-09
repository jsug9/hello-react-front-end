import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../Redux/greeting/greeting';

const GreetingPage = () => {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting);
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default GreetingPage;
