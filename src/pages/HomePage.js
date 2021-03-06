import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';
import { BandChart } from '../components/BandChart';


function HomePage() {

  const { online } = useContext(SocketContext);

  return (
    <div className='container'>

      <div className="alert">
        <p>
          Service Status:
          {
            online 
              ? <span className="text-success"> Online</span>
              : <span className="text-danger"> Offline</span>
          }
        </p>
      </div>

      <h2>BandNames</h2>
      <hr />

      <div className="row">
        <div className="col">
          <BandChart />
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>

        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
