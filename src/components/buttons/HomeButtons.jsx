import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <button type="button" onClick={handleGoHome}>
      Home
    </button>
  );
};
