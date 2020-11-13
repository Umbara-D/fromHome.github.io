import React from 'react';
import './AboutUs.css';
import { Tabs } from "antd";
// import { Tabs } from 'antd';

// import umbara from './Pictures/umbara.png';
// import umbara from './Pictures/umbara.png';
// import umbara from './Pictures/umbara.png';
// import umbara from './Pictures/umbara.png';
import umbara from './Pictures/Umbara.png';

function callback(key) {
    console.log(key);
  }

const { TabPane } = Tabs;
const Person = () => {
    return(
      <div className="timsection">
        <h2>Developer</h2>
        <span className="brdrr"></span>
        <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane tab="Desy" key="1">
                <div className="pss">
                <a><img src={umbara}/></a>
                </div>
                <p  class="isifaq"> Nama: Desyra Ardiani <br/> 
                                    Tanggal Lahir : 27 November 1998  <br/> 
                                    NIM: F1D018012 <br/> </p>
            </TabPane>
            <TabPane tab="Kadek" key="2">
            <div className="pss">
                        <a><img src={umbara}/></a>
                        </div>
                        <p class="isifaq"> Nama : Ni Kadek Chintya Dwi Andayani <br/> 
                                        Tanggal Lahir : 18 Mei 1999 <br/> 
                                        NIM : F1D018045 <br/> </p>
            </TabPane>
            <TabPane tab="Latifah" key="3">
            <div className="pss">
                        <a><img src={umbara}/></a>
                        </div>
                        <p class="isifaq"> Nama : Nur Izza Latifah <br/> 
                                            Tanggal Lahir : 3 Januari 2000<br/> 
                                            NIM : F1D018050 <br/> </p>
            </TabPane>
            <TabPane tab="Umbara" key="4">
            <div className="pss">
                        <a><img src={umbara}/></a>
                        </div>
                        <p class="isifaq"> Nama : Umbara Diki Pratama <br/> 
                                            Tanggal Lahir : 12 April 2000<br/> 
                                            NIM : F1D018058 <br/> </p>
            </TabPane>
            <TabPane tab="Kiya" key="5">
            <div className="pss">
                        <a><img src={umbara}/></a>
                        </div>
                        <p class="isifaq"> Nama : Tazkiya Aulia Rachman<br/> 
                                            Tanggal Lahir : 12 April 2000<br/> 
                                            NIM : F1D018094 <br/> </p>
            </TabPane>
        </Tabs>
    </div>
    )
}

export default Person;